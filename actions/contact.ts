'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
})

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  try {
    const validatedData = formSchema.parse({ name, email, message })

    await resend.emails.send({
      from: `${validatedData.name} <onboarding@resend.dev>`,
      replyTo: validatedData.email,
      to: process.env.CONTACT_EMAIL as string,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Message: ${validatedData.message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong> ${validatedData.message}</p>
      `,
    })

    return { success: true, message: 'Your message has been sent successfully!' }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Invalid form data. Please check your inputs and try again.' }
    }
    console.error('Error sending email:', error)
    return { success: false, message: 'There was an error sending your message. Please try again later.' }
  }
}
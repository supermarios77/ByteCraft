import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Bytecraft Support <contact@bytecraft.cc>',
      to: ['contact@bytecraft.cc'],
      replyTo: email,
      subject: `Support Request: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff;">
          <div style="background: linear-gradient(135deg, #14b8a6, #06b6d4); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h1 style="margin: 0; color: white; font-size: 24px; font-weight: bold;">New Support Request</h1>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; border: 1px solid #333;">
            <h2 style="color: #14b8a6; margin-top: 0; font-size: 18px;">Contact Details</h2>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
            
            <h2 style="color: #14b8a6; margin-top: 20px; font-size: 18px;">Message</h2>
            <div style="background-color: #0a0a0a; padding: 15px; border-radius: 6px; border-left: 4px solid #14b8a6; margin-top: 10px;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #1a1a1a; border-radius: 8px; border: 1px solid #333;">
            <p style="margin: 0; font-size: 14px; color: #888;">
              This message was sent from the Bytecraft support form. 
              Reply directly to this email to respond to the customer.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Bytecraft Support <support@bytecraft.cc>',
      to: [email],
      subject: 'We received your message - Bytecraft Support',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff;">
          <div style="background: linear-gradient(135deg, #14b8a6, #06b6d4); padding: 20px; border-radius: 12px; margin-bottom: 20px; text-align: center;">
            <h1 style="margin: 0; color: white; font-size: 24px; font-weight: bold;">Thank you for contacting us!</h1>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; border: 1px solid #333;">
            <p style="margin: 0 0 15px 0; font-size: 16px;">Hi ${name},</p>
            
            <p style="margin: 0 0 15px 0; line-height: 1.6;">
              We've received your message and will get back to you within 24 hours. 
              Our team is reviewing your request and will respond as soon as possible.
            </p>
            
            <div style="background-color: #0a0a0a; padding: 15px; border-radius: 6px; border-left: 4px solid #14b8a6; margin: 15px 0;">
              <p style="margin: 0; font-weight: bold; color: #14b8a6;">Your message:</p>
              <p style="margin: 8px 0 0 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            
            <p style="margin: 15px 0 0 0; line-height: 1.6;">
              In the meantime, you can check out our <a href="https://bytecraft.cc/support" style="color: #14b8a6; text-decoration: none;">FAQ section</a> 
              for quick answers to common questions.
            </p>
          </div>
          
          <div style="margin-top: 20px; text-align: center; padding: 15px; background-color: #1a1a1a; border-radius: 8px; border: 1px solid #333;">
            <p style="margin: 0; font-size: 14px; color: #888;">
              Best regards,<br>
              The Bytecraft Team
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

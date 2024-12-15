/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitContactForm } from '../actions/contact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  )
}

export function ContactForm() {
  const [formState, setFormState] = useState<{ success?: boolean; message?: string } | null>(null)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData)
    setFormState(result)
    toast({
      title: result.success ? 'Success!' : 'Error',
      description: result.message,
      variant: result.success ? 'default' : 'destructive',
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required placeholder="your.email@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required placeholder="How can we help you?" className="min-h-[100px]" />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  )
}


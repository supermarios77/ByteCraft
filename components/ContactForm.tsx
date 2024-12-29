/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitContactForm } from '../actions/contact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button 
      type="submit" 
      disabled={pending}
      className="w-full bg-[linear-gradient(45deg,#A642EE,#BE75FF)] hover:opacity-90 transition-opacity"
    >
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
    <form action={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">Name</Label>
        <Input 
          type="text" 
          id="name" 
          name="name" 
          required 
          placeholder="Your name"
          className="bg-white/5 border-purple-500/10 focus-visible:ring-purple-500/20 placeholder:text-white/30"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">Email</Label>
        <Input 
          type="email" 
          id="email" 
          name="email" 
          required 
          placeholder="your.email@example.com"
          className="bg-white/5 border-purple-500/10 focus-visible:ring-purple-500/20 placeholder:text-white/30"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          required 
          placeholder="How can we help you?"
          className="min-h-[120px] bg-white/5 border-purple-500/10 focus-visible:ring-purple-500/20 placeholder:text-white/30"
        />
      </div>
      
      <SubmitButton />
    </form>
  )
}


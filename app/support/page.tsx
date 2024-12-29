import { ContactForm } from '@/components/ContactForm'

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/40 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-primary sm:text-5xl md:text-6xl mb-4">
            Need Help?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our support team is here to assist you. Fill out the form below, and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}


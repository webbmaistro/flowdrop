import { PostHog } from 'posthog-node'

export const ph = new PostHog(process.env.POSTHOG_KEY!, {
  host: 'https://app.posthog.com'
})

// Helper functions for common events
export const trackEvent = {
  userSignedUp: (userId: string, email?: string) => {
    ph.capture({
      distinctId: userId,
      event: 'User Signed Up',
      properties: {
        email,
        timestamp: new Date().toISOString()
      }
    })
  },
  
  userSignedIn: (userId: string, method: 'google' | 'email') => {
    ph.capture({
      distinctId: userId,
      event: 'User Signed In',
      properties: {
        method,
        timestamp: new Date().toISOString()
      }
    })
  },
  
  emailSubscribed: (email: string) => {
    ph.capture({
      distinctId: email,
      event: 'Email Subscribed',
      properties: {
        email,
        timestamp: new Date().toISOString()
      }
    })
  },
  
  contactFormSubmitted: (email: string, message: string) => {
    ph.capture({
      distinctId: email,
      event: 'Contact Form Submitted',
      properties: {
        email,
        messageLength: message.length,
        timestamp: new Date().toISOString()
      }
    })
  }
}

// Usage: ph.capture({ distinctId, event: 'Webhook Fired', properties: { … } }) 
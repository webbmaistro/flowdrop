import { PostHog } from 'posthog-node'

// Only initialize PostHog if the key is available
const posthogKey = process.env.POSTHOG_KEY || process.env.NEXT_PUBLIC_POSTHOG_KEY

let ph: PostHog | null = null

if (posthogKey) {
  ph = new PostHog(posthogKey, {
    host: 'https://app.posthog.com'
  })
} else {
  console.warn('PostHog server-side tracking disabled: POSTHOG_KEY not found')
}

// Helper functions for common events
export const trackEvent = {
  userSignedUp: (userId: string, email?: string) => {
    if (!ph) return
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
    if (!ph) return
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
    if (!ph) return
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
    if (!ph) return
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

// Export the PostHog instance for direct usage if needed
export { ph }

// Usage: ph?.capture({ distinctId, event: 'Webhook Fired', properties: { … } }) 
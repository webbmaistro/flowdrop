import { usePostHog } from '@/components/PostHogProvider'

export function useAnalytics() {
  const posthog = usePostHog()

  const track = {
    buttonClick: (buttonName: string, location?: string) => {
      posthog?.capture('Button Clicked', {
        button_name: buttonName,
        location: location || 'unknown'
      })
    },
    
    pageView: (pageName: string) => {
      posthog?.capture('Page Viewed', {
        page_name: pageName
      })
    },
    
    signUpAttempt: (method: 'google' | 'email') => {
      posthog?.capture('Sign Up Attempt', {
        method
      })
    },
    
    signInAttempt: (method: 'google' | 'email') => {
      posthog?.capture('Sign In Attempt', {
        method
      })
    },
    
    emailSubscribe: (location: 'hero' | 'footer' | 'pricing') => {
      posthog?.capture('Email Subscribe Attempt', {
        location
      })
    },
    
    contactFormOpen: () => {
      posthog?.capture('Contact Form Opened')
    },
    
    pricingCardClick: (plan: string) => {
      posthog?.capture('Pricing Card Clicked', {
        plan
      })
    },
    
    docsPageView: (section: string) => {
      posthog?.capture('Docs Page Viewed', {
        section
      })
    }
  }

  return { track, posthog }
} 
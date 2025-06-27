'use client'

import { useEffect, createContext, useContext } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'

// Debug environment variables (only in development)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('PostHog Key:', process.env.NEXT_PUBLIC_POSTHOG_KEY ? 'Found' : 'Missing')
  console.log('PostHog Host:', process.env.NEXT_PUBLIC_POSTHOG_HOST)
}

// Initialize PostHog
if (typeof window !== 'undefined' && !posthog.__loaded) {
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY || 'phc_NReJaGbNSQWvDRslkiRHJghtTALOHPUSxP5mKdYqbHl'
  
  if (posthogKey && posthogKey !== 'undefined') {
    posthog.init(posthogKey, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      autocapture: true,
      capture_pageview: false, // We'll handle this manually
      session_recording: {
        maskAllInputs: true,
        recordCrossOriginIframes: false
      },
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      }
    })
    if (process.env.NODE_ENV === 'development') {
      console.log('PostHog initialized successfully')
    }
  } else {
    console.error('PostHog key is missing or undefined')
  }
}

// Create PostHog context
const PostHogContext = createContext(posthog)

export function usePostHog() {
  return useContext(PostHogContext)
}

export function PostHogPageview() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && typeof window !== 'undefined') {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture('$pageview', {
        $current_url: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

export default function PHProvider({ children }: { children: React.ReactNode }) {
  return (
    <PostHogContext.Provider value={posthog}>
      <PostHogPageview />
      {children}
    </PostHogContext.Provider>
  )
} 
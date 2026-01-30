import { useState, useEffect } from 'react'

// Custom hook for responsive design
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

// Hook for mobile detection
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 640px)')
}

// Hook for reduced motion preference
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

// Hook for dark mode (always dark for this app)
export function useDarkMode(): boolean {
  return true
}

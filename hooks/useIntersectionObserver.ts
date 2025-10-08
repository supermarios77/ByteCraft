"use client"

import { useEffect, useRef, useState } from "react"

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const { threshold = 0.2, rootMargin, triggerOnce = true } = options
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

export function useMultipleIntersectionObserver(
  sectionCount: number,
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.2, rootMargin, triggerOnce = true } = options
  const [visibleSections, setVisibleSections] = useState<boolean[]>(new Array(sectionCount).fill(false))
  const refs = useRef<(HTMLElement | null)[]>(new Array(sectionCount).fill(null))

  useEffect(() => {
    const observers = refs.current.map((element, index) => {
      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
            if (triggerOnce) {
              observer.unobserve(element)
            }
          } else if (!triggerOnce) {
            setVisibleSections(prev => {
              const newState = [...prev]
              newState[index] = false
              return newState
            })
          }
        },
        { threshold, rootMargin }
      )

      observer.observe(element)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [threshold, rootMargin, triggerOnce, sectionCount])

  const setRef = (index: number) => (element: HTMLElement | null) => {
    refs.current[index] = element
  }

  return { setRef, visibleSections }
}

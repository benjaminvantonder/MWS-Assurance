import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export function usePrefetchOnHref(href: string) {
  const navigate = useNavigate()

  const prefetch = useCallback(() => {
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = href
    link.as = 'document'
    document.head.appendChild(link)
  }, [href])

  const handleMouseEnter = useCallback(() => {
    prefetch()
  }, [prefetch])

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    navigate(href)
  }, [href, navigate])

  return { handleMouseEnter, handleClick }
}

import { RefObject, useEffect } from 'react'

type AnyEvent = MouseEvent | TouchEvent | KeyboardEvent

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void,
): void {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler(event)
      }
    }

    document.addEventListener(`mousedown`, listener)
    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`keydown`, handleEsc)
    }

    // Reload only if ref or handler changes
  }, [ref, handler])
}

export default useOnClickOutside

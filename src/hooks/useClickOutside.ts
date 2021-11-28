import { MutableRefObject, RefObject, useEffect } from 'react'

import { off, on } from './helpers'
import { useSyncedRef } from './useSyncedRef'

const DEFAULT_EVENTS = ['mousedown', 'touchstart']

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T> | MutableRefObject<T>,
  callback: EventListener,
  events: string[] = DEFAULT_EVENTS
): void {
  const cbRef = useSyncedRef(callback)
  const refRef = useSyncedRef(ref)

  useEffect(() => {
    function handler(this: HTMLElement, event: Event) {
      if (!refRef.current.current) return

      const { target: evtTarget } = event
      const cb = cbRef.current

      if (!evtTarget || (!!evtTarget && !refRef.current.current.contains(evtTarget as Node))) {
        cb.call(this, event)
      }
    }

    events.forEach((name) => on(document, name, handler, { passive: true }))

    return () => {
      events.forEach((name) => off(document, name, handler, { passive: true }))
    }
  }, [...events])
}

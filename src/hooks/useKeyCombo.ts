import { useEffect, useMemo, useState } from 'react'

import { useKeyboardEvent } from './useKeyboardEvent'

export function useKeyCombo(combo: string, callback: () => void) {
  const [keysPressed, setKeysPressed] = useState<string[]>([])

  const pressedCombo = useMemo(() => {
    const res = keysPressed.length ? keysPressed.join('+') : ''
    return res
  }, [keysPressed])

  useKeyboardEvent(
    true,
    (e) => {
      setKeysPressed((prev) => prev.slice(-5).concat([e.key]))
    },
    [],
    { eventOptions: { passive: true } }
  )

  useEffect(() => {
    if (pressedCombo.includes(combo)) {
      callback()
      setKeysPressed([])
    }
  }, [keysPressed])
}

import { useKeyboardEvent } from './useKeyboardEvent'

export const useKeyPressed = (targetKey: string, callback: () => void) => {
  useKeyboardEvent(
    true,
    ({ key }) => {
      if (key === targetKey) return callback()
    },
    [],
    { eventOptions: { passive: true } }
  )
}

import { HTMLAttributes, ReactNode, useRef } from 'react'

import { useClickOutside } from '../hooks/useClickOutside'
import { useKeyPressed } from '../hooks/useKeyPressed'
import * as S from './styled'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  onClose: () => void
  open: boolean
  children: ReactNode
}

/**
 * Reusable\ modal component
 */
export function Modal({ children, open, onClose, ...props }: ModalProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useClickOutside(ref, onClose)
  useKeyPressed('Escape', onClose)

  if (!open) return null

  const onRef = (instance: HTMLDivElement | null) => {
    if (!instance) return
    ref.current = instance
  }

  return (
    <S.Backdrop className="Modal--active">
      <S.Container ref={onRef} {...props}>
        {children}
      </S.Container>
    </S.Backdrop>
  )
}

Modal.Header = S.Header
Modal.Body = S.Body
Modal.Footer = S.Footer

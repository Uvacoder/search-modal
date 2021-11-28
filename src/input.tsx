import { ChangeEventHandler, CSSProperties, InputHTMLAttributes, useEffect, useRef } from 'react'

export const inputStyle = {
  background: 'transparent',
  height: '4.5rem',
  fontSize: '1rem',
  fontWeight: 500,
  color: '#000000',
  margin: '0 1rem',
  flex: 'auto',
  minWidth: 0
} as CSSProperties

const defaultSearchProps = {
  autoComplete: 'lint',
  maxLength: 64,
  type: 'search',
  enterKeyHint: 'go'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({ onChange, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const inputProps =
    props.type === 'search'
      ? {
          ...props,
          ...defaultSearchProps
        }
      : {}

  return <input {...inputProps} ref={inputRef} style={inputStyle} onChange={onChange} />
}

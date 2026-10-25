import type { JSX } from '../../types'
import { cx } from '../../utils/cx'

export type InputType = 'text' | 'email' | 'password' | 'url' | 'search' | 'tel' | 'number'

export interface InputProps {
  value: string
  onChange: (value: string) => void
  type?: InputType
  placeholder?: string
  disabled?: boolean
  className?: string
  id?: string
  name?: string
  autoComplete?: string
  autoFocus?: boolean
}

export function Input ({
  value,
  onChange,
  type = 'text',
  placeholder,
  disabled,
  className,
  id,
  name,
  autoComplete,
  autoFocus,
}: InputProps): JSX.Element {
  return (
    <input
      className={cx('dsh-ui-input', className)}
      type={type}
      value={value}
      disabled={disabled}
      id={id}
      name={name}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

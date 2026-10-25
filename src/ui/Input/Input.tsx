import { classes } from 'html-classes'
import type * as ReactTypes from 'react'

import type { JSX } from '../../types'

export type InputType = 'text' | 'email' | 'password' | 'url' | 'search' | 'tel' | 'number'

export interface InputProps extends Omit<ReactTypes.DetailedHTMLProps<ReactTypes.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | 'value' | 'onChange'> {
  value: string
  onChange: (value: string) => void
  type?: InputType
}

export function Input ({
  value,
  onChange,
  type = 'text',
  className,
  ...props
}: InputProps): JSX.Element {
  return (
    <input
      {...props}
      className={classes(['dsh-ui-input', className])}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

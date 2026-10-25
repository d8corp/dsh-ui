import { classes } from 'html-classes'
import type * as ReactTypes from 'react'

import type { JSX } from '../../types'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends ReactTypes.DetailedHTMLProps<ReactTypes.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button ({
  variant = 'primary',
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      type='button'
      {...props}
      className={classes(['dsh-ui-button', 'dsh-ui-button-' + variant, className])}
    />
  )
}

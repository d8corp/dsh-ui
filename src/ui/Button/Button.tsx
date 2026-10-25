import type * as ReactTypes from 'react'

import type { JSX } from '../../types'
import { cx } from '../../utils/cx'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps {
  children?: ReactTypes.ReactNode
  variant?: ButtonVariant
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  onClick?: (event: ReactTypes.MouseEvent<HTMLButtonElement>) => void
}

export function Button ({
  children,
  variant = 'primary',
  type = 'button',
  disabled,
  className,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cx('dsh-ui-button', 'dsh-ui-button-' + variant, className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

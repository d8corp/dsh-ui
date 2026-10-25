import type * as ReactTypes from 'react'

import { cx } from '../../utils/cx'
import { getReact } from '../../utils/react'

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
}: ButtonProps) {
  const React = getReact()

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

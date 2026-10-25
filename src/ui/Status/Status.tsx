import type * as ReactTypes from 'react'

import { cx } from '../../utils/cx'
import { getReact } from '../../utils/react'

export type StatusState = 'connected' | 'pending' | 'missing' | 'neutral'

export interface StatusProps {
  state: StatusState
  label: ReactTypes.ReactNode
  className?: string
}

export function Status ({ state, label, className }: StatusProps) {
  const React = getReact()

  return (
    <span className={cx('dsh-ui-badge', 'dsh-ui-badge-' + state, className)}>
      <span className='dsh-ui-dot' />
      {label}
    </span>
  )
}

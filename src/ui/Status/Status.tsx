import type * as ReactTypes from 'react'

import type { JSX } from '../../types'
import { cx } from '../../utils/cx'

export type StatusState = 'connected' | 'pending' | 'missing' | 'neutral'

export interface StatusProps {
  state: StatusState
  label: ReactTypes.ReactNode
  className?: string
}

export function Status ({ state, label, className }: StatusProps): JSX.Element {
  return (
    <span className={cx('dsh-ui-badge', 'dsh-ui-badge-' + state, className)}>
      <span className='dsh-ui-dot' />
      {label}
    </span>
  )
}

import { classes } from 'html-classes'
import type * as ReactTypes from 'react'

import type { JSX } from '../../types'

export type StatusState = 'connected' | 'pending' | 'missing' | 'neutral'

export interface StatusProps extends ReactTypes.DetailedHTMLProps<ReactTypes.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  state: StatusState
  label: ReactTypes.ReactNode
}

export function Status ({ state, label, className, ...props }: StatusProps): JSX.Element {
  return (
    <span {...props} className={classes(['dsh-ui-badge', 'dsh-ui-badge-' + state, className])}>
      <span className='dsh-ui-dot' />
      {label}
    </span>
  )
}

import type * as ReactTypes from 'react'

import type { JSX } from '../../types'
import { cx } from '../../utils/cx'

export interface LoadingProps {
  text?: ReactTypes.ReactNode
  className?: string
}

export function Loading ({ text = 'Loading…', className }: LoadingProps): JSX.Element {
  return <div className={cx('dsh-ui-loading', className)}>{text}</div>
}

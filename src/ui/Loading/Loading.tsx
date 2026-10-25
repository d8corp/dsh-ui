import type * as ReactTypes from 'react'

import { cx } from '../../utils/cx'
import { getReact } from '../../utils/react'

export interface LoadingProps {
  text?: ReactTypes.ReactNode
  className?: string
}

export function Loading ({ text = 'Loading…', className }: LoadingProps) {
  const React = getReact()

  return <div className={cx('dsh-ui-loading', className)}>{text}</div>
}

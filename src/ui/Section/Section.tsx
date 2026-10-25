import type * as ReactTypes from 'react'

import { cx } from '../../utils/cx'
import { getReact } from '../../utils/react'

export interface SectionProps {
  children?: ReactTypes.ReactNode
  className?: string
}

export function Section ({ children, className }: SectionProps) {
  const React = getReact()

  return <div className={cx('dsh-ui-section', className)}>{children}</div>
}

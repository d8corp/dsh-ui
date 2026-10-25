import type * as ReactTypes from 'react'

import { cx } from '../../utils/cx'
import { getReact } from '../../utils/react'

export type NoticeKind = 'error' | 'success'

export interface NoticeProps {
  kind: NoticeKind
  text: ReactTypes.ReactNode
  className?: string
}

export function Notice ({ kind, text, className }: NoticeProps) {
  const React = getReact()

  return (
    <div className={cx('dsh-ui-notice', 'dsh-ui-notice-' + kind, className)}>
      {text}
    </div>
  )
}

import type * as ReactTypes from 'react'

import type { JSX } from '../../types'
import { cx } from '../../utils/cx'

export type NoticeKind = 'error' | 'success'

export interface NoticeProps {
  kind: NoticeKind
  text: ReactTypes.ReactNode
  className?: string
}

export function Notice ({ kind, text, className }: NoticeProps): JSX.Element {
  return (
    <div className={cx('dsh-ui-notice', 'dsh-ui-notice-' + kind, className)}>
      {text}
    </div>
  )
}

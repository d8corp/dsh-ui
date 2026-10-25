import { classes } from 'html-classes'
import type * as ReactTypes from 'react'

import type { JSX } from '../../types'

export type NoticeKind = 'error' | 'success'

export interface NoticeProps extends ReactTypes.DetailedHTMLProps<ReactTypes.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  kind: NoticeKind
  text: ReactTypes.ReactNode
}

export function Notice ({ kind, text, className, ...props }: NoticeProps): JSX.Element {
  return (
    <div {...props} className={classes(['dsh-ui-notice', 'dsh-ui-notice-' + kind, className])}>
      {text}
    </div>
  )
}

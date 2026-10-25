import { classes } from 'html-classes'
import type * as ReactTypes from 'react'

import type { JSX } from '../../types'

export interface LoadingProps extends ReactTypes.DetailedHTMLProps<ReactTypes.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text?: ReactTypes.ReactNode
}

export function Loading ({ text = 'Loading…', className, ...props }: LoadingProps): JSX.Element {
  return <div {...props} className={classes(['dsh-ui-loading', className])}>{text}</div>
}

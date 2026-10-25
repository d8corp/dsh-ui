import { classes } from 'html-classes'
import type * as ReactTypes from 'react'

import type { JSX } from '../../types'

export interface SectionProps extends ReactTypes.DetailedHTMLProps<ReactTypes.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function Section ({ className, ...props }: SectionProps): JSX.Element {
  return <div {...props} className={classes(['dsh-ui-section', className])} />
}

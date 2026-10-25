import { classes } from 'html-classes'
import type * as ReactTypes from 'react'

import type { JSX } from '../../types'

export interface RowProps extends Omit<ReactTypes.DetailedHTMLProps<ReactTypes.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {
  title: ReactTypes.ReactNode
  description?: ReactTypes.ReactNode
  control: ReactTypes.ReactNode
  badge?: ReactTypes.ReactNode
}

export function Row ({ title, description, control, badge, className, ...props }: RowProps): JSX.Element {
  return (
    <div {...props} className={classes(['dsh-ui-row', className])}>
      <div className='dsh-ui-row-text'>
        <div className='dsh-ui-row-title-row'>
          <span className='dsh-ui-row-title'>{title}</span>
          {badge || null}
        </div>
        {description ? <div className='dsh-ui-row-description'>{description}</div> : null}
      </div>
      <div className='dsh-ui-row-control'>{control}</div>
    </div>
  )
}

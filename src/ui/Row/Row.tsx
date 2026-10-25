import type * as ReactTypes from 'react'

import type { JSX } from '../../types'
import { cx } from '../../utils/cx'

export interface RowProps {
  title: ReactTypes.ReactNode
  description?: ReactTypes.ReactNode
  control: ReactTypes.ReactNode
  badge?: ReactTypes.ReactNode
  className?: string
}

export function Row ({ title, description, control, badge, className }: RowProps): JSX.Element {
  return (
    <div className={cx('dsh-ui-row', className)}>
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

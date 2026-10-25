import type * as ReactTypes from 'react'

import { cx } from '../../utils/cx'
import { getReact } from '../../utils/react'

export interface RowProps {
  title: ReactTypes.ReactNode
  description?: ReactTypes.ReactNode
  control: ReactTypes.ReactNode
  badge?: ReactTypes.ReactNode
  className?: string
}

export function Row ({ title, description, control, badge, className }: RowProps) {
  const React = getReact()

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

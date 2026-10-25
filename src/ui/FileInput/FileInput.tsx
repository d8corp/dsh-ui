import type * as ReactTypes from 'react'

import { cx } from '../../utils/cx'
import { getReact } from '../../utils/react'

export interface FileInputProps {
  onChange: (event: ReactTypes.ChangeEvent<HTMLInputElement>) => void
  accept?: string
  disabled?: boolean
  className?: string
  id?: string
  name?: string
}

export function FileInput ({
  onChange,
  accept,
  disabled,
  className,
  id,
  name,
}: FileInputProps) {
  const React = getReact()

  return (
    <input
      className={cx('dsh-ui-file-input', className)}
      type='file'
      accept={accept}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
    />
  )
}

import type * as ReactTypes from 'react'

import type { JSX } from '../../types'
import { cx } from '../../utils/cx'

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
}: FileInputProps): JSX.Element {
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

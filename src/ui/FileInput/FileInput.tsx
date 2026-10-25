import { classes } from 'html-classes'
import type * as ReactTypes from 'react'

import type { JSX } from '../../types'

export interface FileInputProps extends Omit<ReactTypes.DetailedHTMLProps<ReactTypes.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | 'onChange'> {
  onChange: (event: ReactTypes.ChangeEvent<HTMLInputElement>) => void
}

export function FileInput ({
  onChange,
  className,
  ...props
}: FileInputProps): JSX.Element {
  return (
    <input
      {...props}
      className={classes(['dsh-ui-file-input', className])}
      type='file'
      onChange={onChange}
    />
  )
}

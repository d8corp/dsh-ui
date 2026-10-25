import type * as ReactTypes from 'react'

import { jsx, jsxs } from './jsx-runtime'

export { Fragment } from './jsx-runtime'
export type { JSX } from './types'

export interface JSXSource {
  fileName?: string
  lineNumber?: number
  columnNumber?: number
}

export function jsxDEV (
  type: ReactTypes.ElementType,
  props: unknown,
  key?: ReactTypes.Key | null,
  isStaticChildren?: boolean,
  _source?: JSXSource,
  _self?: unknown,
): ReactTypes.ReactElement {
  return isStaticChildren ? jsxs(type, props, key) : jsx(type, props, key)
}

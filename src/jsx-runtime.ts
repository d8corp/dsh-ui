import type * as ReactTypes from 'react'

import { getReact } from './utils/react'

export type { JSX } from './types'

export const Fragment = Symbol.for('react.fragment') as unknown as typeof ReactTypes.Fragment

function createElement (type: ReactTypes.ElementType, props: unknown, key?: ReactTypes.Key | null): ReactTypes.ReactElement {
  const React = getReact()

  const config = key === undefined || key === null
    ? props
    : { ...(props as object), key }

  return (React.createElement as unknown as (
    type: ReactTypes.ElementType,
    props?: unknown,
  ) => ReactTypes.ReactElement)(type, config)
}

export function jsx (type: ReactTypes.ElementType, props: unknown, key?: ReactTypes.Key | null): ReactTypes.ReactElement {
  return createElement(type, props, key)
}

export function jsxs (type: ReactTypes.ElementType, props: unknown, key?: ReactTypes.Key | null): ReactTypes.ReactElement {
  return createElement(type, props, key)
}

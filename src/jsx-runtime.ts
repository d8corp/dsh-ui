import type * as ReactTypes from 'react'

import { getReact } from './utils/react'

export const Fragment = Symbol.for('react.fragment') as unknown as typeof ReactTypes.Fragment

export namespace JSX {
  export type ElementType = ReactTypes.JSX.ElementType
  export interface Element extends ReactTypes.JSX.Element {}
  export interface ElementClass extends ReactTypes.JSX.ElementClass {}
  export interface ElementAttributesProperty extends ReactTypes.JSX.ElementAttributesProperty {}
  export interface ElementChildrenAttribute extends ReactTypes.JSX.ElementChildrenAttribute {}
  export type LibraryManagedAttributes<C, P> = ReactTypes.JSX.LibraryManagedAttributes<C, P>
  export interface IntrinsicAttributes extends ReactTypes.JSX.IntrinsicAttributes {}
  export interface IntrinsicClassAttributes<T> extends ReactTypes.JSX.IntrinsicClassAttributes<T> {}
  export interface IntrinsicElements extends ReactTypes.JSX.IntrinsicElements {}
}

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

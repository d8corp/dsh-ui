import type * as ReactTypes from 'react'

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

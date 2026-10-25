import type * as ReactTypes from 'react'

let react: typeof ReactTypes | undefined

export function getReact (): typeof ReactTypes {
  if (!react) {
    throw new Error('@d8corp/dsh-ui: React is not initialized. Use factory() or setReact() before rendering.')
  }

  return react
}

export function setReact (value: typeof ReactTypes): void {
  react = value
}

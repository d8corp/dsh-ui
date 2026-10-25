import { ensureStyles } from './utils/ensureStyles'
import { setReact } from './utils/react'

export type ModuleRequire = (id: string) => any

export interface DshModuleLoader {
  load (module: {
    id: string
    factory: (require: ModuleRequire) => unknown
    [key: string]: unknown
  }): void
}

export interface FactoryOptions {
  id: string
  factory: (require: ModuleRequire) => unknown
  [key: string]: unknown
}

export function factory ({ id, factory, ...rest }: FactoryOptions): void {
  const loader = (globalThis as { __ModuleLoader__?: DshModuleLoader }).__ModuleLoader__

  if (!loader) {
    throw new Error('@d8corp/dsh-ui: window.__ModuleLoader__ is not available.')
  }

  loader.load({
    ...rest,
    id,
    factory: (require) => {
      setReact(require('react'))
      ensureStyles(id)

      return factory(require)
    },
  })
}

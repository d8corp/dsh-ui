/**
 * @jest-environment jsdom
 */
import { factory } from '../src/factory'
import { getReact } from '../src/utils/react'

const fakeReact = { createElement: jest.fn() } as any
const host = globalThis as any

function installLoader (): jest.Mock {
  const load = jest.fn()

  host.__ModuleLoader__ = { load }

  return load
}

afterEach(() => {
  delete host.__ModuleLoader__
  document.head.querySelectorAll('style[data-dsh-ui]').forEach((style) => style.remove())
})

describe('factory', () => {
  it('registers the module, sets React and injects the styles', () => {
    const load = installLoader()
    const result = { apply: jest.fn() }
    const register = jest.fn(() => result)

    factory({ id: '@test/plugin', factory: register, inject: ['slots'] })

    expect(load).toHaveBeenCalledTimes(1)

    const loaded = load.mock.calls[0][0]

    expect(loaded.id).toBe('@test/plugin')
    expect(loaded.inject).toEqual(['slots'])
    expect(register).not.toHaveBeenCalled()
    expect(loaded.factory((id: string) => (id === 'react' ? fakeReact : undefined))).toBe(result)
    expect(register).toHaveBeenCalledWith(expect.any(Function))
    expect(getReact()).toBe(fakeReact)
    expect(document.head.querySelector('style[data-dsh-ui="@test/plugin"]')).not.toBeNull()
  })

  it('throws without the DSH module loader', () => {
    expect(() => factory({ id: '@test/plugin', factory: () => null })).toThrow(/__ModuleLoader__/)
  })
})

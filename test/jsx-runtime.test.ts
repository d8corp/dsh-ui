import { Fragment, jsx } from '../src/jsx-runtime'

test('throws a descriptive error until React is set', () => {
  expect(() => jsx('div', null)).toThrow('@d8corp/dsh-ui: React is not initialized.')
})

test('exposes the React fragment symbol', () => {
  expect(Fragment).toBe(Symbol.for('react.fragment'))
})

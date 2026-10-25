/** @jsxRuntime automatic */
/** @jsxImportSource ../src */

import type * as ReactTypes from 'react'

import { jsxDEV } from '../src/jsx-dev-runtime'
import { Button, Row, Section, Status } from '../src/ui'
import { setReact } from '../src/utils/react'

interface FakeElement {
  type: unknown
  props: Record<string, unknown> | null
}

const createElement = jest.fn((type: unknown, props: Record<string, unknown> | null): FakeElement => ({ type, props }))
const fakeReact = { createElement } as unknown as typeof ReactTypes

beforeEach(() => {
  createElement.mockClear()
  setReact(fakeReact)
})

function Settings () {
  return (
    <Section>
      <Row
        title='Connection'
        description='Authenticate the integration'
        badge={<Status state='connected' label='Ready' />}
        control={<Button onClick={() => undefined}>Connect</Button>}
      />
    </Section>
  )
}

test('README example JSX is created through the shared React', () => {
  const section = Settings() as unknown as FakeElement
  const row = section.props?.children as FakeElement

  expect(section.type).toBe(Section)
  expect(row.type).toBe(Row)
  expect(row.props?.title).toBe('Connection')
  expect((row.props?.badge as FakeElement).type).toBe(Status)
  expect((row.props?.control as FakeElement).type).toBe(Button)
  expect(createElement).toHaveBeenCalledTimes(4)
})

test('the automatic runtime forwards keys and static children', () => {
  const keyed = <div key='abc' id='x' /> as unknown as FakeElement
  const list = <Section><span /><span /></Section> as unknown as FakeElement

  expect(keyed.props).toEqual({ id: 'x', key: 'abc' })
  expect(list.props?.children as FakeElement[]).toHaveLength(2)
})

test('jsxDEV creates elements through the shared React', () => {
  const element = jsxDEV('div', { id: 'x' }, 'key', false, { fileName: 'test.tsx', lineNumber: 1, columnNumber: 1 })

  expect(element).toEqual({ type: 'div', props: { id: 'x', key: 'key' } })
})

/**
 * @jest-environment jsdom
 */
import { Button } from '../src/ui/Button'
import { FileInput } from '../src/ui/FileInput'
import { Input } from '../src/ui/Input'
import { Loading } from '../src/ui/Loading'
import { Notice } from '../src/ui/Notice'
import { Row } from '../src/ui/Row'
import { Section } from '../src/ui/Section'
import { Status } from '../src/ui/Status'
import { setReact } from '../src/utils/react'

const createElement = jest.fn((type: unknown, props: unknown, ...children: unknown[]) => ({ type, props, children }))
const fakeReact = { createElement } as any

beforeAll(() => {
  setReact(fakeReact)
})

beforeEach(() => {
  createElement.mockClear()
})

describe('components', () => {
  it('renders a primary button', () => {
    const tree = Button({ children: 'Save' }) as any

    expect(tree.type).toBe('button')
    expect(tree.props).toMatchObject({
      className: 'dsh-ui-button dsh-ui-button-primary',
      type: 'button',
    })
    expect(tree.children).toEqual(['Save'])
  })

  it('passes input changes as values', () => {
    const onChange = jest.fn()
    const tree = Input({ value: '', onChange }) as any

    tree.props.onChange({ target: { value: 'hello' } })

    expect(tree.props.className).toBe('dsh-ui-input')
    expect(onChange).toHaveBeenCalledWith('hello')
  })

  it('forwards file input change events', () => {
    const onChange = jest.fn()
    const event = { target: { files: [] } }
    const tree = FileInput({ onChange }) as any

    tree.props.onChange(event)

    expect(tree.props.type).toBe('file')
    expect(tree.props.className).toBe('dsh-ui-file-input')
    expect(onChange).toHaveBeenCalledWith(event)
  })

  it('renders a row with a badge and description', () => {
    const tree = Row({
      title: 'Status',
      description: 'Connected',
      badge: 'badge',
      control: 'control',
    }) as any

    expect(tree.props.className).toBe('dsh-ui-row')
    expect(tree.children[0].props.className).toBe('dsh-ui-row-text')
    expect(tree.children[0].children[0].props.className).toBe('dsh-ui-row-title-row')
    expect(tree.children[0].children[1].props.className).toBe('dsh-ui-row-description')
    expect(tree.children[1].props.className).toBe('dsh-ui-row-control')
  })

  it('renders status and notice variants', () => {
    const status = Status({ state: 'connected', label: 'Ready' }) as any
    const notice = Notice({ kind: 'error', text: 'Failed' }) as any

    expect(status.props.className).toBe('dsh-ui-badge dsh-ui-badge-connected')
    expect(status.children[0].props.className).toBe('dsh-ui-dot')
    expect(notice.props.className).toBe('dsh-ui-notice dsh-ui-notice-error')
    expect(notice.children).toEqual(['Failed'])
  })

  it('renders section and loading wrappers', () => {
    const section = Section({ children: 'content' }) as any
    const loading = Loading({}) as any

    expect(section.props.className).toBe('dsh-ui-section')
    expect(section.children).toEqual(['content'])
    expect(loading.props.className).toBe('dsh-ui-loading')
    expect(loading.children).toEqual(['Loading…'])
  })
})

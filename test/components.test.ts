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
    const tree = Button({
      children: 'Save',
      className: 'extra',
      disabled: true,
      'aria-label': 'save',
    }) as any

    expect(tree.type).toBe('button')
    expect(tree.props).toMatchObject({
      className: 'dsh-ui-button dsh-ui-button-primary extra',
      type: 'button',
      disabled: true,
      'aria-label': 'save',
    })
    expect(tree.props.children).toBe('Save')
  })

  it('passes input changes as values', () => {
    const onChange = jest.fn()
    const tree = Input({ value: '', onChange, placeholder: 'Name', autoComplete: 'name' }) as any

    tree.props.onChange({ target: { value: 'hello' } })

    expect(tree.props.className).toBe('dsh-ui-input')
    expect(tree.props.placeholder).toBe('Name')
    expect(tree.props.autoComplete).toBe('name')
    expect(onChange).toHaveBeenCalledWith('hello')
  })

  it('forwards file input change events', () => {
    const onChange = jest.fn()
    const event = { target: { files: [] } }
    const tree = FileInput({ onChange, accept: 'image/*' }) as any

    tree.props.onChange(event)

    expect(tree.props.type).toBe('file')
    expect(tree.props.className).toBe('dsh-ui-file-input')
    expect(tree.props.accept).toBe('image/*')
    expect(onChange).toHaveBeenCalledWith(event)
  })

  it('renders a row with a badge and description', () => {
    const tree = Row({
      title: 'Status',
      description: 'Connected',
      badge: 'badge',
      control: 'control',
      id: 'row',
    }) as any

    const text = tree.props.children[0]
    const titleRow = text.props.children[0]

    expect(tree.props.className).toBe('dsh-ui-row')
    expect(tree.props.id).toBe('row')
    expect(text.props.className).toBe('dsh-ui-row-text')
    expect(titleRow.props.className).toBe('dsh-ui-row-title-row')
    expect(text.props.children[1].props.className).toBe('dsh-ui-row-description')
    expect(tree.props.children[1].props.className).toBe('dsh-ui-row-control')
  })

  it('renders status and notice variants', () => {
    const status = Status({ state: 'connected', label: 'Ready' }) as any
    const notice = Notice({ kind: 'error', text: 'Failed' }) as any

    expect(status.props.className).toBe('dsh-ui-badge dsh-ui-badge-connected')
    expect(status.props.children[0].props.className).toBe('dsh-ui-dot')
    expect(status.props.children[1]).toBe('Ready')
    expect(notice.props.className).toBe('dsh-ui-notice dsh-ui-notice-error')
    expect(notice.props.children).toBe('Failed')
  })

  it('renders section and loading wrappers', () => {
    const onClick = jest.fn()
    const section = Section({ children: 'content', onClick, id: 'section' }) as any
    const loading = Loading({}) as any

    expect(section.props.className).toBe('dsh-ui-section')
    expect(section.props.onClick).toBe(onClick)
    expect(section.props.id).toBe('section')
    expect(section.props.children).toBe('content')
    expect(loading.props.className).toBe('dsh-ui-loading')
    expect(loading.props.children).toBe('Loading…')
  })
})

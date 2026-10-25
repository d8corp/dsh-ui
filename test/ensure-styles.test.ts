/**
 * @jest-environment jsdom
 */
import { ensureStyles, STYLE_ATTRIBUTE } from '../src/utils/ensureStyles'

afterEach(() => {
  document.head.querySelectorAll('style[data-dsh-ui]').forEach((style) => style.remove())
})

describe('ensureStyles', () => {
  it('injects the library CSS once per plugin id', () => {
    ensureStyles('@test/one')
    ensureStyles('@test/one')

    const tags = document.head.querySelectorAll(`style[${STYLE_ATTRIBUTE}]`)

    expect(tags).toHaveLength(1)
    expect(tags[0].getAttribute(STYLE_ATTRIBUTE)).toBe('@test/one')
    expect(tags[0].textContent).toContain('.dsh-ui-button')
  })

  it('keeps styles for different plugin ids separate', () => {
    ensureStyles('@test/one')
    ensureStyles('@test/two')

    const ids = Array.from(document.head.querySelectorAll(`style[${STYLE_ATTRIBUTE}]`))
      .map((tag) => tag.getAttribute(STYLE_ATTRIBUTE))

    expect(ids).toEqual(['@test/one', '@test/two'])
  })
})

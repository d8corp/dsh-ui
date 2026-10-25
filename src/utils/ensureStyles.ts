import { CSS } from '../styles.generated'

export const STYLE_ATTRIBUTE = 'data-dsh-ui'

function findStyle (id: string): HTMLStyleElement | null {
  if (typeof document === 'undefined') return null

  const styles = document.querySelectorAll<HTMLStyleElement>(`style[${STYLE_ATTRIBUTE}]`)

  for (const style of Array.from(styles)) {
    if (style.getAttribute(STYLE_ATTRIBUTE) === id) return style
  }

  return null
}

export function ensureStyles (id: string): void {
  if (typeof document === 'undefined' || !document.head) return
  if (findStyle(id)) return

  const style = document.createElement('style')

  style.setAttribute(STYLE_ATTRIBUTE, id)
  style.textContent = CSS
  document.head.appendChild(style)
}

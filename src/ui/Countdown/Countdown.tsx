import { classes } from 'html-classes'
import type * as ReactTypes from 'react'

import type { JSX } from '../../types'
import { formatRemaining, tokenLevel } from '../../utils/countdown'
import { getReact } from '../../utils/react'

export interface CountdownProps extends ReactTypes.DetailedHTMLProps<ReactTypes.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  expiresAt: number | null
  onExpired?: () => void
}

/** Live `mm:ss` / `h:mm:ss` timer for an expiry timestamp. */
export function Countdown ({ expiresAt, onExpired, className, ...props }: CountdownProps): JSX.Element | null {
  const React = getReact()
  const { useEffect, useRef, useState } = React
  const [now, setNow] = useState(() => Date.now())
  const expiredRef = useRef<number | null>(null)

  useEffect(() => {
    setNow(Date.now())

    if (expiresAt === null) return

    const timer = setInterval(() => setNow(Date.now()), 1000)

    return () => clearInterval(timer)
  }, [expiresAt])

  const remaining = expiresAt === null ? null : expiresAt - now

  useEffect(() => {
    if (remaining === null || remaining > 0) return
    if (expiredRef.current === expiresAt) return

    expiredRef.current = expiresAt
    onExpired?.()
  }, [expiresAt, remaining, onExpired])

  if (remaining === null) return null

  const level = tokenLevel(remaining)

  return (
    <span {...props} className={classes(['dsh-ui-timer', 'dsh-ui-timer-' + level, className])}>
      {formatRemaining(remaining)}
    </span>
  )
}

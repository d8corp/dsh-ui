# @d8corp/dsh-ui

Reusable React UI components and a client-module factory for DeepSeek Harness plugins.

The library shares the React instance loaded by DSH, injects its stylesheet once per plugin id, and works with the same `window.__ModuleLoader__` contract as DSH client plugins.

## Install

```shell
npm install @d8corp/dsh-ui
```

React is provided by the DSH host at runtime, so it is an optional peer dependency and is never bundled into the plugin.

## Plugin client

```tsx
import { factory } from '@d8corp/dsh-ui'
import { Button, Row, Section, Status } from '@d8corp/dsh-ui'

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

factory({
  id: '@acme/dsh-example',
  factory: () => ({
    apply (ctx) {
      ctx.slots.inject('settings.section', () =>
        ctx.slots.register(
          { name: 'settings.section', id: 'example', label: 'Example', order: 50 },
          Settings,
        ),
      )
    },
    inject: ['slots'],
  }),
})
```

`factory` wraps `window.__ModuleLoader__.load`:

1. stores `require('react')` for every component,
2. injects the library CSS under `style[data-dsh-ui="<id>"]`,
3. calls your factory with the original `require`.

Any extra options (`inject`, `select`, etc.) are forwarded to the loader unchanged.

## Components

| Component | Props |
| --- | --- |
| `Section` | `children`, `className` |
| `Row` | `title`, `description`, `control`, `badge`, `className` |
| `Button` | `children`, `variant` (`primary` / `secondary`), `type`, `disabled`, `onClick`, `className` |
| `Input` | `value`, `onChange(value)`, `type`, `placeholder`, `disabled`, `id`, `name`, `autoComplete`, `autoFocus`, `className` |
| `FileInput` | `onChange(event)`, `accept`, `disabled`, `id`, `name`, `className` |
| `Notice` | `kind` (`error` / `success`), `text`, `className` |
| `Status` | `state` (`connected` / `pending` / `missing` / `neutral`), `label`, `className` |
| `Countdown` | `expiresAt`, `onExpired`, `className` |
| `Loading` | `text`, `className` |

All styles use the `dsh-ui-` prefix and the DSH `--dsw-*` design tokens, so components follow the active DSH theme.

## React access

```ts
import { getReact, setReact } from '@d8corp/dsh-ui'

setReact(React)
const React = getReact()
```

`getReact()` throws a descriptive error until React has been supplied. Plugins normally never need to call `setReact()` because `factory` does it.

## Styling

`ensureStyles(id)` injects the compiled stylesheet into `document.head` and is idempotent for the same id. `factory` calls it automatically.

The CSS is compiled from `theme.scss` into `src/styles.generated.ts`:

```shell
npm run build:styles
```

Any additional plugin styles can be shipped separately; the `data-dsh-ui` attribute only marks the library stylesheet.

## Development

```shell
npm test        # jest
npm run lint    # eslint
npm run build   # styles + innetjs release
```

The release is written to `release/` and contains `index.mjs`, its type declarations, README, LICENSE and `package.json` with development dependencies removed.

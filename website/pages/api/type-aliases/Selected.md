# Type alias: Selected\<T\>

> **Selected**\<`T`\>: `T` extends `"single"` ? `Date` : `T` extends `"multi"` ? `Date`[] : `T` extends `"range"` ? [`DateRange`](/api/type-aliases/DateRange.md) : `undefined`

The selected value when in selection mode.

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`Mode`](/api/type-aliases/Mode.md) |

## Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:567](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L567)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).

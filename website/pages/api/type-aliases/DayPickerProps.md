# Type alias: DayPickerProps\<T\>

> **DayPickerProps**\<`T`\>: [`PropsBase`](/api/interfaces/PropsBase.md) & [`PropsSelection`](/api/interfaces/PropsSelection.md)\<`T`\> & `T` extends `"single"` ? [`PropsSingle`](/api/interfaces/PropsSingle.md) : `T` extends `"multi"` ? [`PropsMulti`](/api/interfaces/PropsMulti.md) : `T` extends `"range"` ? [`PropsRange`](/api/interfaces/PropsRange.md) : [`PropsNone`](/api/interfaces/PropsNone.md)

Defines the props accepted by the [DayPicker](/api/functions/DayPicker.md) component.

## See

https://react-day-picker.dev/api/daypickerprops

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`Mode`](/api/type-aliases/Mode.md) | `"single"` |

## Source

[Users/gp/Developer/react-day-picker/v9/src/DayPicker.tsx:21](https://github.com/gpbl/react-day-picker/blob/005599683/src/DayPicker.tsx#L21)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).

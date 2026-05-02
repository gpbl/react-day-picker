# Function: useDayPicker()

> **useDayPicker**\<`T`\>(): [`DayPickerContext`](../type-aliases/DayPickerContext.md)\<`T`\>

Defined in: [packages/react-day-picker/src/useDayPicker.ts:83](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/useDayPicker.ts#L83)

Provides access to the DayPicker context, which includes properties and
methods to interact with the DayPicker component. This hook must be used
within a custom component.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* \{ `mode?`: [`Mode`](../type-aliases/Mode.md); `required?`: `boolean`; \} | Use this type to refine the returned context type with a specific selection mode. |

## Returns

[`DayPickerContext`](../type-aliases/DayPickerContext.md)\<`T`\>

The context to work with DayPicker.

## Throws

If the hook is used outside of a DayPicker provider.

## See

https://daypicker.dev/guides/custom-components

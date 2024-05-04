# Interface: UseInputValue

Represent the value returned by [useInput](../functions/useInput.md).

## Properties

### dayPickerProps

> **dayPickerProps**: [`InputDayPickerProps`](../type-aliases/InputDayPickerProps.md)

The props to pass to a DayPicker component.

#### Source

[src/hooks/useInput/useInput.ts:68](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/hooks/useInput/useInput.ts#L68)

***

### inputProps

> **inputProps**: [`InputProps`](../type-aliases/InputProps.md)

The props to pass to an input field.

#### Source

[src/hooks/useInput/useInput.ts:70](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/hooks/useInput/useInput.ts#L70)

***

### reset()

> **reset**: () => `void`

A function to reset to the initial state.

#### Returns

`void`

#### Source

[src/hooks/useInput/useInput.ts:72](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/hooks/useInput/useInput.ts#L72)

***

### setSelected()

> **setSelected**: (`day`) => `void`

A function to set the selected day.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `day` | `undefined` \| `Date` |

#### Returns

`void`

#### Source

[src/hooks/useInput/useInput.ts:74](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/hooks/useInput/useInput.ts#L74)

# Function: useDayRender()

> **useDayRender**(`day`, `displayMonth`, `buttonRef`): [`DayRender`](../type-aliases/DayRender.md)

Return props and data used to render the [Day](Day.md) component.

Use this hook when creating a component to replace the built-in `Day`
component.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `day` | `Date` | The date to render. |
| `displayMonth` | `Date` | The month where the date is displayed (if not the same as `date`, it means<br />it is an "outside" day). |
| `buttonRef` | `RefObject`\<`HTMLButtonElement`\> | A ref to the button element that will be target of focus when rendered (if<br />required). |

## Returns

[`DayRender`](../type-aliases/DayRender.md)

## Source

[src/hooks/useDayRender/useDayRender.tsx:43](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/hooks/useDayRender/useDayRender.tsx#L43)

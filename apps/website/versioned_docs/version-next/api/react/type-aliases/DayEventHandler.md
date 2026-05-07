# Type Alias: DayEventHandler\<EventType\>

> **DayEventHandler**\<`EventType`\> = (`date`, `modifiers`, `e`) => `void`

Defined in: [packages/react-day-picker/src/types/shared.ts:224](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/shared.ts#L224)

The event handler triggered when clicking or interacting with a day.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `EventType` | The event type that triggered the event (e.g. `React.MouseEvent`, `React.KeyboardEvent`, etc.). |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date that has triggered the event. |
| `modifiers` | [`Modifiers`](Modifiers.md) | The modifiers belonging to the date. |
| `e` | `EventType` | The DOM event that triggered the event. |

## Returns

`void`

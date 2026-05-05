# Type Alias: DayEventHandler\<EventType\>

> **DayEventHandler**\<`EventType`\> = (`date`, `modifiers`, `e`) => `void`

Defined in: [packages/react-day-picker/src/types/shared.ts:224](https://github.com/gpbl/react-day-picker/blob/88d4318764b878667a386ffb8b3f9683358c8564/packages/react-day-picker/src/types/shared.ts#L224)

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

# Type Alias: DayEventHandler()\<EventType\>

> **DayEventHandler**\<`EventType`\> = (`date`, `modifiers`, `e`) => `void`

Defined in: [src/types/shared.ts:250](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/shared.ts#L250)

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

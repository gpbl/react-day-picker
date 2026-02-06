# Type Alias: DayEventHandler()\<EventType\>

> **DayEventHandler**\<`EventType`\> = (`date`, `modifiers`, `e`) => `void`

Defined in: [src/types/shared.ts:224](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L224)

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

# Type Alias: OnSelectHandler()\<T\>

> **OnSelectHandler**\<`T`\> = (`selected`, `triggerDate`, `modifiers`, `e`) => `void`

Defined in: [src/types/props.ts:609](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/props.ts#L609)

Shared handler type for `onSelect` callback when a selection mode is set.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the selected item. |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selected` | `T` | The selected item after the event. |
| `triggerDate` | `Date` | The date when the event was triggered. This is typically the day clicked or interacted with. |
| `modifiers` | [`Modifiers`](Modifiers.md) | The modifiers associated with the event. |
| `e` | `React.MouseEvent` \| `React.KeyboardEvent` | The event object. |

## Returns

`void`

## Example

```ts
const handleSelect: OnSelectHandler<Date> = (
    selected,
    triggerDate,
    modifiers,
    e,
  ) => {
    console.log("Selected:", selected);
    console.log("Triggered by:", triggerDate);
  };
```

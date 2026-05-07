# Type Alias: ClassNames

> **ClassNames** = \{ \[key in UI \| SelectionState \| DayFlag \| Animation\]: string \}

Defined in: [packages/react-day-picker/src/types/shared.ts:253](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/shared.ts#L253)

The CSS classnames to use for the [UI](../enumerations/UI.md) elements, the
[SelectionState](../enumerations/SelectionState.md) and the [DayFlag](../enumerations/DayFlag.md).

## Example

```ts
const classNames: ClassNames = {
    [UI.Root]: "root",
    [UI.Outside]: "outside",
    [UI.Nav]: "nav",
    // etc.
  };
```

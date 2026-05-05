# Type Alias: ClassNames

> **ClassNames** = \{ \[key in UI \| SelectionState \| DayFlag \| Animation\]: string \}

Defined in: [src/types/shared.ts:279](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/shared.ts#L279)

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

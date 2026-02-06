# Type Alias: ClassNames

> **ClassNames** = \{ \[key in UI \| SelectionState \| DayFlag \| Animation\]: string \}

Defined in: [src/types/shared.ts:253](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L253)

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

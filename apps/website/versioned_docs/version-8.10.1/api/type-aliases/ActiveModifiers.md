# Type alias: ActiveModifiers

> **ActiveModifiers**: `Record` \<[`Modifier`](Modifier.md), `true`\> & `Partial`\<`Record` \<[`InternalModifier`](../enumerations/InternalModifier.md), `true`\>\>

The modifiers that are matching a day in the calendar. Use the
[useActiveModifiers](../functions/useActiveModifiers.md) hook to get the modifiers for a day.

```tsx
const activeModifiers: ActiveModifiers = {
  selected: true,
  customModifier: true
};
```

## Source

[src/types/Modifiers.ts:62](https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/types/Modifiers.ts#L62)

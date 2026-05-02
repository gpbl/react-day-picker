# Type alias: DayRender

> **DayRender**: \{`"activeModifiers"`: [`ActiveModifiers`](ActiveModifiers.md);`"buttonProps"`: [`StyledComponent`](StyledComponent.md) & `Pick` \<[`ButtonProps`](ButtonProps.md), `"disabled"` \| `"aria-selected"` \| `"tabIndex"`\> & `DayEventHandlers`;`"divProps"`: [`StyledComponent`](StyledComponent.md);`"isButton"`: `boolean`;`"isHidden"`: `boolean`;`"selectedDays"`: `SelectedDays`; \}

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `activeModifiers` | [`ActiveModifiers`](ActiveModifiers.md) | The modifiers active for the given day. |
| `buttonProps` | [`StyledComponent`](StyledComponent.md) & `Pick` \<[`ButtonProps`](ButtonProps.md), `"disabled"` \| `"aria-selected"` \| `"tabIndex"`\> & `DayEventHandlers` | The props to apply to the button element (when `isButton` is true). |
| `divProps` | [`StyledComponent`](StyledComponent.md) | The props to apply to the div element (when `isButton` is false). |
| `isButton` | `boolean` | Whether the day should be rendered a `button` instead of a `div` |
| `isHidden` | `boolean` | Whether the day should be hidden. |
| `selectedDays` | `SelectedDays` | - |

## Source

[src/hooks/useDayRender/useDayRender.tsx:21](https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/hooks/useDayRender/useDayRender.tsx#L21)

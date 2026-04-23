# ~~Type Alias: DeprecatedUI\<T\>~~

> **DeprecatedUI**\<`T`\> = \{ `button`: `T`; `button_reset`: `T`; `caption`: `T`; `caption_between`: `T`; `caption_dropdowns`: `T`; `caption_end`: `T`; `caption_start`: `T`; `cell`: `T`; `day_disabled`: `T`; `day_hidden`: `T`; `day_outside`: `T`; `day_range_end`: `T`; `day_range_middle`: `T`; `day_range_start`: `T`; `day_selected`: `T`; `day_today`: `T`; `dropdown_icon`: `T`; `dropdown_month`: `T`; `dropdown_year`: `T`; `head`: `T`; `head_cell`: `T`; `head_row`: `T`; `multiple_months`: `T`; `nav_button`: `T`; `nav_button_next`: `T`; `nav_button_previous`: `T`; `nav_icon`: `T`; `row`: `T`; `table`: `T`; `tbody`: `T`; `tfoot`: `T`; `vhidden`: `T`; `weeknumber`: `T`; `with_weeknumber`: `T`; \}

Defined in: [src/UI.ts:138](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L138)

Deprecated UI elements and flags from previous versions of DayPicker.

These elements are kept for backward compatibility and to assist in
transitioning to the new [UI](../enumerations/UI.md) elements.

## Deprecated

## Since

9.0.1

## See

 - https://daypicker.dev/upgrading
 - https://daypicker.dev/docs/styling

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `CSSProperties` \| `string` | The type of the deprecated UI element (e.g., CSS class or style). |

## Properties

### ~~button~~

> **button**: `T`

Defined in: [src/UI.ts:146](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L146)

This element was applied to the style of any button in DayPicker and it is
replaced by [UI.PreviousMonthButton](../enumerations/UI.md) and
[UI.NextMonthButton](../enumerations/UI.md).

#### Deprecated

***

### ~~button\_reset~~

> **button\_reset**: `T`

Defined in: [src/UI.ts:154](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L154)

This element was resetting the style of any button in DayPicker and it is
replaced by [UI.PreviousMonthButton](../enumerations/UI.md) and
[UI.NextMonthButton](../enumerations/UI.md).

#### Deprecated

***

### ~~caption~~

> **caption**: `T`

Defined in: [src/UI.ts:160](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L160)

This element has been renamed to [UI.MonthCaption](../enumerations/UI.md).

#### Deprecated

***

### ~~caption\_between~~

> **caption\_between**: `T`

Defined in: [src/UI.ts:167](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L167)

This element has been removed. Captions are styled via
[UI.MonthCaption](../enumerations/UI.md).

#### Deprecated

***

### ~~caption\_dropdowns~~

> **caption\_dropdowns**: `T`

Defined in: [src/UI.ts:173](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L173)

This element has been renamed to [UI.Dropdowns](../enumerations/UI.md).

#### Deprecated

***

### ~~caption\_end~~

> **caption\_end**: `T`

Defined in: [src/UI.ts:180](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L180)

This element has been removed. Captions are styled via
[UI.MonthCaption](../enumerations/UI.md).

#### Deprecated

***

### ~~caption\_start~~

> **caption\_start**: `T`

Defined in: [src/UI.ts:186](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L186)

This element has been removed.

#### Deprecated

***

### ~~cell~~

> **cell**: `T`

Defined in: [src/UI.ts:192](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L192)

This element has been renamed to [UI.Day](../enumerations/UI.md).

#### Deprecated

***

### ~~day\_disabled~~

> **day\_disabled**: `T`

Defined in: [src/UI.ts:198](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L198)

This element has been renamed to [DayFlag.disabled](../enumerations/DayFlag.md).

#### Deprecated

***

### ~~day\_hidden~~

> **day\_hidden**: `T`

Defined in: [src/UI.ts:204](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L204)

This element has been renamed to [DayFlag.hidden](../enumerations/DayFlag.md).

#### Deprecated

***

### ~~day\_outside~~

> **day\_outside**: `T`

Defined in: [src/UI.ts:210](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L210)

This element has been renamed to [DayFlag.outside](../enumerations/DayFlag.md).

#### Deprecated

***

### ~~day\_range\_end~~

> **day\_range\_end**: `T`

Defined in: [src/UI.ts:217](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L217)

This element has been renamed to
[SelectionState.range\_end](../enumerations/SelectionState.md).

#### Deprecated

***

### ~~day\_range\_middle~~

> **day\_range\_middle**: `T`

Defined in: [src/UI.ts:224](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L224)

This element has been renamed to
[SelectionState.range\_middle](../enumerations/SelectionState.md).

#### Deprecated

***

### ~~day\_range\_start~~

> **day\_range\_start**: `T`

Defined in: [src/UI.ts:231](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L231)

This element has been renamed to
[SelectionState.range\_start](../enumerations/SelectionState.md).

#### Deprecated

***

### ~~day\_selected~~

> **day\_selected**: `T`

Defined in: [src/UI.ts:238](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L238)

This element has been renamed to
[SelectionState.selected](../enumerations/SelectionState.md).

#### Deprecated

***

### ~~day\_today~~

> **day\_today**: `T`

Defined in: [src/UI.ts:244](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L244)

This element has been renamed to [DayFlag.today](../enumerations/DayFlag.md).

#### Deprecated

***

### ~~dropdown\_icon~~

> **dropdown\_icon**: `T`

Defined in: [src/UI.ts:251](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L251)

This element has been removed. The dropdown icon is now
[UI.Chevron](../enumerations/UI.md) inside a [UI.CaptionLabel](../enumerations/UI.md).

#### Deprecated

***

### ~~dropdown\_month~~

> **dropdown\_month**: `T`

Defined in: [src/UI.ts:257](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L257)

This element has been renamed to [UI.MonthsDropdown](../enumerations/UI.md).

#### Deprecated

***

### ~~dropdown\_year~~

> **dropdown\_year**: `T`

Defined in: [src/UI.ts:263](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L263)

This element has been renamed to [UI.YearsDropdown](../enumerations/UI.md).

#### Deprecated

***

### ~~head~~

> **head**: `T`

Defined in: [src/UI.ts:269](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L269)

This element has been removed.

#### Deprecated

***

### ~~head\_cell~~

> **head\_cell**: `T`

Defined in: [src/UI.ts:275](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L275)

This element has been renamed to [UI.Weekday](../enumerations/UI.md).

#### Deprecated

***

### ~~head\_row~~

> **head\_row**: `T`

Defined in: [src/UI.ts:281](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L281)

This element has been renamed to [UI.Weekdays](../enumerations/UI.md).

#### Deprecated

***

### ~~multiple\_months~~

> **multiple\_months**: `T`

Defined in: [src/UI.ts:288](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L288)

This flag has been removed. Use `data-multiple-months` in your CSS
selectors.

#### Deprecated

***

### ~~nav\_button~~

> **nav\_button**: `T`

Defined in: [src/UI.ts:295](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L295)

This element has been removed. To style the navigation buttons, use
[UI.PreviousMonthButton](../enumerations/UI.md) and [UI.NextMonthButton](../enumerations/UI.md).

#### Deprecated

***

### ~~nav\_button\_next~~

> **nav\_button\_next**: `T`

Defined in: [src/UI.ts:301](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L301)

This element has been renamed to [UI.NextMonthButton](../enumerations/UI.md).

#### Deprecated

***

### ~~nav\_button\_previous~~

> **nav\_button\_previous**: `T`

Defined in: [src/UI.ts:307](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L307)

This element has been renamed to [UI.PreviousMonthButton](../enumerations/UI.md).

#### Deprecated

***

### ~~nav\_icon~~

> **nav\_icon**: `T`

Defined in: [src/UI.ts:315](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L315)

This element has been removed. The dropdown icon is now
[UI.Chevron](../enumerations/UI.md) inside a [UI.NextMonthButton](../enumerations/UI.md) or a
[UI.PreviousMonthButton](../enumerations/UI.md).

#### Deprecated

***

### ~~row~~

> **row**: `T`

Defined in: [src/UI.ts:321](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L321)

This element has been renamed to [UI.Week](../enumerations/UI.md).

#### Deprecated

***

### ~~table~~

> **table**: `T`

Defined in: [src/UI.ts:327](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L327)

This element has been renamed to [UI.MonthGrid](../enumerations/UI.md).

#### Deprecated

***

### ~~tbody~~

> **tbody**: `T`

Defined in: [src/UI.ts:333](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L333)

This element has been renamed to [UI.Weeks](../enumerations/UI.md).

#### Deprecated

***

### ~~tfoot~~

> **tfoot**: `T`

Defined in: [src/UI.ts:340](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L340)

This element has been removed. The [UI.Footer](../enumerations/UI.md) is now a single
element below the months.

#### Deprecated

***

### ~~vhidden~~

> **vhidden**: `T`

Defined in: [src/UI.ts:347](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L347)

This flag has been removed. There are no "visually hidden" elements in
DayPicker 9.

#### Deprecated

***

### ~~weeknumber~~

> **weeknumber**: `T`

Defined in: [src/UI.ts:353](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L353)

This element has been renamed. Use [UI.WeekNumber](../enumerations/UI.md) instead.

#### Deprecated

***

### ~~with\_weeknumber~~

> **with\_weeknumber**: `T`

Defined in: [src/UI.ts:359](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/UI.ts#L359)

This flag has been removed. Use `data-week-numbers` in your CSS.

#### Deprecated

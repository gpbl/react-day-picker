# Interface: CustomComponents

Map of the components that can be changed using the `components` prop.

## See

https://github.com/gpbl/react-day-picker/tree/main/src/components

## Properties

### Caption()?

> `optional` **Caption**: (`props`) => `null` \| `Element`

The component for the caption element.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`CaptionProps`](CaptionProps.md) |

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:325](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L325)

***

### CaptionLabel()?

> `optional` **CaptionLabel**: (`props`) => `null` \| `Element`

The component for the caption element.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`CaptionLabelProps`](CaptionLabelProps.md) |

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:327](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L327)

***

### Day()?

> `optional` **Day**: (`props`) => `null` \| `Element`

The component for the day element.

Each `Day` in DayPicker should render one of the following, according to
the return value of [useDayRender](../functions/useDayRender.md).

- An empty `Fragment`, to render if `isHidden` is true
- A `button` element, when the day is interactive, e.g. is selectable
- A `div` or a `span` element, when the day is not interactive

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`DayProps`](DayProps.md) |

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:338](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L338)

***

### DayContent()?

> `optional` **DayContent**: (`props`) => `null` \| `Element`

The component for the content of the day element.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`DayContentProps`](DayContentProps.md) |

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:340](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L340)

***

### Dropdown()?

> `optional` **Dropdown**: (`props`) => `null` \| `Element`

The component for the drop-down elements.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`DropdownProps`](DropdownProps.md) |

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:342](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L342)

***

### Footer()?

> `optional` **Footer**: (`props`) => `null` \| `Element`

The component for the table footer.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`FooterProps`](FooterProps.md) |

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:344](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L344)

***

### Head()?

> `optional` **Head**: () => `null` \| `Element`

The component for the table’s head.

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:346](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L346)

***

### HeadRow()?

> `optional` **HeadRow**: () => `null` \| `Element`

The component for the table’s head row.

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:348](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L348)

***

### IconDropdown()?

> `optional` **IconDropdown**: (`props`) => `null` \| `Element`

The component for the small icon in the drop-downs.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`StyledComponent`](../type-aliases/StyledComponent.md) |

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:350](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L350)

***

### IconLeft()?

> `optional` **IconLeft**: (`props`) => `null` \| `Element`

The arrow left icon (used for the Navigation buttons).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`StyledComponent`](../type-aliases/StyledComponent.md) |

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:354](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L354)

***

### IconRight()?

> `optional` **IconRight**: (`props`) => `null` \| `Element`

The arrow right icon (used for the Navigation buttons).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`StyledComponent`](../type-aliases/StyledComponent.md) |

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:352](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L352)

***

### Months()?

> `optional` **Months**: (`props`) => `null` \| `Element`

The component wrapping the month grids.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`MonthsProps`](../type-aliases/MonthsProps.md) |

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:356](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L356)

***

### Row()?

> `optional` **Row**: (`props`) => `null` \| `Element`

The component for the table rows.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`RowProps`](RowProps.md) |

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:358](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L358)

***

### WeekNumber()?

> `optional` **WeekNumber**: (`props`) => `null` \| `Element`

The component for the week number in the table rows.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`WeekNumberProps`](WeekNumberProps.md) |

#### Returns

`null` \| `Element`

#### Source

[src/types/DayPickerBase.ts:360](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L360)

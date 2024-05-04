# Interface: NavigationContextValue

Represents the value of the [NavigationContext](../variables/NavigationContext.md).

## Properties

### currentMonth

> **currentMonth**: `Date`

The month to display in the calendar. When `numberOfMonths` is greater than
one, is the first of the displayed months.

#### Source

[src/contexts/Navigation/NavigationContext.tsx:18](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/contexts/Navigation/NavigationContext.tsx#L18)

***

### displayMonths

> **displayMonths**: `Date`[]

The months rendered by DayPicker. DayPicker can render multiple months via
`numberOfMonths`.

#### Source

[src/contexts/Navigation/NavigationContext.tsx:23](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/contexts/Navigation/NavigationContext.tsx#L23)

***

### goToDate()

> **goToDate**: (`date`, `refDate`?) => `void`

Navigate to the specified date.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `date` | `Date` |
| `refDate`? | `Date` |

#### Returns

`void`

#### Source

[src/contexts/Navigation/NavigationContext.tsx:27](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/contexts/Navigation/NavigationContext.tsx#L27)

***

### goToMonth()

> **goToMonth**: (`month`) => `void`

Navigate to the specified month.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `month` | `Date` |

#### Returns

`void`

#### Source

[src/contexts/Navigation/NavigationContext.tsx:25](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/contexts/Navigation/NavigationContext.tsx#L25)

***

### isDateDisplayed()

> **isDateDisplayed**: (`day`) => `boolean`

Whether the given day is included in the displayed months.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `day` | `Date` |

#### Returns

`boolean`

#### Source

[src/contexts/Navigation/NavigationContext.tsx:33](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/contexts/Navigation/NavigationContext.tsx#L33)

***

### nextMonth?

> `optional` **nextMonth**: `Date`

The next month to display.

#### Source

[src/contexts/Navigation/NavigationContext.tsx:29](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/contexts/Navigation/NavigationContext.tsx#L29)

***

### previousMonth?

> `optional` **previousMonth**: `Date`

The previous month to display.

#### Source

[src/contexts/Navigation/NavigationContext.tsx:31](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/contexts/Navigation/NavigationContext.tsx#L31)

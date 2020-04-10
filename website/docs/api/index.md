---
id: "index"
title: "react-day-picker"
sidebar_label: "Globals"
---

## Index

**Enumerations **: [DayPickerElements](enums/daypickerelements.md), [DefaultModifiersNames](enums/defaultmodifiersnames.md), 

**Classes **: [DateWithModifiers](classes/datewithmodifiers.md), 

**Interfaces **: [DayPickerProps](interfaces/daypickerprops.md), [DayProps](interfaces/dayprops.md), [HeadProps](interfaces/headprops.md), [MonthCaptionProps](interfaces/monthcaptionprops.md), [MonthTableProps](interfaces/monthtableprops.md), [NavigationProps](interfaces/navigationprops.md), [WeekNumberProps](interfaces/weeknumberprops.md), [WeekRowProps](interfaces/weekrowprops.md), 

**Type aliases **: [CaptionHtmlProps](index.md#captionhtmlprops), [DayClickEventHandler](index.md#dayclickeventhandler), [DayContainerHtmlProps](index.md#daycontainerhtmlprops), [DayFormatter](index.md#dayformatter), [DayHtmlProps](index.md#dayhtmlprops), [DayMatchModifier](index.md#daymatchmodifier), [DayMatcher](index.md#daymatcher), [DayModifiers](index.md#daymodifiers), [DayPickerClassNames](index.md#daypickerclassnames), [DayPickerStyles](index.md#daypickerstyles), [DayWrapperHtmlProps](index.md#daywrapperhtmlprops), [MatchDate](index.md#matchdate), [MatchDayAfter](index.md#matchdayafter), [MatchDayBefore](index.md#matchdaybefore), [MatchDayBetween](index.md#matchdaybetween), [MatchDayInRange](index.md#matchdayinrange), [MatchDaysOfWeek](index.md#matchdaysofweek), [MatchFunction](index.md#matchfunction), [MatchingModifiers](index.md#matchingmodifiers), [Modifier](index.md#modifier), [ModifiersClassNames](index.md#modifiersclassnames), [ModifiersStyles](index.md#modifiersstyles), [MonthCaptionFormatter](index.md#monthcaptionformatter), [MonthChangeEventHandler](index.md#monthchangeeventhandler), [MonthWeeks](index.md#monthweeks), [NavigationHtmlProps](index.md#navigationhtmlprops), [NavigationMonths](index.md#navigationmonths), [SwizzlingComponents](index.md#swizzlingcomponents), [UseInputDayPickerProps](index.md#useinputdaypickerprops), [UseInputInputProps](index.md#useinputinputprops), [WeekNumberFormatter](index.md#weeknumberformatter), [WeekdayNameFormatter](index.md#weekdaynameformatter), 

**Components Functions**: [Day](index.md#day), [DayPicker](index.md#daypicker), [Head](index.md#head), [MonthCaption](index.md#monthcaption), [MonthTable](index.md#monthtable), [Months](index.md#months), [Navigation](index.md#navigation), [WeekNumber](index.md#weeknumber), [WeekRow](index.md#private-weekrow), 

**Other Functions**: [defaultFormatCaption](index.md#private-defaultformatcaption), [defaultFormatDay](index.md#private-defaultformatday), [defaultFormatWeekNumber](index.md#private-defaultformatweeknumber), [defaultFormatWeekdayName](index.md#private-defaultformatweekdayname), [filterUndefinedProps](index.md#filterundefinedprops), [getCaptionProps](index.md#getcaptionprops), [getDayProps](index.md#getdayprops), [getModifiersFromProps](index.md#getmodifiersfromprops), [getMonths](index.md#getmonths), [getNavigation](index.md#getnavigation), [getNavigationProps](index.md#getnavigationprops), [getOutsideEndDays](index.md#getoutsideenddays), [getOutsideStartDays](index.md#getoutsidestartdays), [getWeekdaysNames](index.md#getweekdaysnames), [getWeeks](index.md#getweeks), [isDayAfter](index.md#isdayafter), [isDayBefore](index.md#isdaybefore), [isValidDate](index.md#private-isvaliddate), [listModifiers](index.md#listmodifiers), [matchDate](index.md#matchdate), [matchDay](index.md#matchday), [matchDayAfter](index.md#private-matchdayafter), [matchDayBefore](index.md#private-matchdaybefore), [matchDayBetween](index.md#private-matchdaybetween), [matchDayInRange](index.md#matchdayinrange), [matchDayOfWeek](index.md#private-matchdayofweek), [matchFunction](index.md#private-matchfunction), [useInput](index.md#useinput), 

**Object literals **: [defaultClassNames](index.md#const-defaultclassnames), [defaultModifiers](index.md#const-defaultmodifiers), [defaultProps](index.md#const-defaultprops), 

## Type aliases

###  CaptionHtmlProps

Ƭ **CaptionHtmlProps**: *object*

*Defined in [packages/react-day-picker/src/components/MonthCaption/types.ts:7](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/MonthCaption/types.ts#L7)*

Props for the #{}

#### Type declaration:

* **containerProps**(): *object*

  * **className**? : *undefined | string*

  * **style**? : *React.CSSProperties*

___

###  DayClickEventHandler

Ƭ **DayClickEventHandler**: *function*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:35](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L35)*

Event handler when a day is clicked.

#### Type declaration:

▸ (`day`: Date, `modifiers`: [MatchingModifiers](index.md#matchingmodifiers), `e`: MouseEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`modifiers` | [MatchingModifiers](index.md#matchingmodifiers) |
`e` | MouseEvent |

___

###  DayContainerHtmlProps

Ƭ **DayContainerHtmlProps**: *object*

*Defined in [packages/react-day-picker/src/components/Day/types.ts:30](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Day/types.ts#L30)*

#### Type declaration:

* **aria-disabled**? : *undefined | false | true*

* **className**? : *undefined | string*

* **disabled**? : *undefined | false | true*

* **onClick**? : *undefined | function*

* **style**? : *React.CSSProperties*

___

###  DayFormatter

Ƭ **DayFormatter**: *function*

*Defined in [packages/react-day-picker/src/components/Day/types.ts:25](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Day/types.ts#L25)*

A function that format the day for the [Day](index.md#day) component.

#### Type declaration:

▸ (`day`: Date, `options?`: undefined | object): *string*

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`options?` | undefined &#124; object |

___

###  DayHtmlProps

Ƭ **DayHtmlProps**: *object*

*Defined in [packages/react-day-picker/src/components/Day/types.ts:43](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Day/types.ts#L43)*

#### Type declaration:

* **containerProps**: *[DayContainerHtmlProps](index.md#daycontainerhtmlprops)*

* **wrapperProps**: *[DayWrapperHtmlProps](index.md#daywrapperhtmlprops)*

___

###  DayMatchModifier

Ƭ **DayMatchModifier**: *boolean | undefined*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:65](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L65)*

A type to indicate when a day matches a modifier.

___

###  DayMatcher

Ƭ **DayMatcher**: *[MatchDate](index.md#matchdate) | [MatchDayInRange](index.md#matchdayinrange) | [MatchDayBetween](index.md#matchdaybetween) | [MatchDayBefore](index.md#matchdaybefore) | [MatchDayAfter](index.md#matchdayafter) | [MatchDaysOfWeek](index.md#matchdaysofweek) | [MatchFunction](index.md#matchfunction) | [DayMatcher](index.md#daymatcher)[]*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:115](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L115)*

Day matchers are used to find if a day matches a specific condition, like
being between two dates, or in a specified day of the week, etc.

___

###  DayModifiers

Ƭ **DayModifiers**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:58](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L58)*

Modifiers to assign when a day is matched.

#### Type declaration:

* \[ **modifier**: *string*\]: [DayMatcher](index.md#daymatcher)

___

###  DayPickerClassNames

Ƭ **DayPickerClassNames**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:22](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L22)*

Names of the CSS classes for each UI element.

#### Type declaration:

___

###  DayPickerStyles

Ƭ **DayPickerStyles**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:28](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L28)*

Inline `style` for each UI element.

#### Type declaration:

___

###  DayWrapperHtmlProps

Ƭ **DayWrapperHtmlProps**: *object*

*Defined in [packages/react-day-picker/src/components/Day/types.ts:38](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Day/types.ts#L38)*

#### Type declaration:

* **className**? : *undefined | string*

* **style**? : *React.CSSProperties*

___

###  MatchDate

Ƭ **MatchDate**: *Date*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:79](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L79)*

Matches a day that is the same as the specified date.

___

###  MatchDayAfter

Ƭ **MatchDayAfter**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:94](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L94)*

Matches the days after (but not including) the specified date.

#### Type declaration:

* **after**: *Date*

___

###  MatchDayBefore

Ƭ **MatchDayBefore**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:89](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L89)*

Matches the days before (but not including) the specified date.

#### Type declaration:

* **before**: *Date*

___

###  MatchDayBetween

Ƭ **MatchDayBetween**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:99](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L99)*

Matches the days between (but not including) the specified date.

#### Type declaration:

* **after**: *Date*

* **before**: *Date*

___

###  MatchDayInRange

Ƭ **MatchDayInRange**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:84](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L84)*

Matches the days that are inside (but not including) the specified range.

#### Type declaration:

* **from**: *Date*

* **to**: *Date*

___

###  MatchDaysOfWeek

Ƭ **MatchDaysOfWeek**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:104](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L104)*

Matches one or more days of the week (`0` = Sundays).

#### Type declaration:

* **daysOfWeek**: *number[]*

___

###  MatchFunction

Ƭ **MatchFunction**: *function*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:109](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L109)*

Matches any day for which this function returns a truthy value.

#### Type declaration:

▸ (`date`: Date): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

___

###  MatchingModifiers

Ƭ **MatchingModifiers**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:72](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L72)*

An object containing modifiers matching a specific day. Some defaults
modifiers are used in DayPicker. They can be extended using the
[DayPickerProps.modifiers](interfaces/daypickerprops.md#optional-modifiers) prop.

#### Type declaration:

___

###  Modifier

Ƭ **Modifier**: *string*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:6](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L6)*

A modifier is a string attached to a day whose behavior and appearance is meant to be modified by it.

TODO: evaluate to rename this "DayTag" or "DayModifier".

___

###  ModifiersClassNames

Ƭ **ModifiersClassNames**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:10](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L10)*

#### Type declaration:

* \[ **other**: *string*\]: string

___

###  ModifiersStyles

Ƭ **ModifiersStyles**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts:17](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L17)*

Inline styles to apply to the day element having the specified modifier.

#### Type declaration:

___

###  MonthCaptionFormatter

Ƭ **MonthCaptionFormatter**: *function*

*Defined in [packages/react-day-picker/src/components/MonthCaption/types.ts:29](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/MonthCaption/types.ts#L29)*

A function that format a month for the [MonthCaption](index.md#monthcaption) component.

#### Type declaration:

▸ (`month`: Date, `options?`: undefined | object): *string*

**Parameters:**

Name | Type |
------ | ------ |
`month` | Date |
`options?` | undefined &#124; object |

___

###  MonthChangeEventHandler

Ƭ **MonthChangeEventHandler**: *function*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:44](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L44)*

Event handler when the month is changed.

#### Type declaration:

▸ (`month`: Date, `e`: MouseEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`month` | Date |
`e` | MouseEvent |

___

###  MonthWeeks

Ƭ **MonthWeeks**: *object*

*Defined in [packages/react-day-picker/src/components/MonthTable/getWeeks.ts:20](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/MonthTable/getWeeks.ts#L20)*

The weeks belonging to a month. Each key of the returned object is the
week number of the year.

#### Type declaration:

* \[ **weeknumber**: *string*\]: [DateWithModifiers](classes/datewithmodifiers.md)[]

___

###  NavigationHtmlProps

Ƭ **NavigationHtmlProps**: *object*

*Defined in [packages/react-day-picker/src/components/Navigation/types.ts:13](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Navigation/types.ts#L13)*

HTML props for the [Navigation](index.md#navigation).

#### Type declaration:

* **containerProps**(): *object*

  * **className**? : *undefined | string*

  * **style**? : *React.CSSProperties*

* **nextProps**(): *object*

  * **className**? : *undefined | string*

  * **style**? : *React.CSSProperties*

* **prevProps**(): *object*

  * **className**? : *undefined | string*

  * **style**? : *React.CSSProperties*

___

###  NavigationMonths

Ƭ **NavigationMonths**: *object*

*Defined in [packages/react-day-picker/src/components/Navigation/types.ts:31](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Navigation/types.ts#L31)*

The months that is possible to navigate.

#### Type declaration:

* **nextMonth**? : *Date*

* **prevMonth**? : *Date*

___

###  SwizzlingComponents

Ƭ **SwizzlingComponents**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts:52](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/types/DayPickerProps.ts#L52)*

Components that can be [swizzled](./docs/swizzling).

#### Type declaration:

* **Day**: *React.ComponentType‹[DayProps](interfaces/dayprops.md)›*

* **MonthCaption**: *React.ComponentType‹[MonthCaptionProps](interfaces/monthcaptionprops.md)›*

* **Navigation**: *React.ComponentType‹[NavigationProps](interfaces/navigationprops.md)›*

* **WeekNumber**: *React.ComponentType‹[WeekNumberProps](interfaces/weeknumberprops.md)›*

___

###  UseInputDayPickerProps

Ƭ **UseInputDayPickerProps**: *object*

*Defined in [packages/react-day-picker/src/hooks/useInput.ts:16](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/hooks/useInput.ts#L16)*

Props to attach to the `DayPicker` component

#### Type declaration:

* **onDayClick**: *DayPickerProps["onDayClick"]*

* **onMonthChange**: *DayPickerProps["onMonthChange"]*

___

###  UseInputInputProps

Ƭ **UseInputInputProps**: *object*

*Defined in [packages/react-day-picker/src/hooks/useInput.ts:22](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/hooks/useInput.ts#L22)*

Props to attach to the `input` HTML element

#### Type declaration:

* **onBlur**: *IntrinsicElements["input"]["onBlur"]*

* **onChange**: *IntrinsicElements["input"]["onChange"]*

* **onFocus**: *IntrinsicElements["input"]["onFocus"]*

* **value**: *IntrinsicElements["input"]["value"]*

___

###  WeekNumberFormatter

Ƭ **WeekNumberFormatter**: *function*

*Defined in [packages/react-day-picker/src/components/WeekNumber/types.ts:13](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/WeekNumber/types.ts#L13)*

#### Type declaration:

▸ (`weekNumber`: number, `options?`: undefined | object): *string*

**Parameters:**

Name | Type |
------ | ------ |
`weekNumber` | number |
`options?` | undefined &#124; object |

___

###  WeekdayNameFormatter

Ƭ **WeekdayNameFormatter**: *function*

*Defined in [packages/react-day-picker/src/components/WeekRow/types.ts:18](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/WeekRow/types.ts#L18)*

Format the weekday name.

#### Type declaration:

▸ (`day`: Date, `options?`: undefined | object): *string*

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`options?` | undefined &#124; object |

## Components Functions

###  Day

▸ **Day**(`props`: [DayProps](interfaces/dayprops.md)): *Element*

*Defined in [packages/react-day-picker/src/components/Day/Day.tsx:14](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Day/Day.tsx#L14)*

The `Day` component renders the content of the day cell. It renders a button
if the day is interactive (i.e. it is clickable).

This component can be [[include:swizzling.md]].

**Parameters:**

Name | Type |
------ | ------ |
`props` | [DayProps](interfaces/dayprops.md) |

**Returns:** *Element*

___

###  DayPicker

▸ **DayPicker**(`props`: [DayPickerProps](interfaces/daypickerprops.md)): *Element*

*Defined in [packages/react-day-picker/src/components/DayPicker/DayPicker.tsx:13](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/DayPicker.tsx#L13)*

Render a date picker component.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`props` | [DayPickerProps](interfaces/daypickerprops.md) | defaultProps |

**Returns:** *Element*

___

###  Head

▸ **Head**(`props`: [HeadProps](interfaces/headprops.md)): *Element*

*Defined in [packages/react-day-picker/src/components/Head/Head.tsx:10](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Head/Head.tsx#L10)*

Render the head of the month table, including the weekday names (Mon, Tue,
etc.).

**Parameters:**

Name | Type |
------ | ------ |
`props` | [HeadProps](interfaces/headprops.md) |

**Returns:** *Element*

___

###  MonthCaption

▸ **MonthCaption**(`props`: [MonthCaptionProps](interfaces/monthcaptionprops.md)): *Element*

*Defined in [packages/react-day-picker/src/components/MonthCaption/MonthCaption.tsx:12](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/MonthCaption/MonthCaption.tsx#L12)*

Renders the caption of the month.

This component can be [swizzled](./docs/swizzling).

**Parameters:**

Name | Type |
------ | ------ |
`props` | [MonthCaptionProps](interfaces/monthcaptionprops.md) |

**Returns:** *Element*

___

###  MonthTable

▸ **MonthTable**(`props`: [MonthTableProps](interfaces/monthtableprops.md)): *Element*

*Defined in [packages/react-day-picker/src/components/MonthTable/MonthTable.tsx:11](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/MonthTable/MonthTable.tsx#L11)*

Render the month table.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [MonthTableProps](interfaces/monthtableprops.md) |

**Returns:** *Element*

___

###  Months

▸ **Months**(`initialProps`: [DayPickerProps](interfaces/daypickerprops.md)): *Element*

*Defined in [packages/react-day-picker/src/components/Months/Months.tsx:18](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Months/Months.tsx#L18)*

Render the months and the navigation.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`initialProps` | [DayPickerProps](interfaces/daypickerprops.md) | defaultProps |

**Returns:** *Element*

___

###  Navigation

▸ **Navigation**(`props`: [NavigationProps](interfaces/navigationprops.md)): *Element | null*

*Defined in [packages/react-day-picker/src/components/Navigation/Navigation.tsx:11](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Navigation/Navigation.tsx#L11)*

Renders the buttons to navigate between months.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [NavigationProps](interfaces/navigationprops.md) |

**Returns:** *Element | null*

___

###  WeekNumber

▸ **WeekNumber**(`props`: [WeekNumberProps](interfaces/weeknumberprops.md)): *Element*

*Defined in [packages/react-day-picker/src/components/WeekNumber/WeekNumber.tsx:9](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/WeekNumber/WeekNumber.tsx#L9)*

Render the number of the week when [showWeekNumber](interfaces/headprops.md#optional-showweeknumber) is enabled.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [WeekNumberProps](interfaces/weeknumberprops.md) |

**Returns:** *Element*

___

### `Private` WeekRow

▸ **WeekRow**(`props`: [WeekRowProps](interfaces/weekrowprops.md)): *Element*

*Defined in [packages/react-day-picker/src/components/WeekRow/WeekRow.tsx:11](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/WeekRow/WeekRow.tsx#L11)*

Render a week row.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [WeekRowProps](interfaces/weekrowprops.md) |

**Returns:** *Element*

___

## Other Functions

### `Private` defaultFormatCaption

▸ **defaultFormatCaption**(`month`: Date, `formatOptions?`: undefined | object): *string*

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultFormatCaption.ts:11](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultFormatCaption.ts#L11)*

The default function used to format the caption. Use the [formatCaption](interfaces/daypickerprops.md#optional-formatcaption)
prop to use another function.

**Parameters:**

Name | Type |
------ | ------ |
`month` | Date |
`formatOptions?` | undefined &#124; object |

**Returns:** *string*

The month using the `"LLLL Y:` [format
string](https://date-fns.org/docs/format).

___

### `Private` defaultFormatDay

▸ **defaultFormatDay**(`day`: Date, `formatOptions?`: undefined | object): *string*

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultFormatDay.ts:11](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultFormatDay.ts#L11)*

The default function used to format the day date. Use the [formatDay](interfaces/daypickerprops.md#optional-formatday) prop
to use another function.

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`formatOptions?` | undefined &#124; object |

**Returns:** *string*

The day formatted the `"d"` [format
string](https://date-fns.org/docs/format).

___

### `Private` defaultFormatWeekNumber

▸ **defaultFormatWeekNumber**(`weekNumber`: number): *string*

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultFormatWeekNumber.ts:8](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultFormatWeekNumber.ts#L8)*

The default function used to format the week number. Use the
[formatWeekNumber](interfaces/daypickerprops.md#optional-formatweeknumber) prop to use another function.

**Parameters:**

Name | Type |
------ | ------ |
`weekNumber` | number |

**Returns:** *string*

The weeknumber formatted as string.

___

### `Private` defaultFormatWeekdayName

▸ **defaultFormatWeekdayName**(`day`: Date, `formatOptions?`: undefined | object): *string*

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultFormatWeekdayName.ts:10](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultFormatWeekdayName.ts#L10)*

The default function used to format the day. Use the [formatWeekdayName](interfaces/daypickerprops.md#optional-formatweekdayname)
prop to use another function.

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`formatOptions?` | undefined &#124; object |

**Returns:** *string*

The day formatted the `"E"` [format
string](https://date-fns.org/docs/format).

___

###  filterUndefinedProps

▸ **filterUndefinedProps**(`obj`: object): *object*

*Defined in [packages/react-day-picker/src/components/Months/helpers/filterUndefinedProps.ts:4](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Months/helpers/filterUndefinedProps.ts#L4)*

Filter the undefined props of `obj`.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | object |

**Returns:** *object*

* \[ **index**: *string*\]: any

___

###  getCaptionProps

▸ **getCaptionProps**(`dayPickerProps`: [DayPickerProps](interfaces/daypickerprops.md)): *[CaptionHtmlProps](index.md#captionhtmlprops)*

*Defined in [packages/react-day-picker/src/components/MonthCaption/getCaptionProps.ts:27](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/MonthCaption/getCaptionProps.ts#L27)*

Return props for creating a [MonthCaption](index.md#monthcaption) component.

#### Usage

Use this helper when swizzling the caption using  the
[[DayPickerProps.components]] prop.

```jsx
function MonthCaption({ dayPickerProps }): JSX.Element {
  const { containerProps } = getCaptionProps(dayPickerProps);
  return (
    <caption {...containerProps}>
      Something inside the caption
    </caption>;
  )
}
<DayPicker components={{ MonthCaption }} />
```

**Parameters:**

Name | Type |
------ | ------ |
`dayPickerProps` | [DayPickerProps](interfaces/daypickerprops.md) |

**Returns:** *[CaptionHtmlProps](index.md#captionhtmlprops)*

___

###  getDayProps

▸ **getDayProps**(`day`: Date, `modifiers`: [MatchingModifiers](index.md#matchingmodifiers), `props`: [DayPickerProps](interfaces/daypickerprops.md)): *[DayHtmlProps](index.md#dayhtmlprops)*

*Defined in [packages/react-day-picker/src/components/Day/getDayProps.ts:20](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Day/getDayProps.ts#L20)*

Return props for creating a [Day](index.md#day) component.

#### Usage

- Use this helper when swizzling the [Day](index.md#day) via the
  [[DayPickerProps.components]] prop.
- This component is a bit complex to swizzle: see the source of the
  [Day](index.md#day) component for an example.

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`modifiers` | [MatchingModifiers](index.md#matchingmodifiers) |
`props` | [DayPickerProps](interfaces/daypickerprops.md) |

**Returns:** *[DayHtmlProps](index.md#dayhtmlprops)*

___

###  getModifiersFromProps

▸ **getModifiersFromProps**(`props`: [DayPickerProps](interfaces/daypickerprops.md)): *[DayModifiers](index.md#daymodifiers)*

*Defined in [packages/react-day-picker/src/classes/utils/getModifiersFromProps.ts:7](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/utils/getModifiersFromProps.ts#L7)*

Return the `modifiers` prop including the modifiers from shortcut-props
(`selected`, `disabled` and `hidden`)

**Parameters:**

Name | Type |
------ | ------ |
`props` | [DayPickerProps](interfaces/daypickerprops.md) |

**Returns:** *[DayModifiers](index.md#daymodifiers)*

___

###  getMonths

▸ **getMonths**(`props`: [DayPickerProps](interfaces/daypickerprops.md)): *Date[]*

*Defined in [packages/react-day-picker/src/components/Months/helpers/getMonths.ts:8](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Months/helpers/getMonths.ts#L8)*

Get the months to render in DayPicker according to the passed
`numberOfMonths` and other month-related props.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [DayPickerProps](interfaces/daypickerprops.md) |

**Returns:** *Date[]*

___

###  getNavigation

▸ **getNavigation**(`props`: [DayPickerProps](interfaces/daypickerprops.md)): *[NavigationMonths](index.md#navigationmonths)*

*Defined in [packages/react-day-picker/src/components/Navigation/getNavigation.ts:10](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Navigation/getNavigation.ts#L10)*

Return the next and the previous months for the navigation component,
according to the DayPicker props.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [DayPickerProps](interfaces/daypickerprops.md) |

**Returns:** *[NavigationMonths](index.md#navigationmonths)*

___

###  getNavigationProps

▸ **getNavigationProps**(`props`: [DayPickerProps](interfaces/daypickerprops.md)): *[NavigationHtmlProps](index.md#navigationhtmlprops)*

*Defined in [packages/react-day-picker/src/components/Navigation/getNavigationProps.ts:9](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Navigation/getNavigationProps.ts#L9)*

Return the props for the Navigation component and its children.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [DayPickerProps](interfaces/daypickerprops.md) |

**Returns:** *[NavigationHtmlProps](index.md#navigationhtmlprops)*

___

###  getOutsideEndDays

▸ **getOutsideEndDays**(`day`: [DateWithModifiers](classes/datewithmodifiers.md), `props`: [DayPickerProps](interfaces/daypickerprops.md)): *[DateWithModifiers](classes/datewithmodifiers.md)[]*

*Defined in [packages/react-day-picker/src/components/MonthTable/getOutsideEndDays.ts:9](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/MonthTable/getOutsideEndDays.ts#L9)*

Return the outside ending days for the given day.

**Parameters:**

Name | Type |
------ | ------ |
`day` | [DateWithModifiers](classes/datewithmodifiers.md) |
`props` | [DayPickerProps](interfaces/daypickerprops.md) |

**Returns:** *[DateWithModifiers](classes/datewithmodifiers.md)[]*

___

###  getOutsideStartDays

▸ **getOutsideStartDays**(`day`: [DateWithModifiers](classes/datewithmodifiers.md), `props`: [DayPickerProps](interfaces/daypickerprops.md)): *[DateWithModifiers](classes/datewithmodifiers.md)[]*

*Defined in [packages/react-day-picker/src/components/MonthTable/getOutsideStartDays.ts:8](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/MonthTable/getOutsideStartDays.ts#L8)*

Return the outside starting days for the given day.

**Parameters:**

Name | Type |
------ | ------ |
`day` | [DateWithModifiers](classes/datewithmodifiers.md) |
`props` | [DayPickerProps](interfaces/daypickerprops.md) |

**Returns:** *[DateWithModifiers](classes/datewithmodifiers.md)[]*

___

###  getWeekdaysNames

▸ **getWeekdaysNames**(`locale`: DateFns.Locale, `format`: DayPickerProps["formatCaption"]): *string[]*

*Defined in [packages/react-day-picker/src/components/Head/getWeekdaysNames.ts:7](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/Head/getWeekdaysNames.ts#L7)*

Return the name of the weekdays according to the formatting function.

**Parameters:**

Name | Type |
------ | ------ |
`locale` | DateFns.Locale |
`format` | DayPickerProps["formatCaption"] |

**Returns:** *string[]*

___

###  getWeeks

▸ **getWeeks**(`month`: Date, `props`: [DayPickerProps](interfaces/daypickerprops.md)): *[MonthWeeks](index.md#monthweeks)*

*Defined in [packages/react-day-picker/src/components/MonthTable/getWeeks.ts:25](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/MonthTable/getWeeks.ts#L25)*

Return the weeks belonging to the given month.

**Parameters:**

Name | Type |
------ | ------ |
`month` | Date |
`props` | [DayPickerProps](interfaces/daypickerprops.md) |

**Returns:** *[MonthWeeks](index.md#monthweeks)*

___

###  isDayAfter

▸ **isDayAfter**(`day1`: Date, `day2`: Date): *boolean*

*Defined in [packages/react-day-picker/src/classes/utils/matchModifier.ts:13](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/utils/matchModifier.ts#L13)*

Return true if `day1` is after `day2`.

**Parameters:**

Name | Type |
------ | ------ |
`day1` | Date |
`day2` | Date |

**Returns:** *boolean*

___

###  isDayBefore

▸ **isDayBefore**(`day1`: Date, `day2`: Date): *boolean*

*Defined in [packages/react-day-picker/src/classes/utils/matchModifier.ts:20](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/utils/matchModifier.ts#L20)*

Return true if `day1` is before `day2`.

**Parameters:**

Name | Type |
------ | ------ |
`day1` | Date |
`day2` | Date |

**Returns:** *boolean*

___

### `Private` isValidDate

▸ **isValidDate**(`day`: Date): *boolean*

*Defined in [packages/react-day-picker/src/hooks/useInput.ts:11](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/hooks/useInput.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |

**Returns:** *boolean*

___

###  listModifiers

▸ **listModifiers**(`day`: Date, `modifiers`: [DayModifiers](index.md#daymodifiers)): *string[]*

*Defined in [packages/react-day-picker/src/classes/utils/listModifiers.ts:22](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/utils/listModifiers.ts#L22)*

Given a date and a list of modifiers, return the names of the modifiers matching that day.

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`modifiers` | [DayModifiers](index.md#daymodifiers) |

**Returns:** *string[]*

___

###  matchDate

▸ **matchDate**(`day`: Date, `matcher`: [DayMatcher](index.md#daymatcher)): *boolean*

*Defined in [packages/react-day-picker/src/classes/utils/matchModifier.ts:27](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/utils/matchModifier.ts#L27)*

Return true if `day` matches the given [DayMatcher](index.md#daymatcher).

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`matcher` | [DayMatcher](index.md#daymatcher) |

**Returns:** *boolean*

___

###  matchDay

▸ **matchDay**(`day`: Date, `matcher`: [DayMatcher](index.md#daymatcher)): *boolean*

*Defined in [packages/react-day-picker/src/classes/utils/matchModifier.ts:96](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/utils/matchModifier.ts#L96)*

Return `true` if a day matches a day matcher.

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`matcher` | [DayMatcher](index.md#daymatcher) |

**Returns:** *boolean*

___

### `Private` matchDayAfter

▸ **matchDayAfter**(`day`: Date, `matcher`: [DayMatcher](index.md#daymatcher)): *boolean*

*Defined in [packages/react-day-picker/src/classes/utils/matchModifier.ts:58](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/utils/matchModifier.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`matcher` | [DayMatcher](index.md#daymatcher) |

**Returns:** *boolean*

___

### `Private` matchDayBefore

▸ **matchDayBefore**(`day`: Date, `matcher`: [DayMatcher](index.md#daymatcher)): *boolean*

*Defined in [packages/react-day-picker/src/classes/utils/matchModifier.ts:49](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/utils/matchModifier.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`matcher` | [DayMatcher](index.md#daymatcher) |

**Returns:** *boolean*

___

### `Private` matchDayBetween

▸ **matchDayBetween**(`day`: Date, `matcher`: [DayMatcher](index.md#daymatcher)): *boolean*

*Defined in [packages/react-day-picker/src/classes/utils/matchModifier.ts:67](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/utils/matchModifier.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`matcher` | [DayMatcher](index.md#daymatcher) |

**Returns:** *boolean*

___

###  matchDayInRange

▸ **matchDayInRange**(`day`: Date, `matcher`: [DayMatcher](index.md#daymatcher)): *boolean*

*Defined in [packages/react-day-picker/src/classes/utils/matchModifier.ts:36](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/utils/matchModifier.ts#L36)*

Returns true if the day is in the range specified by the [DayMatcher](index.md#daymatcher).

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`matcher` | [DayMatcher](index.md#daymatcher) |

**Returns:** *boolean*

___

### `Private` matchDayOfWeek

▸ **matchDayOfWeek**(`day`: Date, `matcher`: [DayMatcher](index.md#daymatcher)): *boolean*

*Defined in [packages/react-day-picker/src/classes/utils/matchModifier.ts:80](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/utils/matchModifier.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`matcher` | [DayMatcher](index.md#daymatcher) |

**Returns:** *boolean*

___

### `Private` matchFunction

▸ **matchFunction**(`day`: Date, `matcher`: [DayMatcher](index.md#daymatcher)): *boolean*

*Defined in [packages/react-day-picker/src/classes/utils/matchModifier.ts:88](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/classes/utils/matchModifier.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`day` | Date |
`matcher` | [DayMatcher](index.md#daymatcher) |

**Returns:** *boolean*

___

###  useInput

▸ **useInput**(`initialSelectedDay`: Date | undefined, `formatStr`: string, `options`: object): *object*

*Defined in [packages/react-day-picker/src/hooks/useInput.ts:44](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/hooks/useInput.ts#L44)*

Hook to bind a input with a calendar.

```jsx
const {
 month,
 selected,
 dayPickerProps,
 inputProps
} = useInput(new Date());

<DayPicker {...dayPickerProps} />
<input {...inputProps} />
```

**Parameters:**

▪ **initialSelectedDay**: *Date | undefined*

▪ **formatStr**: *string*

▪ **options**: *object*

Name | Type |
------ | ------ |
`locale` | DateFns.Locale |
`required` | boolean |

**Returns:** *object*

* **dayPickerProps**: *[UseInputDayPickerProps](index.md#useinputdaypickerprops)*

* **inputProps**: *[UseInputInputProps](index.md#useinputinputprops)*

* **month**: *Date*

* **selected**: *Date | undefined*

## Object literals

### `Const` defaultClassNames

### ▪ **defaultClassNames**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:7](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L7)*

List the default CSS class names. Class names can be overridden using the
[classNames](interfaces/daypickerprops.md#optional-classnames) prop.

###  caption

• **caption**: *string* = "rdp-caption"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:10](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L10)*

###  day

• **day**: *string* = "rdp-day"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:13](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L13)*

###  dayWrapper

• **dayWrapper**: *string* = "rdp-day_wrapper"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:14](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L14)*

###  disabled

• **disabled**: *string* = "rdp-day_disabled"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:43](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L43)*

###  head

• **head**: *string* = "rdp-head"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:23](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L23)*

###  headRow

• **headRow**: *string* = "rdp-head_row"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:24](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L24)*

###  headWeekName

• **headWeekName**: *string* = "rdp-head_weekname"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:26](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L26)*

###  headWeekNumber

• **headWeekNumber**: *string* = "rdp-head_weeknumber"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:25](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L25)*

###  month

• **month**: *string* = "rdp-month"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:17](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L17)*

###  monthTable

• **monthTable**: *string* = "rdp-month_table"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:18](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L18)*

###  monthTbody

• **monthTbody**: *string* = "rdp-month_tbody"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:19](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L19)*

###  months

• **months**: *string* = "rdp-months"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:20](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L20)*

###  nav

• **nav**: *string* = "rdp-nav"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:29](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L29)*

###  navNext

• **navNext**: *string* = "rdp-nav_next"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:31](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L31)*

###  navPrev

• **navPrev**: *string* = "rdp-nav_prev"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:30](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L30)*

###  outsideend

• **outsideend**: *string* = "rdp-day_outside"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:45](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L45)*

###  outsidestart

• **outsidestart**: *string* = "rdp-day_outside"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:46](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L46)*

###  root

• **root**: *string* = "rdp"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:9](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L9)*

Root element

###  selected

• **selected**: *string* = "rdp-day_selected"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:42](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L42)*

###  today

• **today**: *string* = "rdp-day_today"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:44](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L44)*

###  week

• **week**: *string* = "rdp-week"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:34](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L34)*

###  weekDay

• **weekDay**: *string* = "rdp-week_day"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:35](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L35)*

###  weekNumber

• **weekNumber**: *string* = "rdp-weeknumber"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:39](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L39)*

###  weekWeeknumber

• **weekWeeknumber**: *string* = "rdp-week_weeknumber"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts:36](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultClassNames.ts#L36)*

___

### `Const` defaultModifiers

### ▪ **defaultModifiers**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts:6](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts#L6)*

Default modifiers.

###  disabled

• **disabled**: *false* = false

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts:7](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts#L7)*

###  hidden

• **hidden**: *false* = false

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts:8](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts#L8)*

###  interactive

• **interactive**: *true* = true

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts:9](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts#L9)*

###  outsideend

• **outsideend**: *false* = false

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts:10](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts#L10)*

###  outsidestart

• **outsidestart**: *false* = false

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts:11](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts#L11)*

###  selected

• **selected**: *false* = false

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts:12](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts#L12)*

###  today

• **today**: *false* = false

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts:13](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultModifiers.ts#L13)*

___

### `Const` defaultProps

### ▪ **defaultProps**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:20](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L20)*

List the default props used by the [DayPicker](index.md#daypicker) component.

###  className

• **className**: *string* = ""

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:23](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L23)*

###  classNames

• **classNames**: *object* = defaultClassNames

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:22](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L22)*

#### Type declaration:

###  enableOutsideDaysClick

• **enableOutsideDaysClick**: *false* = false

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:21](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L21)*

###  fixedWeeks

• **fixedWeeks**: *false* = false

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:32](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L32)*

###  formatCaption

• **formatCaption**: *[defaultFormatCaption](index.md#private-defaultformatcaption)* = defaultFormatCaption

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:33](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L33)*

###  formatDay

• **formatDay**: *[defaultFormatDay](index.md#private-defaultformatday)* = defaultFormatDay

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:34](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L34)*

###  formatWeekNumber

• **formatWeekNumber**: *[defaultFormatWeekNumber](index.md#private-defaultformatweeknumber)* = defaultFormatWeekNumber

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:36](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L36)*

###  formatWeekdayName

• **formatWeekdayName**: *[defaultFormatWeekdayName](index.md#private-defaultformatweekdayname)* = defaultFormatWeekdayName

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:35](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L35)*

###  locale

• **locale**: *object* = english

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:37](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L37)*

#### Type declaration:

* **code**? : *undefined | string*

* **formatDistance**? : *undefined | function*

* **formatLong**? : *undefined | object*

* **formatRelative**? : *undefined | function*

* **localize**? : *undefined | object*

* **match**? : *undefined | object*

* **options**? : *undefined | object*

###  modifiersClassNames

• **modifiersClassNames**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:39](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L39)*

#### Type declaration:

###  modifiersStyles

• **modifiersStyles**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:40](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L40)*

#### Type declaration:

###  month

• **month**: *Date* = startOfMonth(new Date())

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:41](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L41)*

###  nextLabel

• **nextLabel**: *string* = "▶"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:38](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L38)*

###  numberOfMonths

• **numberOfMonths**: *number* = 1

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:42](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L42)*

###  pagedNavigation

• **pagedNavigation**: *false* = false

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:43](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L43)*

###  prevLabel

• **prevLabel**: *string* = "◀"

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:44](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L44)*

###  reverseMonths

• **reverseMonths**: *false* = false

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:45](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L45)*

###  showCaption

• **showCaption**: *true* = true

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:46](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L46)*

###  showHead

• **showHead**: *true* = true

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:47](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L47)*

###  showNavigation

• **showNavigation**: *true* = true

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:48](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L48)*

###  showOutsideDays

• **showOutsideDays**: *false* = false

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:49](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L49)*

###  showWeekNumber

• **showWeekNumber**: *false* = false

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:50](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L50)*

###  style

• **style**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:24](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L24)*

#### Type declaration:

###  styles

• **styles**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:25](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L25)*

#### Type declaration:

▪ **swizzle**: *object*

*Defined in [packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts:26](https://github.com/gpbl/react-day-picker/blob/a13347e4/packages/react-day-picker/src/components/DayPicker/defaults/defaultProps.ts#L26)*

* **Day**: *[Day](index.md#day)*

* **MonthCaption**: *[MonthCaption](index.md#monthcaption)*

* **Navigation**: *[Navigation](index.md#navigation)*

* **WeekNumber**: *[WeekNumber](index.md#weeknumber)*

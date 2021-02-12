---
id: "defaultprops"
title: "Variable: defaultProps"
sidebar_label: "defaultProps"
custom_edit_url: null
hide_title: true
---

# Variable: defaultProps

• `Const` **defaultProps**: *object*

#### Type declaration:

Name | Type |
------ | ------ |
`className` | *string* |
`classNames` | [*DayPickerClassNames*](../types/daypickerclassnames.md) |
`components` | { `Caption`: (`props`: [*CaptionProps*](../interfaces/captionprops.md)) => JSX.Element ; `Day`: (`props`: [*DayProps*](../interfaces/dayprops.md)) => JSX.Element ; `Navigation`: (`props`: [*NavigationProps*](../interfaces/navigationprops.md)) => JSX.Element ; `NextIcon`: () => JSX.Element ; `PrevIcon`: () => JSX.Element ; `WeekNumber`: (`props`: [*WeekNumberProps*](../interfaces/weeknumberprops.md)) => JSX.Element  } |
`enableOutsideDaysClick` | *boolean* |
`fixedWeeks` | *boolean* |
`formatCaption` | (`month`: Date, `formatOptions?`: { `locale?`: dateFns.Locale  }) => *string* |
`formatDay` | (`day`: Date, `formatOptions?`: { `locale?`: dateFns.Locale  }) => *string* |
`formatWeekNumber` | (`weekNumber`: *number*) => *string* |
`formatWeekdayName` | (`day`: Date, `formatOptions?`: { `locale?`: dateFns.Locale  }) => *string* |
`locale` | Locale |
`modifiers` | {} |
`modifiersClassNames` | {} |
`modifiersStyles` | {} |
`numberOfMonths` | *number* |
`pagedNavigation` | *boolean* |
`reverseMonths` | *boolean* |
`showCaption` | *boolean* |
`showHead` | *boolean* |
`showNavigation` | *boolean* |
`showOutsideDays` | *boolean* |
`showWeekNumber` | *boolean* |
`style` | {} |
`styles` | {} |
`today` | Date |

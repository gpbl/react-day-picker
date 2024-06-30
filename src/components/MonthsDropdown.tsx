// import React from "react";
// import type { ChangeEventHandler } from "react";

// import { UI } from "../UI.js";
// import type { CalendarMonth } from "../classes/index.js";
// import type { UIProps } from "../types/shared.js";

// import { Dropdown as DefaultDropdown } from "./Dropdown.js";

// /**
//  * Render the dropdown to change the month.
//  *
//  * Use the `components` prop to swap this component with a custom one.
//  *
//  * @group Components
//  * @see https://daypicker.dev/advanced-guides/custom-components
//  */
// export function MonthsDropdown(
//   props: {
//     /** The month where the dropdown is displayed. */
//     month: CalendarMonth;
//   } & UIProps
// ) {
//   const {
//     classNames,
//     styles,
//     components,
//     disableNavigation,
//     dateLib: { setMonth, startOfMonth },
//     labels: { labelMonthDropdown }
//   } = props.props;

//   const { dropdownOptions, goToMonth } = props.calendar;

//   const Dropdown = components?.Dropdown ?? DefaultDropdown;

//   const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
//     const selectedMonth = Number((e.target as HTMLSelectElement).value);
//     const month = setMonth(startOfMonth(props.month.date), selectedMonth);
//     goToMonth(month);
//   };

//   return (
//     <Dropdown
//       calendar={props.calendar}
//       props={props.props}
//       className={classNames[UI.Dropdown]}
//       style={styles?.[UI.Dropdown]}
//       aria-label={labelMonthDropdown()}
//       disabled={Boolean(disableNavigation)}
//       rootClassName={classNames[UI.MonthsDropdown]}
//       options={dropdownOptions.months}
//       value={props.month.date.getMonth()}
//       onChange={handleChange}
//     />
//   );
// }

// export type MonthsDropdownProps = Parameters<typeof MonthsDropdown>[0];

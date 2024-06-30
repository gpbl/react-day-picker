// import React from "react";

// import { UI } from "../UI.js";
// import type { CalendarMonth } from "../classes/index.js";
// import type { UIProps } from "../types/index.js";

// import { MonthsDropdown } from "./MonthsDropdown.js";
// import { YearsDropdown } from "./YearsDropdown.js";

// /**
//  * Render the dropdowns to navigate between months.
//  *
//  * Use the `components` prop to swap this component with a custom one.
//  *
//  * @group Components
//  * @see https://daypicker.dev/advanced-guides/custom-components
//  */
// export function DropdownNav(
//   props: {
//     /** The month where the dropdown navigation is displayed. */
//     month: CalendarMonth;
//     /** Whether the user can change the month. */
//     showMonths?: boolean;
//     /** Whether the user can change the year. */
//     showYears?: boolean;
//     /** The index where this month is displayed. */
//     index: number;
//   } & UIProps
// ) {
//   const {
//     classNames,
//     styles,
//     formatters: { formatMonthDropdown, formatYearDropdown }
//   } = props.props;

//   return (
//     <div
//       className={classNames[UI.DropdownNav]}
//       style={styles?.[UI.DropdownNav]}
//     >
//       {props.showMonths ? (
//         <MonthsDropdown
//           className={classNames[UI.MonthsDropdown]}
//           style={styles?.[UI.MonthsDropdown]}
//           month={props.month}
//           calendar={props.calendar}
//           props={props.props}
//         />
//       ) : (
//         <span role="status" aria-live="polite">
//           {formatMonthDropdown(props.month.date.getMonth())}
//         </span>
//       )}
//       {props.showYears ? (
//         <YearsDropdown
//           className={classNames[UI.YearsDropdown]}
//           style={styles?.[UI.YearsDropdown]}
//           month={props.month}
//           calendar={props.calendar}
//           props={props.props}
//         />
//       ) : (
//         <span role="status" aria-live="polite">
//           {formatYearDropdown(props.month.date.getFullYear())}
//         </span>
//       )}
//     </div>
//   );
// }

// export type DropdownNavProps = Parameters<typeof DropdownNav>[0];

// import React from "react";
// import type { PropsWithChildren } from "react";

// import {
//   MultiProvider,
//   RangeProvider,
//   SingleProvider
// } from "../selection/index.js";
// import type {
//   DayPickerProps,
//   PropsMulti,
//   PropsRange,
//   PropsSingle
// } from "../types/index.js";

// export function ContextProviders(props: PropsWithChildren<DayPickerProps>) {
//   const { children, ...initialProps } = props;
//   return (
//     <PropsContextProvider initialProps={initialProps}>
//       <CalendarContextProvider>
//         <SelectionProviders>
//           <ModifiersContextProvider>
//             <FocusContextProvider>{children}</FocusContextProvider>
//           </ModifiersContextProvider>
//         </SelectionProviders>
//       </CalendarContextProvider>
//     </PropsContextProvider>
//   );
// }

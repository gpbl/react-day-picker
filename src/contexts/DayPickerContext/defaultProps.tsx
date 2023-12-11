// import * as formatters from '../../formatters';
// import * as labels from '../../labels';
// import { DayPickerProps, SelectHandler, Selected } from '../../DayPicker';
// import { enUS } from 'date-fns/locale';
// import { type Mode } from '../../types/PropsBase';

// import type {
//   CaptionLayout,
//   ClassNames,
//   ColorScheme,
//   ContrastPreference,
//   Formatters,
//   Labels
// } from '../../types';

// import { defaultClassNames } from './defaultClassNames';
// import { getFromToDate } from './utils/getFromToDate';

// /** Represents the defaults internally used when not passed via props */
// export type DefaultProps = {
//   captionLayout: CaptionLayout;
//   classNames: Required<ClassNames>;
//   colorScheme: ColorScheme;
//   contrastPreference: ContrastPreference;
//   formatters: Required<Formatters>;
//   id: string;
//   labels: Labels;
//   locale: Locale;
//   mode: Mode;
//   required: boolean;
//   numberOfMonths: number;
//   today: Date;
//   fromDate: Date | undefined;
//   toDate: Date | undefined;
//   min: number | undefined;
//   max: number | undefined;
//   onSelect: SelectHandler<'single'> | undefined;
//   selected: Selected<'single'> | undefined;
//   defaultSelected: Selected<'single'> | undefined;
// };

// export function getDefaultProps<T extends Mode>(
//   /** The unique ID of the DayPicker instance */
//   id: string,
//   /** The props passed to the DayPicker instance */
//   props: DayPickerProps<T>
// ): Required<DayPickerProps<T>> {
//   const { fromDate, toDate } = getFromToDate(props);

//   const defaults: Required<DayPickerProps<T>> = {
//     captionLayout: 'buttons',
//     classNames: defaultClassNames,
//     colorScheme: 'auto',
//     contrast: 'no_preference',
//     formatters,
//     fromDate,
//     id,
//     labels,
//     locale: enUS,
//     mode: 'single' as Mode,
//     numberOfMonths: 1,
//     toDate,
//     today: new Date(),
//     onSelect: undefined,
//     selected: undefined,
//     defaultSelected: undefined
//   };
//   return defaults;
// }

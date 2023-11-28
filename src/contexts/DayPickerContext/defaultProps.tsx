import * as formatters from '../../formatters';
import * as labels from '../../labels';
import { CaptionLayout } from '../../components/Nav';
import { DayPickerProps } from '../../DayPicker';
import { enUS } from 'date-fns/locale';
import { type Mode } from '../../types/PropsBase';

import type {
  ClassNames,
  ColorScheme,
  ContrastPreference,
  Formatters,
  Labels
} from '../../types';

import { defaultClassNames } from './defaultClassNames';
import { getFromToDate } from './utils/getFromToDate';

/** Represents the defaults internally used when not passed via props */
export type DefaultProps = {
  captionLayout: CaptionLayout;
  classNames: Required<ClassNames>;
  colorScheme: ColorScheme;
  contrastPreference: ContrastPreference;
  formatters: Required<Formatters>;
  id: string;
  labels: Labels;
  locale: Locale;
  mode: Mode;
  required: boolean;
  numberOfMonths: number;
  today: Date;
  fromDate: Date | undefined;
  toDate: Date | undefined;
  min: number | undefined;
  max: number | undefined;
};

export function getDefaultProps(
  /** The unique ID of the DayPicker instance */
  id: string,
  /** The props passed to the DayPicker instance */
  props: DayPickerProps
): DefaultProps {
  const { fromDate, toDate } = getFromToDate(props);

  return {
    captionLayout: 'buttons',
    classNames: defaultClassNames,
    colorScheme: 'auto',
    contrastPreference: 'no_preference',
    formatters,
    fromDate,
    id,
    labels,
    locale: enUS,
    max: undefined,
    min: undefined,
    mode: 'single',
    numberOfMonths: 1,
    required: false,
    toDate,
    today: new Date()
  };
}

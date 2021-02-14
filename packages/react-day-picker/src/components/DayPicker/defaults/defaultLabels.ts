import { format } from 'date-fns';
import { LabelsFormatters } from '../../../types';

import { defaultProps } from './defaultProps';

/**
 * The formatters for the ARIA labels used across the component.
 *
 * Change the default formatters using the
 * [[DayPickerComponentProps.labelsFormatters]] prop.
 */
export const defaultLabels: Required<LabelsFormatters> = {
  NavButtonNext: (month, props) => {
    const formatCaption = props?.formatCaption ?? defaultProps.formatCaption;
    return `Go to next month: ${formatCaption(month, props)}`;
  },
  NavButtonPrev: (month, props) => {
    const formatCaption = props?.formatCaption ?? defaultProps.formatCaption;
    return `Go to previous month: ${formatCaption(month, props)}`;
  },
  Day: (day, _, props) => {
    return format(day, 'PPPP', { locale: props.locale });
  },
  HeadCell: (day, props) => {
    return props.formatWeekdayName(day, { locale: props.locale }, 'cccc');
  },
  RowHead: (n, props) => {
    return `Week n. ${n}`;
  }
};

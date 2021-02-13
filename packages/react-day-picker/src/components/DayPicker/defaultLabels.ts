import { format } from 'date-fns';
import { LabelsFormatters } from '../../types/LabelsFormatters';

import { defaultProps } from './defaultProps';

export const defaultLabels: LabelsFormatters = {
  navNext: (month, props) => {
    const formatCaption = props?.formatCaption ?? defaultProps.formatCaption;
    return `Go to next month: ${formatCaption(month, props)}`;
  },
  navPrev: (month, props) => {
    const formatCaption = props?.formatCaption ?? defaultProps.formatCaption;
    return `Go to previous month: ${formatCaption(month, props)}`;
  },
  day: (day, _, props) => {
    return format(day, 'PPPP', { locale: props.locale });
  },
  weekday: (day, props) => {
    return props.formatWeekdayName(day, { locale: props.locale }, 'cccc');
  },
  weekNumber: (n, props) => {
    return `Week n. ${n}`;
  }
};

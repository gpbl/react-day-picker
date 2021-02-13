import { format } from 'date-fns';
import { LabelsFormatters } from 'types';

import { defaultProps } from './defaultProps';

export const defaultLabels: LabelsFormatters = {
  navNextButton: (month, props) => {
    const formatCaption = props?.formatCaption ?? defaultProps.formatCaption;
    return `Go to next month: ${formatCaption(month, props)}`;
  },
  navPrevButton: (month, props) => {
    const formatCaption = props?.formatCaption ?? defaultProps.formatCaption;
    return `Go to previous month: ${formatCaption(month, props)}`;
  },
  day: (day, _, props) => {
    return format(day, 'PPPP', { locale: props.locale });
  },
  headCell: (day, props) => {
    return props.formatWeekdayName(day, { locale: props.locale }, 'cccc');
  },
  rowHead: (n, props) => {
    return `Week n. ${n}`;
  }
};

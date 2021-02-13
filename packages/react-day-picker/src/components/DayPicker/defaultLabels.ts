import { AriaLabelsMap } from '../../types/AriaLabelsMap';

import { defaultProps } from './defaultProps';

export const defaultLabels: AriaLabelsMap = {
  navNext: (month, props) => {
    const formatCaption = props?.formatCaption ?? defaultProps.formatCaption;
    return `Go to next month: ${formatCaption(month, props)}`;
  },
  navPrev: (month, props) => {
    const formatCaption = props?.formatCaption ?? defaultProps.formatCaption;
    return `Go to previous month: ${formatCaption(month, props)}`;
  }
};

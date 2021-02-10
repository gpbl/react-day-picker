import { ModifiersStatus } from '../../DayPicker';
import { DayContainerHtmlProps } from './DayContainerHtmlProps';
import { DayWrapperHtmlProps } from './DayWrapperHtmlProps';

export interface DayHtmlProps {
  containerProps: DayContainerHtmlProps;
  wrapperProps: DayWrapperHtmlProps;
  modifiers: ModifiersStatus;
}

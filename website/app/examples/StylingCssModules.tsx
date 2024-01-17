import { DayPicker } from 'react-day-picker';
import defaultStyles from 'react-day-picker/dist/style.module.css';

import customStyles from './StylingCssModules.module.css';

export function StylingCssModules() {
  return <DayPicker classNames={{ ...defaultStyles, ...customStyles }} />;
}

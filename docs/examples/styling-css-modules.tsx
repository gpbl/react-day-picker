import { DayPicker } from 'react-day-picker';
import defaultStyles from 'react-day-picker/dist/style.module.css';

import customStyles from './styling-css-modules.module.css';

export default function App() {
  return <DayPicker classNames={{ ...defaultStyles, ...customStyles }} />;
}

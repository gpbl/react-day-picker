import { DayPicker } from 'react-day-picker';

import { arSA } from 'date-fns/locale';

export default function App() {
  return <DayPicker dir="rtl" locale={arSA} />;
}

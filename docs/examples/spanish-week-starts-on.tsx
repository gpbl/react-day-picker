import { DayPicker } from 'react-day-picker';

import { es } from 'date-fns/locale';

export default function App() {
  return <DayPicker locale={es} weekStartsOn={0} />;
}

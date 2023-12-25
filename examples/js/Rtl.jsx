import { DayPicker } from 'react-day-picker';
import { arSA } from 'date-fns/locale';
export function Rtl() {
  return <DayPicker dir="rtl" locale={arSA} />;
}

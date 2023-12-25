import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';
export function SpanishWeekStartsOn() {
  return <DayPicker locale={es} weekStartsOn={0} />;
}

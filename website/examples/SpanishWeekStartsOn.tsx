import { es } from "date-fns/locale/es";

import { DayPicker } from "./react-day-picker-v8";

export function SpanishWeekStartsOn() {
  return <DayPicker locale={es} weekStartsOn={0} />;
}

import { es } from "date-fns/locale/es";
import { DayPicker } from "./DayPicker";

export function SpanishWeekStartsOn() {
  return <DayPicker locale={es} weekStartsOn={0} />;
}

import { arSA } from "date-fns/locale/ar-SA";
import { DayPicker } from "react-day-picker";

export function Rtl() {
  return <DayPicker dir="rtl" locale={arSA} />;
}

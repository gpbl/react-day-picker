import { arSA } from "date-fns/locale/ar-SA";
import { DayPicker } from "./react-day-picker-v8";

export function Rtl() {
  return <DayPicker dir="rtl" locale={arSA} />;
}

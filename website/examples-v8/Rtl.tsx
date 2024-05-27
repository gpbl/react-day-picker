import { arSA } from "date-fns/locale/ar-SA";
import { DayPicker } from "./DayPicker";

export function Rtl() {
  return <DayPicker dir="rtl" locale={arSA} />;
}

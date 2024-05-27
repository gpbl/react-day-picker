import { DayPicker } from "./DayPicker";
import defaultStyles from "react-day-picker/style.module.css";

export function StylingCssModules() {
  return <DayPicker classNames={{ ...defaultStyles }} />;
}

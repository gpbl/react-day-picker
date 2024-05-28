import { format } from "date-fns";

import { DateFormatter, DayPicker } from "./react-day-picker-v8";

const seasonEmoji: Record<string, string> = {
  winter: "⛄️",
  spring: "🌸",
  summer: "🌻",
  autumn: "🍂"
};

const getSeason = (month: Date): string => {
  const monthNumber = month.getMonth();
  if (monthNumber >= 0 && monthNumber < 3) return "winter";
  if (monthNumber >= 3 && monthNumber < 6) return "spring";
  if (monthNumber >= 6 && monthNumber < 9) return "summer";
  else return "autumn";
};

const formatCaption: DateFormatter = (month, options) => {
  const season = getSeason(month);
  return `${seasonEmoji[season]} ${format(month, "LLLL", { locale: options?.locale })}`;
};

export function Formatters() {
  return (
    <DayPicker fromYear={2020} toYear={2025} formatters={{ formatCaption }} />
  );
}

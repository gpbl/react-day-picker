import React from "react";

import { format } from "date-fns";
import { DayPicker, type DateLibOptions } from "react-day-picker";

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

const formatCaption = (month: Date, options: DateLibOptions | undefined) => {
  const season = getSeason(month);
  return `${seasonEmoji[season]} ${format(month, "LLLL", { locale: options?.locale })}`;
};

export function Formatters() {
  return (
    <DayPicker
      fromYear={2020}
      toYear={2025}
      formatters={{ formatMonthCaption: formatCaption }}
    />
  );
}

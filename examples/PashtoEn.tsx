import { DayPicker, psAFEn } from "@daypicker/persian";
import React from "react";

export function PashtoEn() {
  return (
    <DayPicker showWeekNumber showOutsideDays locale={psAFEn} numerals="latn" />
  );
}

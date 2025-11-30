import { enUS } from "date-fns/locale";

import { DateLib } from "../classes/DateLib.js";
import { fr } from "../locales/fr.js";
import { it } from "../locales/it.js";
import { ja } from "../locales/ja.js";

import { getLabels } from "./getLabels.js";

describe("getLabels", () => {
  test("uses locale string labels when custom labels are not provided", () => {
    const dateLib = new DateLib({
      locale: {
        ...enUS,
        labels: { labelPrevious: "Indietro" },
      },
    });

    const labels = getLabels(undefined, dateLib.options);

    expect(labels.labelPrevious(new Date())).toBe("Indietro");
  });

  test("uses locale label functions when available", () => {
    const dateLib = new DateLib({
      locale: {
        ...enUS,
        labels: {
          labelWeekday: (date) => `weekday-${date.getDay()}`,
        },
      },
    });

    const labels = getLabels(undefined, dateLib.options);

    expect(labels.labelWeekday(new Date(2024, 0, 1))).toBe("weekday-1");
  });

  test("custom labels override locale labels", () => {
    const custom = { labelNext: () => "custom-next" };
    const labels = getLabels(custom, new DateLib({ locale: ja }).options);

    expect(labels.labelNext(new Date())).toBe("custom-next");
  });

  test("falls back to defaults when locale does not define a label", () => {
    const locale = { ...enUS, labels: {} };
    const labels = getLabels(undefined, new DateLib({ locale }).options);

    expect(labels.labelWeekNumber(1)).toBe("Week 1");
  });

  test("uses Italian locale label translations", () => {
    const dateLib = new DateLib({ locale: it });
    const labels = getLabels(undefined, dateLib.options);

    expect(labels.labelPrevious(new Date())).toBe("Vai al mese precedente");
    expect(labels.labelMonthDropdown()).toBe("Scegli il mese");
    expect(labels.labelWeekNumber(3)).toBe("Settimana 3");
    expect(labels.labelYearDropdown()).toBe("Scegli l’anno");
  });

  test("uses French locale label translations", () => {
    const dateLib = new DateLib({ locale: fr });
    const labels = getLabels(undefined, dateLib.options);

    expect(labels.labelPrevious(new Date())).toBe("Aller au mois précédent");
    expect(labels.labelMonthDropdown()).toBe("Choisir le mois");
    expect(labels.labelWeekNumber(2)).toBe("Semaine 2");
    expect(labels.labelYearDropdown()).toBe("Choisir l'année");
  });
});

import { useHistory, useLocation } from "@docusaurus/router";
import { useEffect, useMemo, useState } from "react";
import type { DayPickerProps } from "react-day-picker-v9";
import * as locales from "react-day-picker-v9/locale";
import {
  buildPlaygroundQueryString,
  parsePlaygroundSearch,
} from "../Playground/shared/queryString";

export type DayPickerPropsWithCalendar = DayPickerProps & {
  calendar?:
    | "gregorian"
    | "persian"
    | "hijri"
    | "ethiopic"
    | "buddhist"
    | "hebrew";
};

export function useQueryStringSync(basePath: string = "/playground") {
  const history = useHistory();
  const location = useLocation();

  const initialProps = parsePlaygroundSearch(
    location.search,
    Object.values(locales),
  ) as DayPickerProps;

  const [props, setProps] = useState<DayPickerPropsWithCalendar>(initialProps);

  const updateQueryString = useMemo(
    () => (updatedProps: DayPickerProps) => {
      const newQueryString = buildPlaygroundQueryString(
        updatedProps as Record<string, unknown>,
      );
      if (location.search !== newQueryString) {
        history.replace(basePath + newQueryString);
      }
    },
    [history, location.search, basePath],
  );

  useEffect(() => {
    updateQueryString(props);
  }, [props, updateQueryString]);

  return { props, setProps };
}

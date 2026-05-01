import type { DayPickerProps } from "@daypicker/react";
import * as locales from "@daypicker/react/locale";
import { useHistory, useLocation } from "@docusaurus/router";
import { useEffect, useMemo, useState } from "react";
import {
  buildPlaygroundQueryString,
  parsePlaygroundSearch,
} from "./shared/queryString";

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

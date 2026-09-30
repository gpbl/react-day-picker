import * as React from "react";

let nextId = 0;

/** React 16/17 fallback: assign IDs after hydration to keep server markup stable. */
function useLegacyId(): string | undefined {
  const [id, setId] = React.useState<string>();
  React.useEffect(() => {
    setId(`rdp-${++nextId}`);
  }, []);
  return id;
}

/** Use SSR-safe React IDs where available without raising the React peer minimum. */
export const useUniqueId: () => string | undefined = React.useId ?? useLegacyId;

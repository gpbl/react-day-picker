import style from "!raw-loader!react-day-picker/style.css";
import { useColorMode } from "@docusaurus/theme-common";
import root from "react-shadow";

export function ShadowDomWrapper({ children }: { children: React.ReactNode }) {
  const colorMode = useColorMode();
  return (
    <root.div>
      {children}
      <style>{style.toString()}</style>
      {colorMode.isDarkTheme && (
        <style>{`
          .rdp-root {
              --rdp-accent-color: var(--ifm-color-primary);
              --rdp-accent-background-color: #073845;
              --rdp-range_end-color: black;
              --rdp-range_start-color: black;
            }
          `}</style>
      )}
    </root.div>
  );
}

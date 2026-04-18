import style from "!raw-loader!react-day-picker/src/style.css";
import { useColorMode } from "@docusaurus/theme-common";
import root from "react-shadow";

export function ShadowDomWrapper({
  baseStyleCss,
  children,
  styleStr,
}: {
  baseStyleCss?: string;
  children: React.ReactNode;
  styleStr: string | undefined;
}) {
  const { colorMode } = useColorMode();
  return (
    <root.div>
      {children}
      <style>{baseStyleCss ?? style.toString()}</style>
      <style>{`
        .rdp-root {
          --rdp-accent-color: var(--ifm-color-primary);
        }
      `}</style>
      {colorMode === "dark" && (
        <style>{`
          .rdp-root {
              --rdp-accent-color: var(--ifm-color-primary);
              --rdp-accent-background-color: #073845;
              --rdp-range_end-color: black;
              --rdp-range_start-color: black;
            }
          `}</style>
      )}
      {styleStr && <style>{styleStr}</style>}
    </root.div>
  );
}

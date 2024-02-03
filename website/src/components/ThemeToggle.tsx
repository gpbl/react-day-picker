import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton, Tooltip } from "@radix-ui/themes";

export const ThemeToggle = () => {
  // const [theme, setTheme] = setState(;
  return (
    <>
      <style>{`
        :root, .light, .light-theme {
          --theme-toggle-sun-icon-display: block;
          --theme-toggle-moon-icon-display: none;
        }
        .dark, .dark-theme {
          --theme-toggle-sun-icon-display: none;
          --theme-toggle-moon-icon-display: block;
        }
      `}</style>

      <Tooltip content="Toggle theme">
        <IconButton
          size="3"
          variant="ghost"
          color="gray"
          onClick={() => {
            // setTheme((prev) =>
            //   prev === Theme.DARK ? Theme.LIGHT : Theme.DARK
            // );
          }}
        >
          <SunIcon
            width="18"
            height="18"
            style={{ display: "var(--theme-toggle-sun-icon-display)" }}
          />
          <MoonIcon
            width="18"
            height="18"
            style={{ display: "var(--theme-toggle-moon-icon-display)" }}
          />
        </IconButton>
      </Tooltip>
    </>
  );
};

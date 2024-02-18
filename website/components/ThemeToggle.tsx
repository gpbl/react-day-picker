"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton, Tooltip } from "@radix-ui/themes";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
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
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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

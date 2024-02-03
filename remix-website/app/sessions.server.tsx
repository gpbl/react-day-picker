import { createThemeSessionResolver } from "remix-themes";

import { createCookieSessionStorage } from "@remix-run/node";

export const themeSessionResolver = createThemeSessionResolver(
  createCookieSessionStorage({
    cookie: {
      name: "theme",
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secrets: ["s3cr3t"],
    },
  })
);

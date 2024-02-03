import { createCookie } from "@remix-run/node"; // or cloudflare/deno

export const branch = createCookie("branch", {
  maxAge: 604_800, // one week
});

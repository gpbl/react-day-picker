import { createThemeSessionResolver } from 'remix-themes';

import { createCookieSessionStorage } from '@remix-run/node';

export const themeSessionResolver = createThemeSessionResolver(
  createCookieSessionStorage({
    cookie: {
      name: 'theme',
      // domain: 'remix.run',
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secrets: ['s3cr3t']
      // secure: true,
    }
  })
);

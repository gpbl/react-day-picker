import { useLocation } from '@remix-run/react';

/** Returns the current page slug. */
export function useCurrentPageSlug() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const routerSlug = searchParams.get('slug') ?? '';
  const currentPageSlug = location.pathname.substring(1);
  if (Array.isArray(routerSlug)) {
    return currentPageSlug.replace('[...slug]', routerSlug[0]);
  }
  return currentPageSlug.replace('[slug]', routerSlug);
}

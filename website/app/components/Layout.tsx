import { PropsWithChildren } from 'react';

import { DocsNav } from '@/components/DocsNav';
import { DocsPageWrapper } from '@/components/DocsPageWrapper';
import { Header } from '@/components/Header';
import { MobileMenuProvider } from '@/components/MobileMenu';
import { SideNav } from '@/components/SideNav';
import { Box, Flex } from '@radix-ui/themes';
import { useLocation } from '@remix-run/react';
import { apiNav } from '@/routes/nav.api';
import { docsNav } from '@/routes/nav';

export function Layout(props: PropsWithChildren) {
  const location = useLocation();
  const isDocs =
    location.pathname === '/' || location.pathname.startsWith('/docs');
  const isApi = location.pathname.startsWith('/api');

  const isPage = isDocs || isApi;
  return (
    <MobileMenuProvider>
      <Header gitHubLink="https://github.com/gpbl/react-day-picker/tree/next" />
      <Flex>
        {isPage ? (
          <>
            <SideNav>
              <Box pt="4" px="4" pb="9">
                <DocsNav
                  routes={
                    location.pathname === '/' ||
                    location.pathname.startsWith('/docs')
                      ? docsNav
                      : location.pathname.startsWith('/api')
                        ? apiNav()
                        : []
                  }
                />
              </Box>
            </SideNav>

            <DocsPageWrapper>
              <Box>{props.children}</Box>
              {/* <DocsPagination allRoutes={allColorsRoutes} /> */}
              {/* <EditPageLink /> */}
            </DocsPageWrapper>
          </>
        ) : (
          props.children
        )}
      </Flex>
    </MobileMenuProvider>
  );
}

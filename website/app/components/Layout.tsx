import { PropsWithChildren } from 'react';

import { api as apiRoutes } from '@/routes/api';
import { docs as docsRoutes } from '@/routes/docs';
import { Box, Flex } from '@radix-ui/themes';
import { useLocation } from '@remix-run/react';

import { DocsNav } from '@/components/DocsNav';
import { DocsPageWrapper } from '@/components/DocsPageWrapper';
import { Header } from '@/components/Header';
import { MobileMenuProvider } from '@/components/MobileMenu';
import { SideNav } from '@/components/SideNav';

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
                      ? docsRoutes
                      : location.pathname.startsWith('/api')
                        ? apiRoutes
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

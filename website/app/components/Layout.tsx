import { PropsWithChildren } from 'react';
import { Header } from './Header';
import { MobileMenuProvider } from './MobileMenu';
import { Flex, Box } from '@radix-ui/themes';
import { SideNav } from './SideNav';
import { DocsPageWrapper } from './DocsPageWrapper';
import { DocsNav } from './DocsNav';
import { useLocation } from '@remix-run/react';
import { docsRoutes } from '../routes/docsRoutes';
import { apiRoutes } from '../routes/apiRoutes';

export function Layout(props: PropsWithChildren) {
  const location = useLocation();
  const isDocs =
    location.pathname === '/' || location.pathname.startsWith('/docs');
  const isApi = location.pathname.startsWith('/api');
  return (
    <MobileMenuProvider>
      <Header gitHubLink="https://github.com/gpbl/react-day-picker" />
      <Flex>
        {isDocs || isApi ? (
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

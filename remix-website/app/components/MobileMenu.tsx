import * as React from 'react';

import { RemoveScroll } from 'react-remove-scroll';

import { createContext } from '@radix-ui/react-context';
import { Slot } from '@radix-ui/react-slot';
import { Box, Portal, Theme } from '@radix-ui/themes';
import { useLocation } from '@remix-run/react';

const [MenuProvider, useMenuContext] = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>('MobileMenu');

export const MobileMenuProvider = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = React.useState(false);

  const location = useLocation();

  // React.useEffect(() => {
  //   const handleRouteChangeStart = () => {
  //     // Dismiss mobile keyboard if focusing an input (e.g. when searching)
  //     if (document.activeElement instanceof HTMLInputElement) {
  //       document.activeElement.blur();
  //     }

  //     setOpen(false);
  //   };

  //   location.events.on('routeChangeStart', handleRouteChangeStart);

  //   return () => {
  //     location.events.off('routeChangeStart', handleRouteChangeStart);
  //   };
  // }, [location.events]);

  React.useEffect(() => {
    // Match @media (--md)
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');

    const handleChange = () => {
      setOpen((open) => (open ? !mediaQueryList.matches : false));
    };

    handleChange();
    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, []);

  return (
    <MenuProvider open={open} setOpen={setOpen}>
      {children}
    </MenuProvider>
  );
};

export const useMobileMenuContext = () => useMenuContext('MobileMenu');

export const MobileMenu = ({ children }: React.PropsWithChildren) => {
  const mobileMenu = useMobileMenuContext();

  if (!mobileMenu.open) {
    return null;
  }

  return (
    <Portal>
      <Theme>
        <RemoveScroll as={Slot} allowPinchZoom enabled>
          <Box
            position="fixed"
            inset="0"
            style={{
              zIndex: 1,
              display: 'grid',
              gridTemplateRows: 'auto minmax(0, 1fr)',
              backgroundColor: 'var(--color-background)'
            }}
          >
            {children}
          </Box>
        </RemoveScroll>
      </Theme>
    </Portal>
  );
};

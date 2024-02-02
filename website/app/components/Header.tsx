import * as React from 'react';

import { classNames } from '@/lib/classNames';

import { GitHubLogoIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Flex, IconButton, Text, Tooltip } from '@radix-ui/themes';
import { Link as RemixLink, useLocation } from '@remix-run/react';

import styles from './Header.module.css';
import { useMobileMenuContext } from './MobileMenu';
import { ThemeToggle } from './ThemeToggle';
import { HeaderLink } from './HeaderLink';
import { Logo } from './Logo';
import { VersionToggle } from './VersionToggle';

export interface HeaderProps {
  children?: React.ReactNode;
  gitHubLink?: string;
  ghost?: boolean;
}

type ScrollState = 'at-top' | 'scrolling-up' | 'scrolling-down';

export function Header({ children, gitHubLink, ghost }: HeaderProps) {
  const mobileMenu = useMobileMenuContext();
  const location = useLocation();

  const [scrollState, setScrollState] = React.useState<ScrollState>('at-top');

  React.useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const direction =
        previousScrollY < window.scrollY ? 'scrolling-down' : 'scrolling-up';
      const state = window.scrollY < 30 ? 'at-top' : direction;
      previousScrollY = window.scrollY;
      setScrollState(state);
    };

    if (ghost) {
      addEventListener('scroll', handleScroll, { passive: true });
    } else {
      removeEventListener('scroll', handleScroll);
    }

    handleScroll();
    return () => removeEventListener('scroll', handleScroll);
  }, [ghost]);

  return (
    <div
      data-scroll-state={scrollState}
      data-mobile-menu-open={mobileMenu.open}
      className={classNames(styles.HeaderRoot, ghost ? styles.ghost : '')}
    >
      <div className={styles.HeaderInner}>
        <Flex
          display={{ xs: 'none' }}
          align="center"
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          pl="4"
        >
          <RemixLink to="/">
            <Logo />
            <Text style={{ fontSize: 'var(--font-size-4)' }}>React</Text>
            <Text weight="bold">DayPicker</Text>
          </RemixLink>
        </Flex>

        <Flex
          display={{ initial: 'none', xs: 'flex' }}
          align="center"
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          pl="4"
        >
          <RemixLink to="/">
            <Flex gap="3" align="center">
              <Logo />
              <Text size="5">
                React <b>DayPicker</b>
              </Text>
            </Flex>
          </RemixLink>
        </Flex>

        <div className={styles.HeaderLinksContainer}>
          <HeaderLink
            href="/"
            active={
              location.pathname === '/' || location.pathname.startsWith('/docs')
            }
          >
            Documentation
          </HeaderLink>
          <HeaderLink
            href="/api/index"
            active={
              location.pathname === '/api' ||
              location.pathname.startsWith('/api')
            }
          >
            API Reference
          </HeaderLink>
          <HeaderLink
            href="/playground"
            active={location.pathname.startsWith('/playground')}
          >
            Playground
          </HeaderLink>
          <HeaderLink
            href="/examples"
            active={location.pathname.startsWith('/examples')}
          >
            Examples
          </HeaderLink>
        </div>

        <Flex
          display={{ initial: 'none', md: 'flex' }}
          align="center"
          gap="4"
          position="absolute"
          top="0"
          bottom="0"
          right="0"
          pr="4"
        >
          {children}

          <VersionToggle />
          {gitHubLink && (
            <Tooltip content="View GitHub ">
              <IconButton asChild size="3" variant="ghost" color="gray">
                <a href={gitHubLink} target="_blank" rel="noreferrer">
                  <GitHubLogoIcon width="18" height="18" />
                </a>
              </IconButton>
            </Tooltip>
          )}
          <ThemeToggle />
        </Flex>

        <Flex
          display={{ md: 'none' }}
          align="center"
          gap="4"
          position="absolute"
          top="0"
          bottom="0"
          right="0"
          pr="4"
        >
          <div className={styles.HeaderThemeToggleContainer}>
            <ThemeToggle />
          </div>

          <Tooltip content="Navigation">
            <IconButton
              size="3"
              variant="ghost"
              color="gray"
              data-state={mobileMenu.open ? 'open' : 'closed'}
              onClick={() => mobileMenu.setOpen((open) => !open)}
              className={styles.MobileMenuButton}
            >
              <HamburgerMenuIcon width="18" height="18" />
            </IconButton>
          </Tooltip>
        </Flex>
      </div>
    </div>
  );
}

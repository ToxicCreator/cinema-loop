"use client"

import { useMemo, useState } from 'react';
import { Tooltip, UnstyledButton, Flex, rem } from '@mantine/core';
import {
  IconUser,
  IconSettings,
  IconLogout,
  IconLayoutList,
  IconMovie
} from '@tabler/icons-react';
import classes from './styles.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarLinkProps {
  icon: typeof IconUser;
  href: string;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink(props: NavbarLinkProps) {
  const {
    icon: Icon,
    href,
    label,
    active,
    onClick
  } = props;
  return (
    <Tooltip
      label={label}
      position="right"
      transitionProps={{ duration: 0 }}
    >
      <Link href={href}>
        <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </UnstyledButton>
      </Link>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconMovie, label: 'Loop', href: '/' },
  { icon: IconLayoutList, label: 'Playlists', href: '/playlists' },
  { icon: IconUser, label: 'Account', href: '/account' },
];

export function NavbarMinimal() {
  const currentPagePath = usePathname();

  const links = useMemo(() => mockdata.map((link) => {
    const active = currentPagePath === link.href;
    return (
      <NavbarLink
        {...link}
        key={link.href}
        active={active}
      />
    )
  }), [currentPagePath]);

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Flex
          justify="center"
          align="center"
          gap={{
            base: 12,
            sm: 8
          }}
          direction={{
            base: "row",
            sm: "column"
          }}
        >
          {links}
        </Flex>
      </div>

      <Flex
        justify="center"
        align="center"
        gap={{
          base: 12,
          sm: 8
        }}
        direction={{
          base: "row",
          sm: "column"
        }}
      >
        <NavbarLink
          icon={IconSettings}
          label="Settings"
          href="/settings"
          active={currentPagePath === '/settings'}
        />
        <Tooltip label="Logout" position="right" transitionProps={{ duration: 0 }}>
          <UnstyledButton className={classes.link}>
            <IconLogout style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
          </UnstyledButton>
        </Tooltip>
      </Flex>
    </nav>
  );
}

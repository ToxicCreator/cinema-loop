"use client"

import { useState } from 'react';
import { Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
  IconUser,
  IconSettings,
  IconLogout,
  IconLayoutList,
  IconMovie
} from '@tabler/icons-react';
import classes from './styles.module.css';
import Link from 'next/link';

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
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
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
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSettings} label="Settings" href="/settings" />
        <Tooltip label="Logout" position="right" transitionProps={{ duration: 0 }}>
          <UnstyledButton className={classes.link}>
            <IconLogout style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
          </UnstyledButton>
        </Tooltip>
      </Stack>
    </nav>
  );
}

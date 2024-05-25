import React from 'react';
import { MantineProvider, ColorSchemeScript, Flex } from '@mantine/core';
import { NavbarMinimal } from '@/widgets/navbar-minimal';
import { theme } from '../theme';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';


export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <NavbarMinimal />
          <Flex wrap="wrap" align="center" justify="center" ml={80} p={12}>
            {children}
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}

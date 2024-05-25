import React from 'react';
import { MantineProvider, ColorSchemeScript, Flex, em } from '@mantine/core';
import { NavbarMinimal } from '@/widgets/navbar-minimal';
import { theme } from '../theme';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { useMediaQuery } from '@mantine/hooks';


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
          <Flex
            wrap="wrap"
            align="center"
            justify="center"
            p={12}
            h="100vh"
            ml={{
              base: 0,
              sm: 80,
            }}
          >
            {children}
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}

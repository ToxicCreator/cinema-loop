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
          <Flex
            pos="relative"
            justify="center"
            p={24}
            mih={{
              base: 'calc(100vh - 80px)',
              sm: '100vh'
            }}
            ml={{
              base: 0,
              sm: 80,
            }}
            mb={{
              base: 80,
              sm: 0
            }}
          >
            {children}
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}

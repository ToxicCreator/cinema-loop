import { useState } from 'react';
import { TextInput, PasswordInput, Tooltip, Center, Text, rem, TooltipProps } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export function TooltipIcon(props: Omit<TooltipProps, 'children'> & { label: string; }) {
  const {label} = props;
  const rightSection = label && (
    <Tooltip
      label={label}
      position="top-end"
      withArrow
      transitionProps={{ transition: 'pop-bottom-right' }}
    >
      <Text component="div" c="dimmed" style={{ cursor: 'help' }}>
        <Center>
          <IconInfoCircle style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </Center>
      </Text>
    </Tooltip>
  );

  return (
    <TextInput
      rightSection={rightSection}
      placeholder="Your email"
      mt="md"
    />
  );
}

export function TooltipFocus() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const valid = value.trim().length >= 6;
  return (
    <Tooltip
      label={valid ? 'All good!' : 'Password must include at least 6 characters'}
      position="bottom-start"
      withArrow
      opened={opened}
      color={valid ? 'teal' : undefined}
      withinPortal
    >
      <PasswordInput
        label="Tooltip shown onFocus"
        required
        placeholder="Your password"
        onFocus={() => setOpened(true)}
        onBlur={() => setOpened(false)}
        mt="md"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </Tooltip>
  );
}

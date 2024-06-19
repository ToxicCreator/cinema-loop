"use client"
import { Button, Grid, Title} from '@mantine/core';
import { FloatingLabelInput } from '@/components/floating-label-input/FloatingLabelInput';
import { useUserStore } from '@/store/user';
import { useCallback, useMemo, useState } from 'react';


export default function AccountPage() {
  const userState = useUserStore();
  const [firstName, setFirstName] = useState(userState.firstName);
  const [middleName, setMiddleName] = useState(userState.middleName);
  const [lastName, setLastName] = useState(userState.lastName);
  const [phone, setPhone] = useState(userState.phone);
  const isNotChanged = useMemo(() => (
    firstName === userState.firstName
    && middleName === userState.middleName
    && lastName === userState.lastName
    && phone === userState.phone
  ), [userState, firstName, middleName, lastName, phone]);
  const handleSave = useCallback(() => {
    userState.updateFirstName(firstName);
    userState.updateMiddleName(middleName);
    userState.updateLastName(lastName);
    userState.changePhone(phone);
  }, [userState, firstName, middleName, lastName, phone]);
  return (
    <Grid grow maw={1024} p={24}>
      <Grid.Col span={12}>
        <Title order={1}>
          User Settings
        </Title>
      </Grid.Col>
      <Grid.Col span={{base: 8, sm: 4}}>
        <FloatingLabelInput
          label="First name"
          mt={32}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Grid.Col>
      {middleName && (
        <Grid.Col span={{base: 8, sm: 4}}>
          <FloatingLabelInput
            label="Middle name"
            mt={32}
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </Grid.Col>
      )}
      <Grid.Col span={{base: 8, sm: 4}}>
        <FloatingLabelInput
          label="Last name"
          mt={32}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <FloatingLabelInput
          label="Phone"
          mt={64}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Button w="100%" h={44} mt={32} disabled={isNotChanged} onClick={handleSave}>Save changes</Button>
      </Grid.Col>
    </Grid>
  );
}

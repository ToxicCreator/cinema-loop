"use client"
import { Grid} from '@mantine/core';
import { useState } from 'react';
import { FloatingLabelInput } from '@/components/floating-label-input/FloatingLabelInput';
import { TooltipIcon } from '@/components/input-tooltip/InputTooltip';


const user = {
  firstName: 'Александр',
  lastName: 'Болотов',
  middleName: 'Юрьевич',
  userName: '@ToxicCreator',
  accountType: 'Private',
  photo: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg',
  phone: '+7 (910) 234 85 71'

};


export default function AccountPage() {
  const { firstName, middleName, lastName, userName, photo, phone } = user;
  const [accountType, setAccountType] = useState(user.accountType);
  return (
    <Grid grow>
      <Grid.Col span={12}>
        <FloatingLabelInput label="First name" placeholder={firstName} />
        <FloatingLabelInput label="Middle name" placeholder={middleName} />
        <FloatingLabelInput label="Last name" placeholder={lastName} />
      </Grid.Col>
      <Grid.Col span={12}>
        <FloatingLabelInput label="Phone" placeholder={phone} />
      </Grid.Col>
      <Grid.Col span={12}>
        <TooltipIcon label="We will send a confirmation message to your email address" />
      </Grid.Col>
    </Grid>
  );
}

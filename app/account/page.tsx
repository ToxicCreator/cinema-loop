"use client"
import { Text, Group, Avatar, Grid, GridCol, Divider } from '@mantine/core';
import { IconAt, IconPhoneCall } from '@tabler/icons-react';
import styles from './styles.module.css';
import { GradientSegmentedControl } from '@/components/gradient-segment-control/GradientSegmentedControl';
import { useState } from 'react';
import { FloatingLabelInput } from '@/components/floating-label-input/FloatingLabelInput';


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
    <Grid p={12} w="100%" pr="12vw">
      <GridCol>
        <Group mt={16}>
          <Avatar
            src={photo}
            size={124}
            radius="md"
          />
          <div>
            <Text fz="h5" fw={700} c="dimmed">
              {userName}
            </Text>

            <Text fz="h2" fw={500} className={styles.name}>
              {firstName} {middleName} {lastName}
            </Text>

            <Group wrap="nowrap" gap={10} mt={5}>
              <IconPhoneCall stroke={1.5} size="1rem" className={styles.icon} />
              <Text fz="lg" c="dimmed">
                {phone}
              </Text>
            </Group>
          </div>
        </Group>
      
      </GridCol>
    </Grid>
  );
}

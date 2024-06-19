"use client"
import { Text, Group, Avatar, Grid, Title, Stack } from '@mantine/core';
import { IconPhoneCall } from '@tabler/icons-react';
import { useUserStore } from '@/store/user';
import styles from './styles.module.css';
import { StatsRing } from '@/widgets/stats-ring/StatsRing';
import { VideosPanel } from '@/widgets/videos-panel/VideosPanel';


export default function AccountPage() {
  const userState = useUserStore();
  const {
    firstName,
    middleName,
    lastName,
    userName,
    photo,
    phone
  } = userState;
  return (
    <Grid maw={1500}>
      <Grid.Col>
        <Title order={1}>
          Your Profile
        </Title>
      </Grid.Col>
      <Grid.Col mb="lg">
        <Group mt={32} gap={32} align="center">
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
      </Grid.Col>
      <Grid.Col>
        <Title order={2} mb={16}>
          Statistics:
        </Title>
        <StatsRing />
        <Title order={2} mt={32} mb={16}>
          Your videos:
        </Title>
        <VideosPanel />
      </Grid.Col>
    </Grid>
  );
}

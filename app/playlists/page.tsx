import { useMemo } from 'react';
import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Flex } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import styles from './styles.module.css';


const mockdata = [
  {
    id: '1',
    title: 'Top 10 places to visit in Norway this summer',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 18, 2022',
    viewed: '1 031 201',
  },
  {
    id: '2',
    title: 'Best forests to visit in North America',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 27, 2022',
    viewed: '31 023'
  },
  {
    id: '3',
    title: 'Hawaii beaches review: better than you think',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'September 9, 2022',
    viewed: '13 134'
  },
  {
    id: '4',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'September 12, 2022',
    viewed: '852'
  },
];


export default function Playlists() {
  const cards = useMemo(() => mockdata.map((article) => (
    <Card 
      key={article.id} 
      p="md" 
      radius="md" 
      component="a" 
      href={`/${article.id}`}
      className={styles.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      
      <Flex
        wrap="nowrap"
        align="center"
        direction="row"
        justify="space-between"
        mt="md"
      >
        <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
          {article.date}
        </Text>
        <Flex
          wrap="nowrap"
          align="center"
          direction="row"
          gap={8}
        >
          <IconEye size={16} />
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
            {article.viewed}
          </Text>
        </Flex>
      </Flex>
      <Text className={styles.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  )), []);

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}

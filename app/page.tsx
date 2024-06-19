"use client"

import { useEffect, useState } from 'react';
import { Flex, Skeleton } from '@mantine/core';
import { PlayerCarousel } from '@/widgets/player-carousels';


export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => setLoading(() => false), 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return (
    <Skeleton visible={loading} width="fit-content">
      <PlayerCarousel />
    </Skeleton>
  );
}

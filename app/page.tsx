"use client"

import { useEffect, useState } from 'react';
import { Flex, Skeleton } from '@mantine/core';
import { PlayerCarousel } from '@/widgets/player-carousels';


export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => setLoading((l) => !l), 500);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <PlayerCarousel />
  );
}

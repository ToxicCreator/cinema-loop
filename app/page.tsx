"use client"

import { useEffect, useState } from 'react';
import { Skeleton } from '@mantine/core';
import { PlayerCarousel } from '@/widgets/player-carousels';
import styles from './style.module.css';


export default function HomePage() {
  return (
    <PlayerCarousel className={styles.root} />
  );
}

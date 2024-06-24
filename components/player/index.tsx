"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Flex, Skeleton } from '@mantine/core';


const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export type PlayerProps = {
  url: string;
  playing: boolean;
}

export const Player = (props: PlayerProps) => {
  const {url, playing} = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => setLoading(() => false), 2500);
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return (
    <Skeleton visible={loading} w="100%" h="100%" radius={0}>
      <Flex w="100%" h="100%">
        <ReactPlayer
          width="100%"
          height="100%"
          url={url}
          loop={true}
          playing={playing}
          playsinline={true}
          muted={true}
          onReady={(e) => {
            const player = e.getInternalPlayer();
            player.mute();
          }}
        />
      </Flex>
    </Skeleton>
  );
}

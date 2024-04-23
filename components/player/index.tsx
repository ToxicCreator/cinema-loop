"use client"

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Flex } from '@mantine/core';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export type PlayerProps = {
  url: string;
  playing: boolean;
}

export const Player = (props: PlayerProps) => {
  const {url, playing} = props;
  const ref = useRef(null);
  return (
    <Flex ref={ref} justify="center" gap="xs" h="100%">
      <ReactPlayer
        url={url}
        height="100%" 
        loop={true}
        playing={playing}
        playsinline={true}
        volume={0}
        muted={true}
        onReady={(e) => {
          const player = e.getInternalPlayer();
          player.mute();
        }}
      />
    </Flex>
  );
}

const checkVisible = (
  target: any,
  visibleCallback: () => void,
  unvisibleCallback: () => void
) => {
  if (!target) return;
  // Все позиции элемента
  const targetPosition = {
    top: window.scrollY + target.getBoundingClientRect().top,
    bottom: window.scrollY + target.getBoundingClientRect().bottom
  },
  // Получаем позиции окна
  windowPosition = {
    top: window.scrollY,
    bottom: window.scrollY + document.documentElement.clientHeight
  };

  if (
    targetPosition.bottom <= windowPosition.bottom
    && targetPosition.top >= windowPosition.top
  ) { 
    // Если элемент полностью видно, то запускаем следующий код
    visibleCallback();
  } else {
    // Если элемент не видно, то запускаем этот код
    unvisibleCallback();
  };
};


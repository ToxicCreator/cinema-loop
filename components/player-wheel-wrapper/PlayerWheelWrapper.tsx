import { useCallback, useEffect, useRef, useState } from 'react';
import { Flex } from '@mantine/core';
import { Player, PlayerProps } from '@/components/player';
import throttle from '@/helpers/throttle';
import styles from './styles.module.css';


const WHEEL_DELAY = 1000;

type Props = PlayerProps & {
  scrollDown: () => void;
  scrollUp: () => void;
};

export function PlayerWheelWrapper(props: Props) {
  const {
    playing,
    scrollDown,
    scrollUp,
    ...restProps
  } = props;
  const [isPlaying, setPlaying] = useState(true);
  const handleWheel = useCallback(
    throttle(
      (e: React.WheelEvent) => {
        if (!isPlaying) setPlaying(true);
        // @ts-ignore
        if (e.nativeEvent.wheelDelta < 0) scrollDown();
        else scrollUp();
      },
      WHEEL_DELAY
  ), [isPlaying, scrollDown, scrollUp]);
  return (
    <Flex h="100%">
      <Player 
        {...restProps}
        playing={isPlaying && playing}
      />
      <div
        className={styles.scrollOverlay}
        onClick={() => setPlaying((prev) => !prev)}
        onWheelCapture={handleWheel}
      />
    </Flex>
  );
}

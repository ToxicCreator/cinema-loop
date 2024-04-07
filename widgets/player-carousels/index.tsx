"use client"

import { useCallback, useEffect, useRef, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { Player } from '@/components/player/inex';


const data = [
  {
    url: 'https://www.youtube.com/shorts/Itd0NF8sBkc'
  },
  {
    url: 'https://www.youtube.com/shorts/tli4d-JH5CM'
  }
];

export function PlayerCarousel() {
  const carouselRef = useRef();
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    // const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    // setScrollProgress(progress * 100);
  }, [embla]);

  // useEffect(() => {
  //   if (embla) {

  //     embla.on('scroll', handleScroll);
  //     handleScroll();
  //   }
  // }, [embla]);

  const slides = data.map((item) => (
    <Carousel.Slide key={item.url}>
      <Player url={item.url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      ref={carouselRef.current}
      slideGap="xs"
      height="100%"
      slideSize="90%"
      withControls={false}
      orientation="vertical"
      getEmblaApi={setEmbla}
    >
      {slides}
    </Carousel>
  );
}

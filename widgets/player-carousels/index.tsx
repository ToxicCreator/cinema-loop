"use client"

import { useCallback, useEffect, useRef, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Flex } from '@mantine/core';
import { Player } from '@/components/player';
import throttle from '@/helpers/throttle';
import { PlayerWheelWrapper } from '@/components/player-wheel-wrapper/PlayerWheelWrapper';


const data = [
  {
    url: 'https://www.youtube.com/shorts/Itd0NF8sBkc'
  },
  {
    url: 'https://www.youtube.com/shorts/tli4d-JH5CM'
  },
  {
    url: 'https://www.youtube.com/shorts/4GkPqDkgl-E?feature=share'
  }
];

export function PlayerCarousel() {
  const carouselRef = useRef();
  const [emblaApi, setEmblaApi] = useState<Embla | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlidesInView = useCallback(() => {
    if (!emblaApi) return;
    const slidesInView = emblaApi.slidesInView();
    if (slidesInView.length > 2) {
      setCurrentSlideIndex(slidesInView[1]);
    } else if (!emblaApi.canScrollNext()) {
      setCurrentSlideIndex(slidesInView[1]);
    } else {
      setCurrentSlideIndex(slidesInView[0]);
    }
  }, [emblaApi]);

  const handleScrollDown = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const handleScrollUp = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('settle', handleSlidesInView)
  }, [emblaApi]);

  const slides = data.map((item, index) => (
    <Carousel.Slide key={`${item.url}-${index}`}>
      <PlayerWheelWrapper
        url={item.url}
        playing={index === currentSlideIndex}
        scrollDown={handleScrollDown}
        scrollUp={handleScrollUp}
      />
    </Carousel.Slide>
  ));

  return (
    <Flex justify="center" gap="xs" h="100%">
      <Carousel
        ref={carouselRef.current}
        slideGap="lg"
        height="100%"
        slideSize="90%"
        withControls={false}
        orientation="vertical"
        getEmblaApi={setEmblaApi}
      >
        {slides}
      </Carousel>
    </Flex>
  );
}

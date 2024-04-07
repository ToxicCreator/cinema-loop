"use client"

import React from 'react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type Props = {
  url: string;
}

export const Player = (props: Props) => {
  const {url} = props;
  return (
    <ReactPlayer url={url} height="100%" />
  );
}

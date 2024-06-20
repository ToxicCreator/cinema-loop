import { create } from "zustand";
import { DEFAULT_VIDEOS } from "../values";

export type VideoData = {
    url: string;
    likes: number;
    views: number;
}

type VideoState = {
  videos: VideoData[];
}

export const useVideoStore = create<VideoState>((set) => ({
  videos: DEFAULT_VIDEOS,
}));

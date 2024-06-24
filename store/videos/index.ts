import { create } from "zustand";
import { DEFAULT_VIDEOS } from "../values";

export type VideoData = {
  url: string;
  likes: number;
  views: number;
}

type VideoState = {
  videos: VideoData[];
  uploadVideo: (url: string) => void;
}

export const useVideoStore = create<VideoState>((set) => ({
  videos: DEFAULT_VIDEOS,

  uploadVideo: (url: string) => set(
    (videosState) => {
      videosState.videos.push({
        url,
        likes: 0,
        views: 0
      })
      return videosState;
    }
  ),
}));

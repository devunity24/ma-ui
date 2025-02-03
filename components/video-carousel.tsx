"use client";

import { motion } from "framer-motion";
import { VideoCard } from "./video-card";

interface Video {
  title: string;
  thumbnail: string;
  views?: string;
  duration?: string;
  date?: string;
  time?: string;
  instructor?: string;
}

interface VideoCarouselProps {
  videos: Video[];
  type: "recorded" | "live";
}

export function VideoCarousel({ videos, type }: VideoCarouselProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {videos.map((video, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <VideoCard
            title={video.title}
            thumbnail={video.thumbnail}
            views={video.views}
            duration={video.duration}
            date={video.date}
            time={video.time}
            instructor={video.instructor}
            type={type}
          />
        </motion.div>
      ))}
    </div>
  );
}

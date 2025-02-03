"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Calendar, Clock } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Badge } from "@/components/ui/badge";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  views?: string;
  duration?: string;
  date?: string;
  time?: string;
  instructor?: string;
  type: "recorded" | "live";
}

export function VideoCard({
  title,
  thumbnail,
  views,
  duration,
  date,
  time,
  instructor,
  type,
}: VideoCardProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="w-12 h-12 text-white" />
        </div>
        {type === "live" && (
          <Badge
            variant="destructive"
            className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1"
          >
            LIVE
          </Badge>
        )}
        {duration && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        )}
      </div>
      <h3
        className={`font-semibold mb-1 group-hover:text-${
          theme === "orange" ? "orange" : "blue"
        }-500 transition-colors text-slate-900 line-clamp-2`}
      >
        {title}
      </h3>
      {type === "recorded" && views && (
        <p className="text-sm text-slate-600">{views} views</p>
      )}
      {type === "live" && (
        <div className="space-y-1">
          {instructor && (
            <p className="text-sm font-medium text-slate-700">{instructor}</p>
          )}
          {date && (
            <div className="flex items-center gap-1 text-sm text-slate-600">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
          )}
          {time && (
            <div className="flex items-center gap-1 text-sm text-slate-600">
              <Clock className="h-4 w-4" />
              <span>{time}</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

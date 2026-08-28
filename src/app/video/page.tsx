import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Video",
  description: "Selected video projects.",
};

interface VideoProject {
  title: string;
  href: string;
  thumbnail: string;
  date: string;
}

const videoData: VideoProject[] = [
  {
    title: "Pax Sanguinis",
    href: "https://x.com/vviszard/status/2069848547613426075",
    thumbnail: "/thumb-pax-sanguinis.jpg",
    date: "Jun 24, 2026",
  },
  {
    title: "Dazen Chen — A Short Thriller",
    href: "https://x.com/vviszard/status/2075662470392512684",
    thumbnail: "/thumb-dazen-chen.jpg",
    date: "Jul 11, 2026",
  },
  {
    title: "Charma — I Want to Remember",
    href: "https://x.com/vviszard/status/2077692859420213414",
    thumbnail: "/thumb-charma.jpg",
    date: "Jul 16, 2026",
  },
  {
    title: "Swift Like a Fish",
    href: "https://x.com/vviszard/status/2083493883720413281",
    thumbnail: "/thumb-swift-like-a-fish.png",
    date: "Aug 1, 2026",
  },
];

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-16 lg:px-24 pt-16 md:pt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videoData.map((video, index) => (
          <a
            key={index}
            href={video.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: "16/9" }}>
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover group-hover:opacity-70 transition-opacity duration-200"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <p className="mt-2 text-sm text-black text-center">
              {video.title}
            </p>
            <p className="text-xs text-gray-400 text-center">
              {video.date}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full md:-ml-[200px] md:w-[calc(100%+200px)]">
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 sm:px-12 md:px-16 lg:px-24 py-12 md:py-16">
        {/* Name - upper center (top third of viewport) */}
        <div className="pt-8 sm:pt-12 md:pt-16 flex justify-center items-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight text-center">
            Vishwas Paliwal
          </h1>
        </div>

        {/* Bottom section */}
        <div className="mt-auto pt-16 w-full">
          {/* Buttons raised higher and shifted right so Video button right edge aligns with tagline end */}
          <div className="flex gap-5 sm:gap-6 mb-12 sm:mb-14 pl-8 sm:pl-16 md:pl-24 lg:pl-28">
            <Link
              href="/writing"
              className="border-2 border-white text-white font-bold px-10 sm:px-12 py-4 text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-200 inline-block text-center"
            >
              Writing
            </Link>
            <Link
              href="/video"
              className="border-2 border-white text-white font-bold px-10 sm:px-12 py-4 text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-200 inline-block text-center"
            >
              Video
            </Link>
          </div>

          {/* Taglines side by side with top alignment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start w-full">
            <div>
              <p className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl max-w-lg leading-snug text-left">
                Writer with Visual Instincts.
              </p>
            </div>
            <div className="md:pl-8">
              <p className="text-white/90 font-extrabold text-2xl sm:text-3xl lg:text-4xl max-w-lg leading-snug text-left">
                A keen observer who loves to research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

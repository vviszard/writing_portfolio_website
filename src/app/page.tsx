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

      {/* Content — on mobile: cohesive vertically centered group; on desktop: top name + bottom-anchored content */}
      <div className="relative z-10 flex flex-col justify-center md:justify-between min-h-screen px-6 sm:px-12 md:px-16 lg:px-24 pt-16 pb-12 md:py-16">
        {/* Name */}
        <div className="md:pt-16 flex justify-center items-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight text-center">
            Vishwas Paliwal
          </h1>
        </div>

        {/* Buttons & Taglines: on mobile sits immediately below name with small gaps; on desktop pins to bottom */}
        <div className="mt-6 md:mt-auto md:pt-16 w-full flex flex-col items-center md:items-start">
          {/* Buttons */}
          <div className="flex gap-3 sm:gap-6 mb-6 md:mb-14 justify-center md:justify-start md:pl-24 lg:pl-28">
            <Link
              href="/writing"
              className="border-2 border-white text-white font-bold px-6 sm:px-10 md:px-12 py-2.5 sm:py-4 text-sm sm:text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-200 inline-block text-center"
            >
              Writing
            </Link>
            <Link
              href="/video"
              className="border-2 border-white text-white font-bold px-6 sm:px-10 md:px-12 py-2.5 sm:py-4 text-sm sm:text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-200 inline-block text-center"
            >
              Video
            </Link>
          </div>

          {/* Taglines: stacked on mobile, 2-column grid on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-16 items-start w-full text-center md:text-left">
            <div>
              <p className="text-white font-extrabold text-base sm:text-xl md:text-3xl lg:text-4xl max-w-lg leading-snug mx-auto md:mx-0">
                Writer with Visual Instincts.
              </p>
            </div>
            <div className="md:pl-8">
              <p className="text-white/90 font-extrabold text-base sm:text-xl md:text-3xl lg:text-4xl max-w-lg leading-snug mx-auto md:mx-0">
                A keen observer who loves to research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bio",
  description: "About Vishwas Paliwal.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-16 lg:px-24 pt-16 md:pt-12">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
        {/* Portrait */}
        <div className="w-full md:w-[55%] flex-shrink-0">
          <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-[600px] lg:h-[700px]">
            <Image
              src="/portrait.jpg"
              alt="Vishwas Paliwal"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
              priority
            />
          </div>
        </div>

        {/* Bio text */}
        <div className="w-full md:w-[45%]">
          <h2 className="text-4xl font-bold text-black mb-6">Hi</h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-black">
            <p>
              Hey there! I am Vishwas Paliwal, also known online by the
              pseudonym &apos;vviszard&apos;, pronounced exactly the same as wizard.
            </p>
            <p>
              I have been writing since I was 15, and have been posting online
              for the last 4 years. A large portion of my writing includes short
              fiction and poetry, though I have written many different kinds of
              stories with various settings and voices.
            </p>
            <p>
              The main motivation behind my writing has always been the
              underlying tension and rift within the human conscience and the
              erratic but normalized behavior of human society.
            </p>
            <p>
              All this time while writing, I have tried various other hobbies as
              well, such as cardistry and later AI filmmaking, which developed my
              visual instincts. The videos here showcase my projects in the
              field.
            </p>
            <p>
              On the academic side, I am an electronics and communication
              engineering undergrad in my final year. I have ghostwritten many
              pieces of technical writing in college magazines and possess the
              necessary understanding of the engineering concepts.
            </p>
            <p>
              Please feel free to navigate through the website and go through my
              work listed.
            </p>
            <p>
              For commissions or just conversations, please contact me on my
              socials. X is where I respond the quickest :)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

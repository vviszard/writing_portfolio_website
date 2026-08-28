import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Selected articles and essays.",
};

interface Article {
  publication: string;
  title: string;
  href: string;
  date: string;
}

interface YearGroup {
  year: number;
  articles: Article[];
}

const writingData: YearGroup[] = [
  {
    year: 2026,
    articles: [
      {
        publication: "Medium",
        title: "The Flower of Life",
        href: "https://vviszard.medium.com/the-flower-of-life-0a9f85ab031f",
        date: "Aug 27, 2026",
      },
      {
        publication: "Medium",
        title: "The Making of Pax Sanguinis",
        href: "https://vviszard.medium.com/the-making-of-pax-sanguinis-47df01c667ff",
        date: "Jun 24, 2026",
      },
      {
        publication: "Medium",
        title: "Mon Luani",
        href: "https://vviszard.medium.com/mon-luani-12f135c2d3c8",
        date: "May 2, 2026",
      },
    ],
  },
  {
    year: 2025,
    articles: [
      {
        publication: "Medium",
        title:
          "An Invitation to Fathomless Incertitude — A Short Story (Part 2)",
        href: "https://vviszard.medium.com/an-invitation-to-fathomless-incertitude-a-short-story-part-2-9237eb1f65f1",
        date: "Apr 18, 2025",
      },
      {
        publication: "Medium",
        title:
          "An Invitation to Fathomless Incertitude — A Short Story (Part 1)",
        href: "https://vviszard.medium.com/an-invitation-to-fathomless-incertitude-a-short-story-part-1-23ab5c761c60",
        date: "Apr 18, 2025",
      },
    ],
  },
  {
    year: 2024,
    articles: [
      {
        publication: "Medium",
        title: "A Special Case of Dr. Trey",
        href: "https://vviszard.medium.com/a-special-case-of-dr-trey-d33f263cbd28",
        date: "Aug 23, 2024",
      },
    ],
  },
  {
    year: 2023,
    articles: [
      {
        publication: "Medium",
        title: "He Who Knew Sky — A Short Story",
        href: "https://vviszard.medium.com/he-who-knew-sky-a-short-story-4d362c37a588",
        date: "Aug 19, 2023",
      },
    ],
  },
];

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-16 lg:px-24 pt-16 md:pt-12">
      {writingData.map((group) => (
        <section key={group.year} className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">{group.year}</h2>
          <div className="flex flex-col gap-4">
            {group.articles.map((article, index) => (
              <p key={index} className="text-base leading-relaxed flex flex-wrap items-baseline gap-x-2">
                <span className="text-black">{article.publication}</span>
                <span className="text-gray-400">|</span>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:underline"
                >
                  {article.title}
                </a>
                <span className="text-xs text-gray-400">{article.date}</span>
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

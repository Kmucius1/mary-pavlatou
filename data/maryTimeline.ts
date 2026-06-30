export type SlideImage = {
  src: string;
  alt: string;
  mode: "portrait" | "full-body" | "clipping" | "landscape";
  caption?: string;
};

export type TimelineSlide = {
  id: string;
  roman: string;
  greekPhrase: string;
  title: string;
  dateLabel: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
  images: SlideImage[];
};

export const timelineSlides: TimelineSlide[] = [
  {
    id: "i",
    roman: "I",
    greekPhrase: "Τα Ονόματά της",
    title: "The Names She Carried",
    dateLabel: "Family Archive",
    text: "Mary Pavlatou was the name the world came to know — and the name her family carries with pride. Dedicated by her sons: the one they call God's Special Angel.",
    ctaLabel: "Read Her Story",
    ctaHref: "/story",
    images: [
      { src: "/images/mary-young-portrait.jpg", alt: "Mary Pavlatou — Colorized young portrait, family archive", mode: "portrait", caption: "From the family archive" },
    ],
  },
  {
    id: "ii",
    roman: "II",
    greekPhrase: "Η Τέχνη του Μανεκέν",
    title: "The First Greek Certified Mannequin",
    dateLabel: "Chicago · Athens",
    text: "At the Patricia Vance School of Fashion in Chicago, Mary studied the art of the μανεκέν — posture, movement, and presence as a living language. She returned to Greece as the first certified professional mannequin her country had ever known.",
    ctaLabel: "World of Fashion",
    ctaHref: "/fashion",
    images: [
      { src: "/images/mary-veil-hat.jpg", alt: "Mary Pavlatou — Colorized close-up portrait with veil hat and pearl necklace", mode: "portrait", caption: "Mary Pavlatou · Preserved from the family archive" },
    ],
  },
  {
    id: "iii",
    roman: "III",
    greekPhrase: "Αθήνα",
    title: "The Σαλόνια of Athens",
    dateLabel: "Athens · 1950s",
    text: "The great οίκοι μόδας of Athens — ETAM, Halifa, Tsitsopoulos, Archontaki-Kallergi — knew her by name. Their επιδείξεις at the Grande Bretagne and the King George were the most celebrated salons in the city.",
    ctaLabel: "View Archive",
    ctaHref: "/archive",
    images: [
      { src: "/images/book-clipping-etam-miss-mary.png", alt: "Miss Mary Pavlatou — ETAM press clipping, Apogevmatini newspaper", mode: "clipping", caption: "From the Apogevmatini · Original Greek press" },
    ],
  },
  {
    id: "iv",
    roman: "IV",
    greekPhrase: "Επίδειξις Μόδας",
    title: "On the Runway",
    dateLabel: "Grande Bretagne · King George",
    text: "Under the chandeliers of Athens' finest hotels, Mary presented the season's collections — from ermine fur coats at the Grande Bretagne to summer day dresses at the King George. Her presence on the πασαρέλα was unmistakable.",
    ctaLabel: "Explore This Chapter",
    ctaHref: "/fashion",
    images: [
      { src: "/images/mary-runway-blue.jpg", alt: "Mary Pavlatou — Blue ball gown on runway, colorized archival photograph", mode: "full-body", caption: "Mary Pavlatou · Live runway presentation · Colorized by Mary James" },
    ],
  },
  {
    id: "v",
    roman: "V",
    greekPhrase: "Αιωνία η Μνήμη",
    title: "A Lasting Legacy",
    dateLabel: "Preserved by Love",
    text: "Her sons kept the photographs, clippings, and memories safe for decades. Through The Pulos Brothers' compilation and Mary James's restoration and book design, Mary's story was brought back into the light where it belongs.",
    ctaLabel: "Enter the Archive",
    ctaHref: "/archive",
    images: [
      { src: "/images/mary-glamour-portrait.jpg", alt: "Mary Pavlatou — Glamour portrait, colorized from the family archive", mode: "portrait", caption: "In her eternal memory" },
    ],
  },
];

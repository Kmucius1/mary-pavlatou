export type SlideImage = {
  src: string;
  alt: string;
  mode: "portrait" | "full-body" | "clipping" | "landscape";
  caption?: string;
  /** Historical source / provenance of the image, shown alongside the caption when present. */
  source?: string;
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
  /**
   * Set to false to keep a chapter in the data structure without showing it
   * publicly — used for chapters awaiting approved copy (e.g. Chapter VII).
   * Defaults to published when omitted.
   */
  published?: boolean;
};

export const timelineSlides: TimelineSlide[] = [
  {
    id: "i",
    roman: "I",
    greekPhrase: "Τα Ονόματά της",
    title: "The Names She Carried",
    dateLabel: "Family Archive",
    text: "Mary Pavlatou was the name the world came to know — and the name her family carries with pride. Dedicated by her three sons: the one they call God's Special Angel.",
    ctaLabel: "Read Her Story",
    ctaHref: "/story",
    images: [
      { src: "/images/mary-archive-headline-profile.png", alt: "Newspaper feature headlined \"Mary Pavlatou\" — profile piece, family archive", mode: "clipping", caption: "From the family archive" },
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
      { src: "/images/mary-archive-veil-hat-cropped.png", alt: "Mary Pavlatou — Colorized close-up portrait with veil hat and pearl necklace", mode: "portrait", caption: "Mary Pavlatou · Preserved from the family archive" },
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
      { src: "/images/mary-archive-runway-named.png", alt: "Newspaper clipping — \"the mannequin Mary Pavlatou demonstrates\" a patterned summer dress on the showroom floor, Athens salons", mode: "full-body", caption: "Mary Pavlatou · Athens · From the family archive" },
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
      { src: "/images/mary-archive-colorized-cream-hat-portrait.png", alt: "Mary Pavlatou — Colorized close-up portrait, cream hat with flowers and pearl choker", mode: "portrait", caption: "Mary Pavlatou · Live runway presentation", source: "Colorized from the family archive" },
    ],
  },
  {
    id: "v",
    roman: "V",
    greekPhrase: "Αιωνία η Μνήμη",
    title: "A Lasting Legacy",
    dateLabel: "Preserved by Love",
    text: "Her three sons kept the photographs, clippings, and memories safe for decades. Through The Pulos Brothers' compilation and careful restoration, Mary's story was brought back into the light where it belongs.",
    ctaLabel: "Enter the Archive",
    ctaHref: "/archive",
    images: [
      // TODO: Replace Chapter V image with the approved family photograph.
      // No new approved photo was found in public/images as of this update —
      // the existing archival image below remains in place until one is supplied.
      { src: "/images/mary-archive-blue-gown-cropped.png", alt: "Mary Pavlatou — Blue ball gown on runway, colorized archival photograph", mode: "full-body", caption: "In her eternal memory", source: "From the family archive" },
    ],
  },
  {
    // Chapter VI — reserved for the family's approved continuation of Mary's
    // story. No approved title or copy has been supplied yet, so this
    // chapter is kept out of the public interface (published: false) rather
    // than shipped with placeholder text.
    // TODO: Insert approved Chapter VI title and historical copy.
    id: "vi",
    roman: "VI",
    greekPhrase: "",
    title: "",
    dateLabel: "",
    text: "",
    ctaLabel: "Enter the Archive",
    ctaHref: "/archive",
    images: [],
    published: false,
  },
  {
    // Chapter VII — see Chapter VI note above.
    // TODO: Insert approved Chapter VII title and historical copy.
    id: "vii",
    roman: "VII",
    greekPhrase: "",
    title: "",
    dateLabel: "",
    text: "",
    ctaLabel: "Enter the Archive",
    ctaHref: "/archive",
    images: [],
    published: false,
  },
];

/** Chapters actually shown on the site — hides drafts awaiting approved copy. */
export const publishedTimelineSlides = timelineSlides.filter((s) => s.published !== false);

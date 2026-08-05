export type HistoricalNote = {
  /** 1–51, matching the family's numbered set of historical notes. */
  number: number;
  title: string;
  /** Date or historical period the note refers to, e.g. "Athens, 1954". */
  period: string;
  originalLanguage: string;
  originalText: string;
  englishTranslation: string;
  /** Source or archive reference (publication, box/page number, etc.). */
  source: string;
  relatedMedia?: { src: string; alt: string };
  historicalContext: string;
  translationNotes?: string;
};

/**
 * TODO: Populate with the family's 51 historical notes once supplied.
 * Do not add placeholder or fabricated entries here — HistoricalNotes.tsx
 * renders nothing on the public site while this array is empty, so an
 * empty array is the correct state until real note content is provided.
 */
export const historicalNotes: HistoricalNote[] = [];

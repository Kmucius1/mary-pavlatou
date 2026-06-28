import type { Metadata } from "next";
import type { CSSProperties } from "react";
import ChapterNav from "@/components/ChapterNav";
import SafeImage from "@/components/SafeImage";
import GreekDivider from "@/components/GreekDivider";
import QuoteReveal from "@/components/QuoteReveal";

export const metadata: Metadata = {
  title: "Her Story — Mary Pavlatou Memorial Archive",
  description:
    "The life of Mary Pavlatou — first Greek certified professional fashion model, from Athens to Paris, New York, and beyond. Told in ten chapters.",
};

const CHAPTERS = [
  { id: "chapter-i", number: "I", label: "The Names She Carried" },
  { id: "chapter-ii", number: "II", label: "A Daughter of Greece" },
  { id: "chapter-iii", number: "III", label: "Ahead of Her Time" },
  { id: "chapter-iv", number: "IV", label: "Chicago" },
  { id: "chapter-v", number: "V", label: "The First Greek" },
  { id: "chapter-vi", number: "VI", label: "Athens Recognizes Her" },
  { id: "chapter-vii", number: "VII", label: "Across Continents" },
  { id: "chapter-viii", number: "VIII", label: "The Sound Before She Walked" },
  { id: "chapter-ix", number: "IX", label: "The Dream of Family" },
  { id: "chapter-x", number: "X", label: "Eternal Memory" },
];

function ChapterHeader({
  number,
  title,
  greek,
  centered = false,
}: {
  number: string;
  title: string;
  greek: string;
  centered?: boolean;
}) {
  const align = centered ? "center" : "left";
  return (
    <div style={{ marginBottom: "clamp(28px,4vh,48px)", textAlign: align }}>
      <span
        className="font-display"
        style={{
          display: "block",
          fontSize: "24px",
          letterSpacing: "0.55em",
          color: "rgba(245,208,80,0.65)",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        {number}
      </span>
      <h2
        className="font-display"
        style={{
          color: "#f5d050",
          fontSize: "clamp(36px,2.4vw,30px)",
          letterSpacing: "0.15em",
          fontWeight: 400,
          lineHeight: 1.15,
          marginBottom: "10px",
        }}
      >
        {title}
      </h2>
      <p
        className="font-serif"
        style={{
          color: "rgba(245,208,80,0.78)",
          fontSize: "28px",
          letterSpacing: "0.18em",
          fontStyle: "italic",
          marginBottom: "22px",
        }}
      >
        {greek}
      </p>
      <div
        style={{
          width: "56px",
          height: "1px",
          background: "rgba(245,208,80,0.74)",
          margin: centered ? "0 auto" : "0",
        }}
      />
    </div>
  );
}

const body: CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(34px,1.35vw,18px)",
  lineHeight: 1.85,
  color: "rgba(245,240,232,0.82)",
  marginBottom: "22px",
};

const hi: CSSProperties = { color: "#f8e060" };

const sectionPad: CSSProperties = {
  paddingBottom: "clamp(72px,10vh,120px)",
};

function Divider({ variant }: { variant?: "star" | "diamond" | "line" | "minimal" }) {
  return (
    <div style={{ marginBottom: "0" }}>
      <GreekDivider variant={variant ?? "diamond"} />
    </div>
  );
}

export default function StoryPage() {
  return (
    <div style={{ backgroundColor: "#09080a", color: "rgba(245,240,232,0.82)" }}>

      {/* ── PAGE HEADER ── */}
      <div
        style={{
          padding:
            "clamp(72px,9vh,110px) clamp(28px,6vw,80px) clamp(36px,4vh,56px)",
          borderBottom: "1px solid rgba(245,208,80,0.84)",
        }}
      >
        <p
          className="font-display"
          style={{
            color: "rgba(245,208,80,0.82)",
            fontSize: "24px",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Mary Pavlatou
        </p>
        <h1
          className="font-display"
          style={{
            color: "#f5d050",
            fontSize: "clamp(36px,3.2vw,42px)",
            letterSpacing: "0.15em",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: "10px",
          }}
        >
          Her Story
        </h1>
        <p
          className="font-serif"
          style={{
            color: "rgba(245,208,80,0.74)",
            fontSize: "28px",
            letterSpacing: "0.2em",
            fontStyle: "italic",
            marginBottom: "22px",
          }}
        >
          Η Ζωή της Μαρίας
        </p>
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(245,208,80,0.5)",
            marginBottom: "28px",
          }}
        />
        <p
          className="font-serif"
          style={{
            color: "rgba(245,240,232,0.45)",
            fontSize: "clamp(36px,1.2vw,16px)",
            lineHeight: 1.75,
            maxWidth: "540px",
            fontStyle: "italic",
          }}
        >
          The story of a woman who walked between worlds — Athens and Paris,
          fashion and family, beauty and discipline. Told in ten chapters.
        </p>
      </div>

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div
        style={{
          display: "flex",
          gap: "48px",
          alignItems: "flex-start",
          padding:
            "clamp(64px,9vh,100px) clamp(28px,6vw,80px) clamp(64px,9vh,120px)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* LEFT: Sticky chapter navigation */}
        <ChapterNav chapters={CHAPTERS} />

        {/* RIGHT: All ten chapters */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* ══════════════════════════════════════
              CHAPTER I — The Names She Carried
          ══════════════════════════════════════ */}
          <section id="chapter-i" style={sectionPad}>
            <ChapterHeader
              number="Chapter I"
              title="The Names She Carried"
              greek="Τα Ονόματά Της"
            />

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
              <div style={{ flex: 1 }}>
                <p style={body}>
                  She was known to the world by three names. Each belonged to a
                  different chapter of her life. Together, they tell the whole
                  story.
                </p>
                <p style={body}>
                  <em style={hi}>Mary Pavlatou</em> was her stage name — the
                  name that fashion knew, the name printed in programs and
                  announced in the great hotels and theatres of Athens. It was
                  the name that traveled with her to Paris, Milan, New York, and
                  Chicago. It was the name that became a signature.
                </p>
                <p style={body}>
                  <em style={hi}>Maria Metaxas Mariatou</em> was her maiden
                  name — her Greek heritage, her family line, the identity formed
                  before the runway and the couture houses. It carries the weight
                  of a culture that shaped her long before the world discovered
                  her.
                </p>
                <p style={body}>
                  <em style={hi}>Maria Pulos</em> was her married name — the
                  name of the family she built, the name her sons carry. It
                  represents the life she chose when the runway years were behind
                  her: the family she had always dreamed of, built with the same
                  devotion she brought to every performance.
                </p>
                <p style={{ ...body, marginBottom: 0 }}>
                  Each name tells a chapter of her life. Together they tell the
                  whole.
                </p>
              </div>

              <div style={{ flexShrink: 0, width: "100%", maxWidth: "300px" }}>
                <SafeImage
                  src="/images/mary-young-portrait.jpg"
                  alt="Mary Pavlatou — The Young Model"
                  mode="portrait"
                  width={900}
                  height={1660}
                  caption="Mary Pavlatou · The Young Model · Athens"
                  priority
                />
              </div>
            </div>
          </section>

          <Divider variant="diamond" />

          {/* ══════════════════════════════════════
              CHAPTER II — A Daughter of Greece
          ══════════════════════════════════════ */}
          <section id="chapter-ii" style={sectionPad}>
            <ChapterHeader
              number="Chapter II"
              title="A Daughter of Greece"
              greek="Κόρη της Ελλάδας"
            />

            <p style={body}>
              Mary was shaped by a Greece that prized grace, intellect, and
              strength in equal measure. Her heritage was the foundation upon
              which everything else was built — the discipline, the poise, the
              command of a room that would later make her the most recognized
              face in Athenian fashion.
            </p>
            <p style={body}>
              The family archive speaks of deep roots and an unbroken inheritance
              of character. Faith and family were not background details in her
              story — they were the architecture of her life, the invisible
              structure beneath the visible beauty.
            </p>
            <p style={body}>
              Greece in her era demanded much from young women who aspired to
              something beyond the ordinary. To rise as she rose required not
              only talent but the kind of sustained excellence that comes from a
              formed character — a self that knows what it is before the world
              begins to define it.
            </p>
            <p style={{ ...body, marginBottom: 0 }}>
              The family archive remembers her as a child of extraordinary
              character — formed by heritage, faith, and a culture that asked
              excellence from its daughters. She was that daughter. She answered
              the call.
            </p>
          </section>

          <Divider variant="star" />

          {/* ══════════════════════════════════════
              CHAPTER III — A Young Woman Ahead of Her Time
          ══════════════════════════════════════ */}
          <section id="chapter-iii" style={sectionPad}>
            <ChapterHeader
              number="Chapter III"
              title="A Young Woman Ahead of Her Time"
              greek="Γυναίκα Μπροστά από την Εποχή Της"
            />

            <p style={body}>
              Before she ever walked a runway, Mary Pavlatou had already mastered
              disciplines that most people never attempt. Her family remembered
              her as a true Renaissance woman — an identity earned not by
              reputation but by achievement across a breadth of fields that was,
              by any measure, extraordinary.
            </p>
            <p style={body}>
              She received awards in{" "}
              <em style={hi}>
                dance, music, art, writing, oratory, academia, and sport
              </em>
              . Each was not a passing interest but a domain of genuine
              excellence. She spoke several languages with fluency. She earned
              advanced university degrees. She was offered roles in film,
              television, and theatre — and she carried herself through all of it
              with the same measured grace.
            </p>
            <p style={body}>
              The portrait that history preserved was always the most visible
              one: the fashion model, the mannequin, the woman in the lights. But
              that portrait was only the beginning. Behind it was a person of
              exceptional depth — an intellect, a student, an artist, an athlete
              — who happened also to be one of the most beautiful women in
              Athens.
            </p>
            <p style={{ ...body, marginBottom: "40px" }}>
              Fashion was the world that saw her most clearly. But it was never
              the whole of who she was.
            </p>

            <QuoteReveal
              quote="She received awards in dance, music, art, writing, oratory, academia, and sport. She was offered roles in film, television, and theatre. The portrait is only the beginning."
              greek="Γυναίκα της Αναγέννησης"
            />
          </section>

          <Divider variant="diamond" />

          {/* ══════════════════════════════════════
              CHAPTER IV — Chicago and the Discipline of Fashion
          ══════════════════════════════════════ */}
          <section id="chapter-iv" style={sectionPad}>
            <ChapterHeader
              number="Chapter IV"
              title="Chicago and the Discipline of Fashion"
              greek="Σικάγο και η Τέχνη της Μόδας"
            />

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
              <div style={{ flex: 1 }}>
                <p style={body}>
                  At the{" "}
                  <em style={hi}>Patricia Vance School of Fashion</em> in
                  Chicago, Mary studied not how to pose, but how to move.
                  The school's philosophy was precise: modeling was not a matter
                  of beauty alone. It was a discipline of science, art, and
                  psychological understanding.
                </p>
                <p style={body}>
                  Patricia Vance understood that the best models were not simply
                  attractive women who could wear clothes. They were performers
                  — technically trained, physically disciplined, psychologically
                  attuned to their audience. Every angle, every pause, every turn
                  communicated something. Nothing was accidental. Nothing was
                  improvised.
                </p>
                <p style={body}>
                  The mannequin, properly trained, communicated through every
                  line of the body. The way a dress moved depended on the way its
                  wearer moved. The way an audience received a garment depended
                  on whether the woman presenting it understood — completely and
                  technically — what she was doing and why.
                </p>
                <p style={{ ...body, marginBottom: 0 }}>
                  For Mary, this matched what she already knew. A woman who had
                  studied dance, music, and art — who had trained her body and
                  her mind across multiple disciplines — understood intuitively
                  what Vance taught explicitly: that physical performance at the
                  highest level requires the whole person. Grace is not given. It
                  is built.
                </p>
              </div>

              <div style={{ flexShrink: 0, width: "100%", maxWidth: "300px" }}>
                <SafeImage
                  src="/images/mary-veil-hat.jpg"
                  alt="The Trained Mannequin — Chicago"
                  mode="portrait"
                  width={900}
                  height={1660}
                  caption="The Trained Mannequin · Chicago"
                />
              </div>
            </div>
          </section>

          <Divider variant="minimal" />

          {/* ══════════════════════════════════════
              CHAPTER V — The First Greek Certified Mannequin
          ══════════════════════════════════════ */}
          <section id="chapter-v" style={sectionPad}>
            <ChapterHeader
              number="Chapter V"
              title="The First Greek Certified Mannequin"
              greek="Η Πρώτη Ελληνίδα"
            />

            <p style={body}>
              Mary Pavlatou became the first Greek woman to earn an official
              certified diploma as a professional mannequin — a credential earned
              through rigorous study at the Patricia Vance School of Fashion in
              Chicago, where modeling was treated as a discipline of science, art,
              and psychological understanding.
            </p>
            <p style={body}>
              This was not simply a personal achievement. It was a{" "}
              <em style={hi}>historic first</em>.
            </p>
            <p style={body}>
              She returned to Greece carrying a standard that no Greek model had
              carried before. The distinction mattered beyond the credential
              itself. It established that a Greek woman could hold her place in an
              international fashion world that had not, until then, made room for
              her in this way.
            </p>
            <p style={body}>
              The fashion world of the postwar era was a world of gatekeepers.
              Paris set the standard. The great houses — Dior, Givenchy, Fath,
              Balmain, Nina Ricci — defined what excellence looked like, and they
              defined it on a particular axis. For a Greek woman to enter that
              world carrying a formal credential was an act of both skill and
              determination.
            </p>
            <p style={body}>
              She had earned it through the same path the world's most disciplined
              mannequins had taken — and she had done it first. That firstness
              was not a technicality. It was an opening. It proved that the door
              could be walked through, that the credential could be earned, that
              the world of international fashion was not closed to a Greek woman
              who was willing to do the work.
            </p>
            <p style={{ ...body, marginBottom: "40px" }}>
              She did not simply enter. She was recognized.
            </p>

            <QuoteReveal
              quote="She was the first Greek certified professional fashion model — a distinction earned through formal training, not simply talent."
              greek="Η Πρώτη · The First"
            />
          </section>

          <Divider variant="star" />

          {/* ══════════════════════════════════════
              CHAPTER VI — Athens Recognizes Her
          ══════════════════════════════════════ */}
          <section id="chapter-vi" style={sectionPad}>
            <ChapterHeader
              number="Chapter VI"
              title="Athens Recognizes Her"
              greek="Η Αθήνα την Αναγνωρίζει"
            />

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
              <div style={{ flex: 1 }}>
                <p style={body}>
                  Athens came to know her as the finest mannequin the city had
                  seen. She appeared in fashion exhibitions, television
                  presentations, and every prestige event the Athenian fashion
                  world offered. She became — by any honest account — the
                  best-known mannequin in Athens, one of the very best.
                </p>
                <p style={body}>
                  The fashion houses she represented read like a directory of
                  Athenian couture:{" "}
                  <em style={hi}>
                    ETAM, Vogue, Eleni Mallidou, Stantzos, Halifa, Tsitsopoulos
                    Brothers, Archontaki-Kallergi, Filioskos, Antoniadou
                  </em>
                  . Each was a name that mattered. Together, they represented
                  the full landscape of Greek fashion at its most serious.
                </p>
                <p style={body}>
                  The best-known addresses in the city —{" "}
                  <em style={hi}>
                    Hotel Grande Bretagne, King George Hotel, Mousouris Theatre,
                    Attic Club
                  </em>{" "}
                  — all knew her name. These were the venues where Athenian
                  society gathered, where fashion was displayed as a form of
                  culture, where what a woman wore and how she moved communicated
                  something to everyone in the room.
                </p>
                <p style={{ ...body, marginBottom: 0 }}>
                  In those rooms, Mary Pavlatou was the woman everyone watched.
                  She appeared in fashion exhibitions and television
                  presentations — the new medium through which Greece was
                  beginning to see itself — and she was always the standard
                  against which others were measured.
                </p>
              </div>

              <div style={{ flexShrink: 0, width: "100%", maxWidth: "280px" }}>
                <SafeImage
                  src="/images/mary-runway-blue.jpg"
                  alt="On the Runway — Athens"
                  mode="full-body"
                  width={900}
                  height={1660}
                  caption="On the Runway · Athens"
                />
              </div>
            </div>
          </section>

          <Divider variant="diamond" />

          {/* ══════════════════════════════════════
              CHAPTER VII — Across Continents
          ══════════════════════════════════════ */}
          <section id="chapter-vii" style={sectionPad}>
            <ChapterHeader
              number="Chapter VII"
              title="Across Continents"
              greek="Σε Όλο τον Κόσμο"
            />

            {/* Image left, text right */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
              <div style={{ flexShrink: 0, width: "100%", maxWidth: "280px" }}>
                <SafeImage
                  src="/images/mary-white-gown.jpg"
                  alt="Haute Couture — International"
                  mode="full-body"
                  width={900}
                  height={1660}
                  caption="Haute Couture · International"
                />
              </div>

              <div style={{ flex: 1 }}>
                <p style={body}>
                  Her story did not stop at the Greek border. Her career moved
                  through the fashion capitals of the postwar era —{" "}
                  <em style={hi}>Athens, Paris, Milan, New York, Chicago</em> —
                  connecting her to the most celebrated names in couture.
                </p>
                <p style={body}>
                  The fashion houses she was associated with across the
                  international stage —{" "}
                  <em style={hi}>
                    Christian Dior, Hubert de Givenchy, Jacques Fath, Pierre
                    Balmain, Nina Ricci
                  </em>{" "}
                  — were the houses that defined the postwar silhouette. To carry
                  their designs was to participate in the most consequential
                  conversation in the world of fashion.
                </p>
                <p style={body}>
                  Each city in her trajectory had its own character. Athens was
                  where she was celebrated as the finest of her time. Paris was
                  the center of the world she had entered. Milan was structure and
                  line. New York was the American axis of the international
                  fashion conversation. Chicago was where her formal training had
                  been forged.
                </p>
                <p style={{ ...body, marginBottom: 0 }}>
                  She moved through all of it with the same discipline and the
                  same presence. Wherever she worked, she was recognized. That was
                  not coincidence. It was the result of who she was — trained,
                  formed, and prepared for every room she entered.
                </p>
              </div>
            </div>
          </section>

          <Divider variant="minimal" />

          {/* ══════════════════════════════════════
              CHAPTER VIII — The Sound Before She Walked
              CINEMATIC — centered, parchment tint
          ══════════════════════════════════════ */}
          <section
            id="chapter-viii"
            style={{
              padding:
                "clamp(56px,7vh,80px) clamp(24px,4vw,56px) clamp(72px,10vh,120px)",
              backgroundColor: "rgba(245,208,80,0.04)",
              borderTop: "1px solid rgba(245,208,80,0.82)",
              borderBottom: "1px solid rgba(245,208,80,0.82)",
              textAlign: "center",
              marginBottom: "clamp(72px,10vh,120px)",
            }}
          >
            <ChapterHeader
              number="Chapter VIII"
              title="The Sound Before She Walked"
              greek="Ο Ήχος πριν Περπατήσει"
              centered
            />

            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
              <p
                className="font-serif"
                style={{
                  fontSize: "clamp(21px,1.8vw,22px)",
                  lineHeight: 1.9,
                  color: "rgba(245,240,232,0.85)",
                  fontStyle: "italic",
                  marginBottom: "28px",
                }}
              >
                Her signature runway music was the theme from{" "}
                <em style={hi}>The Third Man</em>. Before she appeared, the room
                heard it. Audiences came to know the arrangement: when that
                melody began, Mary Pavlatou was about to walk. A signature that
                belonged to no one else.
              </p>
              <p
                className="font-serif"
                style={{
                  fontSize: "clamp(21px,1.8vw,22px)",
                  lineHeight: 1.9,
                  color: "rgba(245,240,232,0.85)",
                  fontStyle: "italic",
                  marginBottom: "40px",
                }}
              >
                In the great hotels and theatres of Athens, the Third Man theme
                became her announcement. The pause before the music ended. The
                first step into the room. The line of the dress, the angle of the
                head, the deliberate pace that communicated everything. The
                audience waited for her the way they waited for no one else.
              </p>

              <QuoteReveal
                quote="When that melody began, the room knew. Mary Pavlatou was about to walk."
                greek="Το Σήμα της · Her Signature"
                size="md"
              />
            </div>
          </section>

          {/* ══════════════════════════════════════
              CHAPTER IX — The Dream of Family
          ══════════════════════════════════════ */}
          <section id="chapter-ix" style={sectionPad}>
            <ChapterHeader
              number="Chapter IX"
              title="The Dream of Family"
              greek="Το Όνειρο Οικογένειας"
            />

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
              <div style={{ flex: 1 }}>
                <p style={body}>
                  Her dream was clear and always had been: to become one of the
                  world's finest mannequins, and one day to create a good family.
                  She achieved both.
                </p>
                <p style={body}>
                  As the years passed and the career reached its heights, Mary
                  Pavlatou — Maria Pulos — built the life she had always intended
                  to build. She became a mother. And in that role, she brought
                  the same devotion, the same care, the same full attention that
                  she had brought to every other thing she had ever done.
                </p>
                <p style={body}>
                  The{" "}
                  <em style={hi}>Pulos Brothers</em> — her sons — have carried
                  her memory with the same love that she brought to her life.
                  Every photograph in this archive, every article, every clipping
                  was saved by them. They built the record that now exists.
                </p>
                <p style={{ ...body, marginBottom: 0 }}>
                  What remains is not simply a historical archive. It is a
                  family's love made permanent. This archive exists because of
                  them. The story you are reading exists because they chose to
                  preserve it — the sons honoring the mother, the family keeping
                  the name alive.
                </p>
              </div>

              <div style={{ flexShrink: 0, width: "100%", maxWidth: "360px" }}>
                <SafeImage
                  src="/images/endsheet-portrait.jpg"
                  alt="Archive — Preserved by Her Sons"
                  mode="landscape"
                  width={666}
                  height={405}
                  caption="Archive · Preserved by Her Sons"
                />
              </div>
            </div>
          </section>

          <Divider variant="diamond" />

          {/* ══════════════════════════════════════
              CHAPTER X — Eternal Memory
          ══════════════════════════════════════ */}
          <section id="chapter-x" style={{ paddingBottom: "clamp(48px,6vh,80px)" }}>
            <ChapterHeader
              number="Chapter X"
              title="Eternal Memory"
              greek="Αιωνία η Μνήμη"
            />

            <p style={body}>
              Mary Pavlatou does not need embellishment. Her life, told
              truthfully, is the most remarkable story in this archive.
            </p>
            <p style={body}>
              She trained when training was rare. She studied when study was not
              expected of her. She traveled when travel was not easy. She achieved
              what no Greek woman had achieved before — and she achieved it in a
              world that asked more of women like her than it ever acknowledged.
            </p>
            <p style={body}>
              She moved through the world with grace, intelligence, discipline,
              and love. She was celebrated in the greatest venues of Athens. She
              stood alongside the names of international couture. She walked to
              music that was hers alone. And when the runway was behind her, she
              became what she had always wanted to be — a mother.
            </p>
            <p style={body}>
              The book design and photo and article restoration that made this
              archive possible was the dedicated work of{" "}
              <em style={hi}>Mary James</em>. The family dedications that
              accompany her memory speak of her as{" "}
              <em style={hi}>"God's Special Angel"</em> and{" "}
              <em style={hi}>"God's Sweetest Miracle."</em>
            </p>
            <p style={{ ...body, marginBottom: "48px" }}>
              These are not simply words of grief. They are a declaration of what
              she was — in life, as in memory — to those who knew her most
              closely. She was both.
            </p>

            <QuoteReveal
              quote="May her memory be eternal."
              greek="Αιωνία η μνήμη της"
              size="lg"
            />

            {/* Navigation to other sections */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "18px",
                marginTop: "56px",
                paddingTop: "40px",
                borderTop: "1px solid rgba(245,208,80,0.15)",
              }}
            >
              <a
                href="/fashion"
                className="font-display"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#f5d050",
                  textDecoration: "none",
                  border: "1px solid rgba(245,208,80,0.78)",
                  padding: "15px 28px",
                }}
              >
                Fashion Archive{" "}
                <span style={{ fontSize: "26px", letterSpacing: 0 }}>→</span>
              </a>
              <a
                href="/legacy"
                className="font-display"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "24px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "rgba(245,208,80,0.6)",
                  textDecoration: "none",
                  border: "1px solid rgba(245,208,80,0.58)",
                  padding: "15px 28px",
                }}
              >
                Her Legacy{" "}
                <span style={{ fontSize: "26px", letterSpacing: 0 }}>→</span>
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

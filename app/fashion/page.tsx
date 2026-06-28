import type { Metadata } from "next";
import SafeImage from "@/components/SafeImage";
import GreekDivider from "@/components/GreekDivider";
import QuoteReveal from "@/components/QuoteReveal";
import FashionHouseCard from "@/components/FashionHouseCard";

export const metadata: Metadata = {
  title: "World of Fashion — Mary Pavlatou Memorial Archive",
  description:
    "Explore Mary Pavlatou's place in postwar couture — the great Parisian houses, the Athenian salons, the discipline of the mannequin, and a Greek icon's journey through the world of fashion.",
};

const parisHouses = [
  {
    name: "Christian Dior",
    city: "Paris",
    note: "The most celebrated fashion house of the era. Mary presented Dior evening gowns in Athens — pieces crafted from black velvet with embroidered roses and sweeping taffeta skirts.",
    type: "paris" as const,
  },
  {
    name: "Hubert de Givenchy",
    city: "Paris",
    note: "One of the defining names of postwar haute couture. Givenchy's elegant, refined aesthetic aligned perfectly with Mary's own philosophy of presence and discipline.",
    type: "paris" as const,
  },
  {
    name: "Jacques Fath",
    city: "Paris",
    note: "Known for sensuous, sculpted silhouettes. Fath's work represented the height of 1950s Parisian couture.",
    type: "paris" as const,
  },
  {
    name: "Pierre Balmain",
    city: "Paris",
    note: "Balmain's refined Parisian style was carried to Athenian audiences through the ateliers that trusted Mary to present their collections.",
    type: "paris" as const,
  },
  {
    name: "Nina Ricci",
    city: "Paris",
    note: "Delicate, feminine, and deeply French — Nina Ricci's aesthetic rounded out the great Parisian houses that defined Mary's international career.",
    type: "paris" as const,
  },
];

const athensHouses = [
  {
    name: "Eleni Mallidou",
    city: "Athens",
    note: "One of Athens's most celebrated fashion houses, trusted to present their collections through Mary's command of the runway.",
    type: "athens" as const,
  },
  {
    name: "Stantzos",
    city: "Athens",
    note: "A distinguished Athenian atelier whose collections Mary presented to the city's fashion elite.",
    type: "athens" as const,
  },
  {
    name: "Halifa",
    city: "Athens",
    note: "Among the Athens houses that shaped the local couture world and chose Mary as their mannequin.",
    type: "athens" as const,
  },
  {
    name: "Tsitsopoulos Brothers",
    city: "Athens",
    note: "A respected Athenian house that formed part of the salon world Mary moved through.",
    type: "athens" as const,
  },
  {
    name: "Archontaki-Kallergi",
    city: "Athens",
    note: "Known for their hat collection, which Mary presented in one of the archive's most beloved portrait series.",
    type: "athens" as const,
  },
  {
    name: "Filioskos",
    city: "Athens",
    note: "Another distinguished name in Athenian fashion whose work Mary was trusted to represent.",
    type: "athens" as const,
  },
  {
    name: "Antoniadou",
    city: "Athens",
    note: "Part of the Athenian fashion world that recognized Mary's rare combination of beauty and professional discipline.",
    type: "athens" as const,
  },
  {
    name: "ETAM",
    city: "Athens",
    note: "A prominent Athens fashion house where Mary began her career as a mannequin.",
    type: "athens" as const,
  },
  {
    name: "Vogue (Athens)",
    city: "Athens",
    note: "The Athenian fashion house Vogue — where Mary first worked as a mannequin, launching her career.",
    type: "athens" as const,
  },
];

const venues = [
  {
    name: "Hotel Grande Bretagne",
    note: "One of Athens's most celebrated hotels — a stage for the city's elite fashion events.",
  },
  {
    name: "King George Hotel",
    note: "The King George Hotel hosted the season's most prestigious fashion exhibitions.",
  },
  {
    name: "Mousouris Theatre",
    note: "A theatrical setting for fashion presentations where Mary was a commanding presence.",
  },
  {
    name: "Attic Club",
    note: "An exclusive Athenian venue where couture was presented to the city's finest audiences.",
  },
];

const glossaryTerms = [
  {
    greek: "μανεκέν",
    transliteration: "manekén",
    definition:
      "Mannequin: the professional model who gives life to a garment through movement, posture, and presence.",
  },
  {
    greek: "υψηλή ραπτική",
    transliteration: "ypsilí raptikí",
    definition:
      "Haute Couture: the highest form of fashion craft — custom-made, meticulously constructed, a world apart.",
  },
  {
    greek: "κομψότητα",
    transliteration: "kompsótita",
    definition:
      "Elegance: not beauty alone, but refinement of movement, manner, and spirit.",
  },
  {
    greek: "παρουσία",
    transliteration: "parousía",
    definition:
      "Presence: the quality that makes a room notice. Mary possessed it completely.",
  },
  {
    greek: "κίνηση",
    transliteration: "kínisi",
    definition:
      "Movement: in the salon, every step was intentional. Movement was the mannequin's language.",
  },
  {
    greek: "χάρη",
    transliteration: "cháre",
    definition:
      "Grace: the invisible thread connecting beauty, discipline, and soul. What Mary carried without effort.",
  },
];

export default function FashionPage() {
  const sectionPadding = "clamp(72px,10vh,120px) clamp(32px,7vw,100px)";
  const maxWidth = "1200px";

  return (
    <main style={{ backgroundColor: "#0a0a0a", color: "#f5f0e8", fontFamily: "var(--font-serif)" }}>

      {/* ── SECTION 1: Page Header ── */}
      <section
        style={{
          padding: sectionPadding,
          maxWidth,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "26px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(245,208,80,0.6)",
            marginBottom: "24px",
          }}
        >
          Mary Pavlatou
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(38px, 6vw, 72px)",
            fontWeight: 400,
            letterSpacing: "0.05em",
            color: "#f5d050",
            marginBottom: "16px",
            lineHeight: 1.1,
          }}
        >
          The World of Fashion
        </h1>

        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(34px, 2vw, 22px)",
            color: "rgba(245,208,80,0.5)",
            marginBottom: "48px",
            letterSpacing: "0.05em",
          }}
        >
          Ο Κόσμος της Μόδας
        </p>

        <GreekDivider />

        <p
          style={{
            fontSize: "clamp(23px, 1.4vw, 18px)",
            lineHeight: 1.9,
            color: "rgba(245,240,232,0.75)",
            maxWidth: "760px",
            margin: "48px auto 0",
          }}
        >
          Mary Pavlatou entered the world of fashion at its most defining moment — the postwar decade
          that gave birth to the New Look, reimagined European elegance, and elevated the mannequin
          to the status of artist. She arrived in that world not as a visitor, but as one of its
          finest interpreters.
        </p>
      </section>

      {/* ── SECTION 2: The Golden Age of Couture ── */}
      <section
        style={{
          padding: sectionPadding,
          maxWidth,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(245,208,80,0.5)",
                marginBottom: "16px",
              }}
            >
              Context
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(34px, 3.5vw, 40px)",
                fontWeight: 400,
                color: "#f5d050",
                marginBottom: "28px",
                letterSpacing: "0.04em",
                lineHeight: 1.25,
              }}
            >
              The Golden Age of Couture
            </h2>
            <p
              style={{
                fontSize: "clamp(36px, 1.3vw, 17px)",
                lineHeight: 1.9,
                color: "rgba(245,240,232,0.72)",
              }}
            >
              The postwar years of the 1950s reshaped fashion entirely. Paris led — Christian
              Dior&apos;s New Look in 1947 redefined the silhouette of an era. Hubert de Givenchy,
              Jacques Fath, Pierre Balmain, and Nina Ricci each built houses of extraordinary
              influence. Athens, connected to Paris through its most distinguished ateliers, brought
              this couture to Greek audiences — and it was through this world that Mary Pavlatou
              rose to international recognition.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <SafeImage
              src="/images/hf-atelier.jpg"
              mode="landscape"
              alt="The Atelier — 1950s Couture"
              width={1200}
              height={800}
              caption="The Atelier · Postwar Couture · 1950s"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 3: The Mannequin as Artist ── */}
      <section
        style={{
          backgroundColor: "#ede8d8",
          padding: sectionPadding,
        }}
      >
        <div style={{ maxWidth, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(184,124,20,0.6)",
                marginBottom: "16px",
              }}
            >
              Discipline · Craft · Presence
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(34px, 3.5vw, 40px)",
                fontWeight: 400,
                color: "#b87c14",
                marginBottom: "12px",
                letterSpacing: "0.04em",
                lineHeight: 1.25,
              }}
            >
              The Mannequin as Artist
            </h2>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(36px, 1.5vw, 18px)",
                color: "rgba(184,124,20,0.55)",
                marginBottom: "36px",
                letterSpacing: "0.04em",
              }}
            >
              Μανεκέν ως Καλλιτέχνης
            </p>
            <p
              style={{
                fontSize: "clamp(36px, 1.3vw, 17px)",
                lineHeight: 1.9,
                color: "#3a3020",
                maxWidth: "720px",
                margin: "0 auto 48px",
              }}
            >
              To be a mannequin was not simply to wear clothes. The discipline that Mary mastered
              at the Patricia Vance School of Fashion demanded something more. Movement. Posture.
              Psychological presence. The ability to make a garment live. &ldquo;There are many
              beautiful women,&rdquo; the saying went in the salons, &ldquo;but very few
              mannequins.&rdquo;
            </p>
          </div>

          <div style={{ maxWidth: "680px", margin: "0 auto 56px" }}>
            <QuoteReveal
              quote="The mannequin must possess discipline, endurance, and intelligence. Every movement is a message."
              greek="Κίνηση · Παρουσία · Κομψότητα"
              size="lg"
              centered
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ maxWidth: "380px", width: "100%" }}>
              <SafeImage
                src="/images/mary-runway-blue.jpg"
                mode="full-body"
                alt="Mary Pavlatou on the Runway"
                width={900}
                height={1660}
                caption="On the Runway · Athens · 1950s"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: The Athenian Salon ── */}
      <section
        style={{
          padding: sectionPadding,
          maxWidth,
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "24px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(245,208,80,0.5)",
              marginBottom: "16px",
            }}
          >
            Athens · Greece
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 3.5vw, 40px)",
              fontWeight: 400,
              color: "#f5d050",
              marginBottom: "12px",
              letterSpacing: "0.04em",
              lineHeight: 1.25,
            }}
          >
            The Athenian Salon
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(36px, 1.5vw, 18px)",
              color: "rgba(245,208,80,0.82)",
              marginBottom: "32px",
              letterSpacing: "0.04em",
            }}
          >
            Το Αθηναϊκό Σαλόνι
          </p>
          <p
            style={{
              fontSize: "clamp(36px, 1.3vw, 17px)",
              lineHeight: 1.9,
              color: "rgba(245,240,232,0.72)",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            Athens had its own world of couture — an elegant circuit of hotels, theatres, and
            private ateliers where the city&apos;s fashion elite gathered. Mary Pavlatou moved
            through this world as its defining presence. She appeared at the Hotel Grande
            Bretagne, the King George Hotel, the Mousouris Theatre, and the Attic Club — every
            prestige address the city had to offer.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {venues.map((venue) => (
            <div
              key={venue.name}
              style={{
                border: "1px solid rgba(245,208,80,0.68)",
                padding: "28px 32px",
                backgroundColor: "#0a0a0a",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "26px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#f5d050",
                  marginBottom: "12px",
                }}
              >
                {venue.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "24px",
                  color: "rgba(245,240,232,0.90)",
                  lineHeight: 1.75,
                }}
              >
                {venue.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: The Houses She Carried ── */}
      <section
        style={{
          padding: sectionPadding,
          borderTop: "1px solid rgba(245,208,80,0.82)",
          borderBottom: "1px solid rgba(245,208,80,0.82)",
        }}
      >
        <div style={{ maxWidth, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(245,208,80,0.5)",
                marginBottom: "16px",
              }}
            >
              The Collections
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(34px, 3.5vw, 40px)",
                fontWeight: 400,
                color: "#f5d050",
                letterSpacing: "0.04em",
                lineHeight: 1.25,
              }}
            >
              The Houses She Carried
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(32px, 5vw, 72px)",
            }}
          >
            {/* Paris Column */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#f5d050",
                  marginBottom: "24px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(245,208,80,0.62)",
                }}
              >
                Paris
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {parisHouses.map((house) => (
                  <FashionHouseCard key={house.name} {...house} />
                ))}
              </div>
            </div>

            {/* Athens Column */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "rgba(245,208,80,0.6)",
                  marginBottom: "24px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(245,208,80,0.15)",
                }}
              >
                Athens
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {athensHouses.map((house) => (
                  <FashionHouseCard key={house.name} {...house} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: The Language of Fashion ── */}
      <section
        style={{
          backgroundColor: "#ede8d8",
          padding: sectionPadding,
        }}
      >
        <div style={{ maxWidth, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(184,124,20,0.6)",
                marginBottom: "16px",
              }}
            >
              Glossary
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(34px, 3.5vw, 40px)",
                fontWeight: 400,
                color: "#b87c14",
                marginBottom: "12px",
                letterSpacing: "0.04em",
                lineHeight: 1.25,
              }}
            >
              The Language of Fashion
            </h2>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(36px, 1.5vw, 18px)",
                color: "rgba(184,124,20,0.55)",
                letterSpacing: "0.04em",
              }}
            >
              Η Γλώσσα της Μόδας
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "28px",
            }}
          >
            {glossaryTerms.map((term) => (
              <div
                key={term.greek}
                style={{
                  border: "1px solid rgba(184,124,20,0.2)",
                  padding: "28px 24px",
                  backgroundColor: "rgba(255,255,255,0.35)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(36px, 2.5vw, 30px)",
                    color: "#b87c14",
                    marginBottom: "6px",
                    lineHeight: 1.2,
                  }}
                >
                  {term.greek}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "28px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "rgba(184,124,20,0.5)",
                    marginBottom: "14px",
                  }}
                >
                  {term.transliteration}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "28px",
                    color: "#3a3020",
                    lineHeight: 1.75,
                  }}
                >
                  {term.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section
        style={{
          padding: sectionPadding,
          maxWidth,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <GreekDivider />

        <p
          style={{
            fontSize: "clamp(23px, 1.4vw, 19px)",
            lineHeight: 1.9,
            color: "rgba(245,240,232,0.7)",
            maxWidth: "680px",
            margin: "48px auto 64px",
            fontStyle: "italic",
          }}
        >
          Mary did not simply carry fashion. She interpreted it. In every turn, every pause, every
          line of the body, she carried χάρη — not only beauty, but discipline, movement, and soul.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/story"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "24px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#f5d050",
              textDecoration: "none",
              border: "1px solid rgba(245,208,80,0.78)",
              padding: "16px 36px",
              transition: "border-color 0.3s ease, background 0.3s ease",
              display: "inline-block",
            }}
          >
            Her Story
          </a>
          <a
            href="/gallery"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "24px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(245,208,80,0.6)",
              textDecoration: "none",
              border: "1px solid rgba(245,208,80,0.55)",
              padding: "16px 36px",
              transition: "border-color 0.3s ease, background 0.3s ease",
              display: "inline-block",
            }}
          >
            The Gallery
          </a>
        </div>
      </section>

    </main>
  );
}

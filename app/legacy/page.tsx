import type { Metadata } from "next";
import SafeImage from "@/components/SafeImage";
import GreekDivider from "@/components/GreekDivider";
import QuoteReveal from "@/components/QuoteReveal";

export const metadata: Metadata = {
  title: "Legacy — Mary Pavlatou Memorial Archive",
  description:
    "The eternal legacy of Mary Pavlatou — Greek icon, mother, artist, and woman of rare grace. May her memory be eternal. Αιωνία η μνήμη της.",
};

const pad: React.CSSProperties = {
  padding: "clamp(72px,10vh,120px) clamp(32px,7vw,100px)",
};

export default function LegacyPage() {
  return (
    <div style={{ backgroundColor: "#0a0a0a" }}>

      {/* ───────────────────────────────────────────────
          SECTION 1 · Page Header
      ─────────────────────────────────────────────── */}
      <header
        className="animate-fade-in"
        style={{
          ...pad,
          paddingBottom: "clamp(52px,7vh,88px)",
          textAlign: "center",
          borderBottom: "1px solid rgba(245,208,80,0.84)",
        }}
      >
        <p
          className="font-display"
          style={{
            color: "rgba(245,208,80,0.78)",
            fontSize: "24px",
            letterSpacing: "0.55em",
            textTransform: "uppercase",
            marginBottom: "22px",
          }}
        >
          Mary Pavlatou
        </p>

        <h1
          className="font-display"
          style={{
            color: "#f5d050",
            fontSize: "clamp(60px,8vw,104px)",
            fontWeight: 400,
            letterSpacing: "0.22em",
            lineHeight: 0.95,
            marginBottom: "24px",
          }}
        >
          Legacy
        </h1>

        <p
          className="font-display"
          style={{
            color: "rgba(245,208,80,0.5)",
            fontSize: "clamp(21px,1.8vw,20px)",
            fontWeight: 400,
            letterSpacing: "0.28em",
            marginBottom: "40px",
          }}
        >
          Αιωνία η Μνήμη
        </p>

        <div
          style={{
            height: "1px",
            maxWidth: "280px",
            margin: "0 auto",
            background:
              "linear-gradient(90deg, transparent, #f5d050 30%, #f5d050 70%, transparent)",
          }}
        />
      </header>

      {/* ───────────────────────────────────────────────
          SECTION 2 · God's Special Angel
      ─────────────────────────────────────────────── */}
      <section
        style={{
          ...pad,
          backgroundColor: "#08080a",
          textAlign: "center",
          borderBottom: "1px solid rgba(245,208,80,0.70)",
        }}
      >
        <QuoteReveal
          quote="This book is dedicated to our mother, the one we call God's Special Angel."
          greek="Η Μνήμη της Μαρίας"
          size="lg"
          centered
        />

        <p
          className="font-serif"
          style={{
            color: "rgba(245,240,232,0.88)",
            fontSize: "clamp(34px,2vw,23px)",
            fontStyle: "italic",
            lineHeight: 1.8,
            maxWidth: "560px",
            margin: "0 auto 18px",
          }}
        >
          She is the closest thing that will ever be to Heaven on earth.
        </p>

        <p
          className="font-display"
          style={{
            color: "rgba(245,208,80,0.78)",
            fontSize: "24px",
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            marginBottom: "clamp(52px,8vh,88px)",
          }}
        >
          — The Pulos Brothers
        </p>

        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <SafeImage
            src="/images/endsheet-portrait.jpg"
            alt="Mary Pavlatou — Archive Endsheet Portrait"
            mode="landscape"
            width={666}
            height={405}
            caption="Archive · Preserved by Her Sons"
          />
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          SECTION 3 · The Mother They Remembered
      ─────────────────────────────────────────────── */}
      <section
        style={{
          ...pad,
          backgroundColor: "#0a0a0a",
          borderBottom: "1px solid rgba(245,208,80,0.30)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap" as const,
            gap: "clamp(40px,6vw,80px)",
            alignItems: "center",
          }}
        >
          {/* Text column */}
          <div style={{ flex: "1 1 300px", maxWidth: "580px" }}>
            <p
              className="font-display"
              style={{
                color: "rgba(245,208,80,0.74)",
                fontSize: "24px",
                letterSpacing: "0.48em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              In Their Memory
            </p>

            <h2
              className="font-display"
              style={{
                color: "#f5d050",
                fontSize: "clamp(34px,2.8vw,34px)",
                fontWeight: 400,
                letterSpacing: "0.14em",
                lineHeight: 1.25,
                marginBottom: "28px",
              }}
            >
              The Mother They Remembered
            </h2>

            <p
              className="font-serif"
              style={{
                color: "rgba(245,240,232,0.92)",
                fontSize: "clamp(23px,1.4vw,18px)",
                lineHeight: 1.95,
              }}
            >
              To her sons, Mary was not only an icon — she was love itself. They
              preserved her photographs, clippings, and memories for decades,
              carried with a devotion that no archive can fully measure. What
              exists in these pages is not only a record of a fashion career. It
              is a family&rsquo;s refusal to let grace be forgotten.
            </p>
          </div>

          {/* Decorative image column */}
          <div
            style={{
              flex: "0 0 auto",
              width: "clamp(100px,12vw,180px)",
              opacity: 0.45,
            }}
          >
            <SafeImage
              src="/images/hf-columns.jpg"
              alt="Decorative architectural columns"
              mode="decorative"
              width={300}
              height={500}
            />
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "clamp(52px,7vh,88px) auto 0",
          }}
        >
          <GreekDivider />
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          SECTION 4 · The Light She Left (parchment)
      ─────────────────────────────────────────────── */}
      <section
        className="parchment-bg"
        style={{
          ...pad,
          backgroundColor: "#ede8d8",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "clamp(52px,8vh,88px)" }}>
            <h2
              className="font-display"
              style={{
                color: "#b87c14",
                fontSize: "clamp(36px,3vw,40px)",
                fontWeight: 400,
                letterSpacing: "0.16em",
                lineHeight: 1.2,
                marginBottom: "12px",
              }}
            >
              The Light She Left
            </h2>
            <p
              className="font-display"
              style={{
                color: "#4a3c14",
                fontSize: "clamp(10px,1.1vw,13px)",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
              }}
            >
              Το Φως που Άφησε
            </p>
          </div>

          {/* 3-column qualities */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "clamp(32px,5vw,64px)",
              marginBottom: "clamp(60px,9vh,100px)",
            }}
          >
            {[
              {
                greek: "χάρη · Grace",
                body: "She carried grace not as performance but as nature. Every room she entered remembered her.",
              },
              {
                greek: "ψυχή · Soul",
                body: "Behind the photographs was an interior life of extraordinary depth. Dance, music, art, languages, degrees — Mary was a woman in full.",
              },
              {
                greek: "κίνηση · Movement",
                body: "She understood that fashion was not clothing. It was movement, message, and presence. She gave it all three.",
              },
            ].map(({ greek, body }) => (
              <div key={greek} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "36px",
                    height: "1px",
                    background: "#b87c14",
                    opacity: 0.55,
                    margin: "0 auto 22px",
                  }}
                />
                <p
                  className="font-display"
                  style={{
                    color: "#b87c14",
                    fontSize: "clamp(12px,1.3vw,15px)",
                    letterSpacing: "0.24em",
                    fontWeight: 500,
                    marginBottom: "16px",
                  }}
                >
                  {greek}
                </p>
                <p
                  className="font-serif"
                  style={{
                    color: "#2a2215",
                    fontSize: "clamp(36px,1.35vw,16px)",
                    lineHeight: 1.9,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* After-columns note */}
          <div
            style={{
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto clamp(60px,9vh,96px)",
              borderTop: "1px solid rgba(184,124,20,0.22)",
              paddingTop: "clamp(36px,5vh,56px)",
            }}
          >
            <p
              className="font-serif"
              style={{
                color: "#1a1610",
                fontSize: "clamp(23px,1.6vw,19px)",
                lineHeight: 1.95,
                fontStyle: "italic",
              }}
            >
              Her dream was to become one of the world&rsquo;s finest mannequins
              and one day create a good family. She achieved both. Her sons are
              her greatest legacy.
            </p>
          </div>

          {/* Portrait */}
          <div style={{ textAlign: "center" }}>
            <SafeImage
              src="/images/mary-portrait-framed.jpg"
              alt="Mary Pavlatou — Framed Portrait"
              mode="portrait"
              width={900}
              height={1200}
              caption="Mary Pavlatou · Forever Remembered"
              maxHeight="clamp(320px,55vh,640px)"
            />
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          SECTION 5 · What She Gave to Fashion
      ─────────────────────────────────────────────── */}
      <section
        style={{
          ...pad,
          backgroundColor: "#07070c",
          borderTop: "1px solid rgba(245,208,80,0.72)",
          borderBottom: "1px solid rgba(245,208,80,0.72)",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            className="font-display"
            style={{
              color: "rgba(245,208,80,0.74)",
              fontSize: "24px",
              letterSpacing: "0.48em",
              textTransform: "uppercase",
              marginBottom: "22px",
            }}
          >
            Her Contribution
          </p>

          <h2
            className="font-display"
            style={{
              color: "#f5d050",
              fontSize: "clamp(36px,3vw,40px)",
              fontWeight: 400,
              letterSpacing: "0.14em",
              lineHeight: 1.2,
              marginBottom: "40px",
            }}
          >
            What She Gave to Fashion
          </h2>

          <p
            className="font-serif"
            style={{
              color: "rgba(245,240,232,0.92)",
              fontSize: "clamp(23px,1.45vw,18px)",
              lineHeight: 2,
            }}
          >
            Mary Pavlatou was the first Greek certified professional fashion
            model. She trained at the Patricia Vance School of Fashion in
            Chicago, and returned to Athens to become its best-known mannequin
            — a distinction she earned not through beauty alone, but through
            the rarest combination of discipline, intelligence, and presence.
            She carried the great Parisian houses to Greek audiences. She stood
            for something that fashion rarely acknowledges: that a mannequin is
            not an instrument. She is an artist.
          </p>

          <QuoteReveal
            quote="She did not simply wear fashion. She interpreted it."
            author="— Family Archive"
            size="md"
            centered
          />
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          SECTION 6 · Eternal Memory (closing)
      ─────────────────────────────────────────────── */}
      <section
        style={{
          ...pad,
          backgroundColor: "#08080a",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          {/* Star divider */}
          <div style={{ marginBottom: "clamp(52px,8vh,88px)" }}>
            <GreekDivider variant="star" />
          </div>

          {/* Greek heading */}
          <h2
            className="font-display"
            style={{
              color: "#f5d050",
              fontSize: "clamp(36px,4.5vw,60px)",
              fontWeight: 400,
              letterSpacing: "0.2em",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Αιωνία η Μνήμη της
          </h2>

          {/* English translation */}
          <p
            className="font-display"
            style={{
              color: "rgba(245,208,80,0.80)",
              fontSize: "clamp(10px,1.2vw,14px)",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              marginBottom: "clamp(52px,8vh,88px)",
            }}
          >
            May her memory be eternal.
          </p>

          {/* Body */}
          <p
            className="font-serif"
            style={{
              color: "rgba(245,240,232,0.90)",
              fontSize: "clamp(23px,1.5vw,18px)",
              lineHeight: 2,
              maxWidth: "680px",
              margin: "0 auto clamp(60px,9vh,96px)",
            }}
          >
            The Pulos Brothers have kept her alive in every photograph, every
            clipping, every article saved from the decades. Mary James has
            restored and honored that collection into something lasting. And
            now, through this archive, the world may know what they always
            knew: that Mary Pavlatou was a woman of rare and extraordinary
            grace.
          </p>

          {/* Glamour portrait */}
          <div style={{ marginBottom: "clamp(60px,9vh,96px)" }}>
            <SafeImage
              src="/images/mary-glamour-portrait.jpg"
              alt="Mary Pavlatou — Glamour Portrait"
              mode="portrait"
              width={900}
              height={1660}
              caption="Mary Pavlatou — μνήμη · 1950s"
              maxHeight="clamp(380px,65vh,760px)"
              priority
            />
          </div>

          {/* Final italic line */}
          <p
            className="font-serif"
            style={{
              color: "#f5d050",
              fontSize: "clamp(23px,2.8vw,34px)",
              fontStyle: "italic",
              lineHeight: 1.7,
              maxWidth: "680px",
              margin: "0 auto clamp(44px,7vh,72px)",
            }}
          >
            God&rsquo;s Special Angel. God&rsquo;s Sweetest Miracle.{" "}
            Αιωνία η μνήμη της.
          </p>

          {/* Minimal divider before credits */}
          <div style={{ marginBottom: "clamp(36px,5vh,56px)" }}>
            <GreekDivider variant="minimal" />
          </div>

          {/* Credits */}
          <p
            className="font-display"
            style={{
              color: "rgba(245,208,80,0.65)",
              fontSize: "24px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              lineHeight: 2.2,
            }}
          >
            Photo &amp; article compilation: The Pulos Brothers
            <br />
            Photo restoration, article restoration &amp; book design: Mary James
          </p>
        </div>
      </section>
    </div>
  );
}

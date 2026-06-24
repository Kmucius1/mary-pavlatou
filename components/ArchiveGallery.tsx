import Image from "next/image";

export default function ArchiveGallery() {
  return (
    <section
      id="gallery"
      style={{
        backgroundColor: "#09080a",
        padding: "clamp(80px, 12vh, 140px) clamp(32px, 7vw, 100px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Label */}
        <p
          className="font-display"
          style={{ color: "rgba(201,168,76,0.45)", fontSize: "9px", letterSpacing: "0.45em", textTransform: "uppercase", marginBottom: "18px" }}
        >
          The Archive
        </p>
        <div style={{ width: "40px", height: "1px", background: "rgba(201,168,76,0.5)", marginBottom: "clamp(56px, 8vw, 96px)" }} />

        {/* Main 2-col: portrait + stacked pair */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left — Featured portrait */}
          <div className="animate-fade-up">
            <div style={{ position: "relative", aspectRatio: "3/4", border: "1px solid rgba(201,168,76,0.3)" }}>
              <Image
                src="/images/endsheet-portrait.jpg"
                alt="Mary Pavlatou — Portrait"
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center 12%" }}
              />
            </div>
            <p
              className="font-display mt-5"
              style={{ color: "rgba(201,168,76,0.4)", fontSize: "8px", letterSpacing: "0.3em", textTransform: "uppercase" }}
            >
              Mary Pavlatou — The Archive Portrait
            </p>
          </div>

          {/* Right — stacked: vanity + title page */}
          <div className="flex flex-col gap-8 animate-fade-up delay-2">
            <div>
              <div style={{ position: "relative", aspectRatio: "4/3", border: "1px solid rgba(201,168,76,0.2)" }}>
                <Image
                  src="/images/hf-vanity.jpg"
                  alt="1950s Parisian fashion still life"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <p
                className="font-display mt-4"
                style={{ color: "rgba(201,168,76,0.4)", fontSize: "8px", letterSpacing: "0.3em", textTransform: "uppercase" }}
              >
                Paris · The World She Moved In
              </p>
            </div>
            <div>
              <div style={{ position: "relative", aspectRatio: "4/3", border: "1px solid rgba(201,168,76,0.2)" }}>
                <Image
                  src="/images/cover-hires.jpg"
                  alt="Mary Pavlatou — Archive Title Page"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <p
                className="font-display mt-4"
                style={{ color: "rgba(201,168,76,0.4)", fontSize: "8px", letterSpacing: "0.3em", textTransform: "uppercase" }}
              >
                The Archive — Interior Title Page
              </p>
            </div>
          </div>
        </div>

        {/* Credit line */}
        <p
          className="font-serif italic mt-16"
          style={{ color: "rgba(201,168,76,0.3)", fontSize: "clamp(13px, 1.3vw, 14px)" }}
        >
          Photo restoration and book design by Mary James.
        </p>
      </div>
    </section>
  );
}

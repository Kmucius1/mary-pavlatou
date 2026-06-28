import Image from "next/image";

export default function TempleSection() {
  return (
    <section
      style={{
        position: "relative",
        height: "clamp(420px, 60vw, 680px)",
        overflow: "hidden",
        backgroundColor: "#09080a",
      }}
    >
      <Image
        src="/images/hf-temple.jpg"
        alt="Ancient Greek temple at dusk"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Gradient — dark bottom fade, subtle top */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(9,8,10,0.3) 0%, rgba(9,8,10,0.1) 40%, rgba(9,8,10,0.55) 85%, #09080a 100%)",
      }} />

      {/* Text — centered in the amber sky */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        paddingBottom: "10%",
        zIndex: 10,
      }}>
        <p
          className="font-serif italic"
          style={{
            color: "rgba(245,240,228,0.9)",
            fontSize: "clamp(34px, 2.2vw, 26px)",
            textAlign: "center",
            maxWidth: "600px",
            lineHeight: 1.7,
            padding: "0 24px",
          }}
        >
          &ldquo;She made the world and the universe<br className="hidden md:block" /> a much better place.&rdquo;
        </p>
        <div style={{ width: "32px", height: "1px", background: "rgba(245,208,80,0.5)", margin: "20px auto 0" }} />
        <p
          className="font-display"
          style={{
            color: "rgba(245,208,80,0.5)",
            fontSize: "28px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginTop: "14px",
          }}
        >
          The Pulos Brothers
        </p>
      </div>
    </section>
  );
}

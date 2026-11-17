"use client";
import BilingualHeading from "@/components/BilingualHeading";

const YOUTUBE_ID = "3mqwhZ8fcOY";

export default function VideoPageClient() {
  return (
    <div style={{ backgroundColor: "#F0EBD9", minHeight: "70vh" }}>
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(56px,9vh,110px) clamp(16px,5vw,64px)" }}>
        <p className="font-display" style={{ color: "#8B7030", fontSize: "14px", letterSpacing: "0.55em", textTransform: "uppercase", fontWeight: 900, marginBottom: "18px", textAlign: "center" }}>
          Video
        </p>
        <BilingualHeading
          as="h1"
          el="Το Πρώτο Πιστοποιημένο Ελληνικό Μανεκέν"
          en="Greece's First Certified Mannequin"
          className="font-display"
          style={{ color: "#2A2218", fontSize: "clamp(32px,4.6vw,60px)", letterSpacing: "0.05em", fontWeight: 600, lineHeight: 1.15, textAlign: "center" }}
        />
        <p className="font-body" style={{ color: "#4A3C2A", fontSize: "clamp(17px,1.6vw,21px)", lineHeight: 1.7, textAlign: "center", maxWidth: "680px", margin: "22px auto 40px" }}>
          Mary Pavlatou: A Memorial Tribute. A film in her memory, shared by her three sons.
        </p>

        <div style={{ border: "2px solid #C5A84A", padding: "clamp(6px,1vw,12px)", backgroundColor: "#120F0B", boxShadow: "0 18px 50px rgba(42,34,24,0.25)" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`}
              title="Mary Pavlatou — Greece's First Certified Mannequin, A Memorial Tribute"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </div>

        <p className="font-body" style={{ textAlign: "center", marginTop: "22px", fontSize: "16px" }}>
          <a href={`https://youtu.be/${YOUTUBE_ID}`} target="_blank" rel="noopener noreferrer" style={{ color: "#8B7030", textDecoration: "underline" }}>
            Watch on YouTube
          </a>
        </p>
      </section>
    </div>
  );
}

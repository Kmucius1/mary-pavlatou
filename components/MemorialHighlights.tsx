const highlights = [
  {
    number: "01",
    heading: "A Historic First",
    body: "Mary Pavlatou became the first Greek woman to earn an official certified diploma as a professional mannequin — a rigorous credential earned through formal study at the Patricia Vance School of Fashion in Chicago, where modeling was treated as a discipline of science, art, and psychological understanding.",
  },
  {
    number: "02",
    heading: "The House of Dior",
    body: "She modeled for the House of Christian Dior — the most celebrated fashion house of the era — as well as for Pierre Balmain, Hubert de Givenchy, Jacques Fath, and Nina Ricci. Evening gowns bearing the Dior name were among the celebrated pieces she presented to Athens audiences.",
  },
  {
    number: "03",
    heading: "Athens to Fifth Avenue",
    body: "After approximately three years modeling in America — appearing at major department stores on Fifth Avenue, in Hollywood, and elsewhere — she returned to Athens and immediately reclaimed her place at the pinnacle of the city's fashion world, presenting the Autumn/Winter 1955–56 collections.",
  },
  {
    number: "04",
    heading: "A Voice on Her Craft",
    body: "In a landmark interview published in Apogevmatini newspaper, she gave a rare first-person account of the profession: \"In America, the mannequin is not an ornament. She is a collaborator of the designer. She must understand the garment as well as the tailor who created it.\"",
  },
  {
    number: "05",
    heading: "Singled Out Above All",
    body: "At the Mallidou spring fashion show, a journalist wrote that \"two exceptionally beautiful mannequins, Miss Mary Pavlatou and Miss Marina, presented the models with such elegance that no attentive observer could fail to notice them\" — naming her above all others present.",
  },
  {
    number: "06",
    heading: "The Elite Circle",
    body: "For the exclusive Papamichaeloff-Tsamadou winter collection — presented only to invited guests — she was chosen as one of only two mannequins trusted to present the collection, confirming her status as the most elite professional model of her era.",
  },
  {
    number: "07",
    heading: "Venues of Prestige",
    body: "Her shows were held at Athens's most storied addresses: the Hotel Grande Bretagne, the King George Hotel, the Mousouris Theatre, and the Attic Club. Each venue a stage worthy of the work she brought to life on it.",
  },
  {
    number: "08",
    heading: "The Signature",
    body: "Her signature runway music was the theme from the motion picture The Third Man — a worldwide hit she made her own. Audiences who heard it knew she was about to walk. It became inseparable from her presence.",
  },
];

const quotes = [
  {
    text: "There are many beautiful women, but very few mannequins.",
    source: "Mary Pavlatou — Interview, Apogevmatini",
  },
  {
    text: "She stood out distinctly among thousands of other beautiful Athenian women — not merely because of her walk. Her postures were harmonious, her carriage composed.",
    source: "G.K. Pilikos, Apogevmatini",
  },
  {
    text: "The mannequin must possess discipline, endurance, and intelligence. She must know how to control her body completely — because every movement is a message.",
    source: "Mary Pavlatou — Interview, Apogevmatini",
  },
];

export default function MemorialHighlights() {
  return (
    <section
      id="highlights"
      style={{
        backgroundColor: "#080709",
        padding: "clamp(80px, 12vh, 140px) clamp(32px, 7vw, 100px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: "clamp(56px, 8vw, 96px)" }}>
          <p
            className="font-display"
            style={{ color: "rgba(245,208,80,0.82)", fontSize: "9px", letterSpacing: "0.45em", textTransform: "uppercase", marginBottom: "18px" }}
          >
            Memorial Highlights
          </p>
          <div style={{ width: "40px", height: "1px", background: "rgba(245,208,80,0.5)", marginBottom: "24px" }} />
          <p
            className="font-serif italic"
            style={{ color: "rgba(228,216,196,0.5)", fontSize: "clamp(15px, 1.7vw, 18px)", maxWidth: "540px", lineHeight: 1.8 }}
          >
            From the newspaper clippings, interviews, and historical records preserved in her archive.
          </p>
        </div>

        {/* 2-col highlights grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "clamp(40px, 5vw, 64px)", marginBottom: "clamp(80px, 10vw, 120px)" }}
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.06}s`, borderTop: "1px solid rgba(245,208,80,0.15)", paddingTop: "28px" }}
            >
              <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <span
                  className="font-display"
                  style={{ color: "rgba(245,208,80,0.55)", fontSize: "clamp(16px, 3.5vw, 40px)", lineHeight: 1, flexShrink: 0, marginTop: "-4px" }}
                >
                  {h.number}
                </span>
                <div>
                  <h3
                    className="font-display"
                    style={{ color: "#f5d050", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: "12px" }}
                  >
                    {h.heading}
                  </h3>
                  <p
                    className="font-serif"
                    style={{ color: "rgba(205,196,178,0.8)", fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: 1.85 }}
                  >
                    {h.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div style={{ borderTop: "1px solid rgba(245,208,80,0.55)", paddingTop: "clamp(56px, 7vw, 80px)" }}>
          <p
            className="font-display"
            style={{ color: "rgba(245,208,80,0.82)", fontSize: "9px", letterSpacing: "0.45em", textTransform: "uppercase", marginBottom: "48px" }}
          >
            In Her Words &amp; In the Press
          </p>

          <div className="flex flex-col" style={{ gap: "clamp(40px, 5vw, 56px)" }}>
            {quotes.map((q, i) => (
              <div
                key={i}
                className="animate-fade-up"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  display: "grid",
                  gridTemplateColumns: "24px 1fr",
                  gap: "24px",
                  alignItems: "start",
                }}
              >
                <div style={{ color: "#f5d050", fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 0.8, fontFamily: "Georgia, serif", opacity: 0.5 }}>&ldquo;</div>
                <div>
                  <p
                    className="font-serif italic"
                    style={{ color: "#e4dac8", fontSize: "clamp(16px, 2vw, 21px)", lineHeight: 1.75, marginBottom: "14px" }}
                  >
                    {q.text}
                  </p>
                  <p
                    className="font-display"
                    style={{ color: "rgba(245,208,80,0.5)", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase" }}
                  >
                    {q.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

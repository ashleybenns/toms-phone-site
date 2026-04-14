export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#faf7fc",
        color: "#1f1630",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "32px 20px 80px",
        }}
      >
        <section
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #f5ecfa 100%)",
            border: "1px solid #e8def0",
            borderRadius: 24,
            padding: 28,
            boxShadow: "0 12px 36px rgba(31, 22, 48, 0.06)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontWeight: 700,
              color: "#9824bc",
              marginBottom: 8,
              letterSpacing: "0.02em",
            }}
          >
            Tom&apos;s Phone
          </div>

          <h1
            style={{
              margin: "0 0 12px",
              lineHeight: 1.2,
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
            }}
          >
            Tom&apos;s Phone
          </h1>

          <p style={{ margin: 0, fontSize: "1.05rem", color: "#5c516c" }}>
            A simple, senior-friendly phone experience.
          </p>

          <p style={{ marginTop: 20 }}>
            <a
              href="/privacy"
              style={{
                color: "#9824bc",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              View Privacy Policy
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

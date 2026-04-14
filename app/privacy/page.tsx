export const metadata = {
  title: "Privacy Policy | Tom's Phone",
  description: "Privacy Policy for Tom's Phone.",
};

export default function PrivacyPage() {
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
            marginBottom: 24,
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
            Privacy Policy
          </h1>

          <p style={{ color: "#5c516c", margin: 0 }}>
            <strong>Effective date:</strong> 14 April 2026
          </p>
        </section>

        <section
          style={{
            background: "#ffffff",
            border: "1px solid #e8def0",
            borderRadius: 24,
            padding: 28,
            boxShadow: "0 12px 36px rgba(31, 22, 48, 0.04)",
            lineHeight: 1.6,
          }}
        >
          <h2>1. Who we are</h2>
          <p>
            Tom&apos;s Phone is an Android application designed to provide a
            simple, senior-friendly phone experience.
          </p>
          <p>
            Developer contact:{" "}
            <a href="mailto:hello@toms-phone.com" style={{ color: "#9824bc" }}>
              hello@toms-phone.com
            </a>
          </p>

          <h2>2. Information we collect</h2>
          <p>
            Depending on the features used, the app may process contact names,
            phone numbers, app settings, and technical information needed for
            operation, support, security, and future remote configuration.
          </p>

          <h2>3. How we use information</h2>
          <p>
            We use information to operate the app, save preferences, support
            calling features, improve reliability, and respond to support
            requests.
          </p>

          <h2>4. Data sharing</h2>
          <p>
            We do not sell personal data. We may share limited information only
            where necessary to provide infrastructure, comply with legal
            obligations, or protect users and the service.
          </p>

          <h2>5. Data storage and security</h2>
          <p>
            We take reasonable steps to protect information from unauthorised
            access, loss, misuse, or alteration.
          </p>

          <h2>6. Data retention and deletion</h2>
          <p>
            We keep information only for as long as needed to provide the app,
            meet legal obligations, resolve disputes, or enforce our agreements.
          </p>

          <h2>7. Permissions</h2>
          <p>
            Tom&apos;s Phone may request phone-related permissions needed for
            core functionality, such as placing calls or displaying contact
            information.
          </p>

          <h2>8. Children&apos;s privacy</h2>
          <p>
            Tom&apos;s Phone is not directed to children. It is intended for
            adults, including older users and those assisting them.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The latest
            version will always be available on this page.
          </p>

          <h2>10. Contact</h2>
          <p>
            For privacy questions or support requests, contact{" "}
            <a href="mailto:hello@toms-phone.com" style={{ color: "#9824bc" }}>
              hello@toms-phone.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

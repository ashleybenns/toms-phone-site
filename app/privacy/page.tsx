export const metadata = {
  title: "Privacy Policy | Tom's Phone",
  description:
    "Privacy Policy for Tom's Phone: no ads, limited analytics and crash reporting, permissions, and contact.",
};

const link = { color: "#9824bc" };

const h2: React.CSSProperties = {
  margin: "28px 0 12px",
  fontSize: "1.25rem",
  lineHeight: 1.3,
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
          <h2 style={{ ...h2, marginTop: 0 }}>Summary</h2>
          <ul style={{ margin: "0 0 8px", paddingLeft: "1.25rem" }}>
            <li>
              We do <strong>not</strong> show third-party <strong>advertising</strong> in the
              app.
            </li>
            <li>
              We do <strong>not</strong> sell your personal information.
            </li>
            <li>
              Beyond what is needed to run features <strong>on your device</strong>, we
              collect only <strong>anonymised or aggregated usage</strong> analytics and{" "}
              <strong>crash / stability</strong> diagnostics to improve the app.
            </li>
            <li>
              Contact:{" "}
              <a href="mailto:support@toms-phone.com" style={link}>
                support@toms-phone.com
              </a>{" "}
              or <strong>in-app messaging / support</strong> where available.
            </li>
          </ul>

          <h2 style={h2}>1. Who we are</h2>
          <p>
            Tom&apos;s Phone is an Android application that provides a simple,
            senior-friendly phone experience. This policy describes the app
            (as published on Google Play under the developer name shown there).
          </p>

          <h2 style={h2}>2. Information we collect</h2>
          <p>
            <strong>XXXX On your device.</strong> The app processes data needed for features you
            use—for example contacts, call handling, photos you take in the app, and settings.
            This stays on the device unless you explicitly contact us (e.g. email support) or
            use a feature that sends information to our servers.
          </p>
          <p>
            <strong>Usage analytics.</strong> We use tools such as{" "}
            <strong>Google Firebase Analytics</strong> to collect{" "}
            <strong>anonymised or aggregated</strong> information (for example general usage
            patterns, app version, and device category). We do not use this to show ads or to
            build advertising profiles for third parties.
          </p>
          <p>
            <strong>Crash and error reporting.</strong> We use tools such as{" "}
            <strong>Firebase Crashlytics</strong> to receive crash and error reports (for
            example device type, OS version, and stack traces) so we can diagnose and fix
            problems.
          </p>
          <p>
            We do <strong>not</strong> collect personal data for marketing beyond the above,
            and we do <strong>not</strong> run in-app <strong>ads</strong>.
          </p>

          <h2 style={h2}>3. How we use information</h2>
          <p>
            We use the information described above to operate the app, maintain security and
            reliability, improve features, and respond to support requests. Analytics and crash
            data are used to understand stability and usage in the aggregate, not to sell data.
          </p>

          <h2 style={h2}>4. Third-party services</h2>
          <p>
            Analytics and crash reporting may be processed by <strong>Google</strong> (and
            similar infrastructure providers) according to their terms and our configuration.
            We configure these services for app improvement, not for third-party advertising in
            Tom&apos;s Phone.
          </p>

          <h2 style={h2}>5. Data sharing</h2>
          <p>
            We do not sell personal data. We may disclose limited information where required by
            law, to protect users and the service, or to vendors who process it solely to
            provide infrastructure (for example cloud or analytics providers), under
            appropriate agreements.
          </p>

          <h2 style={h2}>6. Data storage, security, and retention</h2>
          <p>
            We take reasonable steps to protect information. Crash and analytics data are
            retained only as long as needed to operate and improve the service, subject to our
            providers&apos; retention settings. No storage method is perfectly secure.
          </p>

          <h2 style={h2}>7. Permissions</h2>
          <p>
            Android may ask you to grant permissions. Tom&apos;s Phone requests only what is
            needed for the features below. If you deny a permission, some features may not work.
          </p>
          <div style={{ overflowX: "auto", marginTop: 12 }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.95rem",
                border: "1px solid #e8def0",
                borderRadius: 12,
              }}
            >
              <thead>
                <tr style={{ background: "#f5ecfa" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px 12px",
                      borderBottom: "1px solid #e8def0",
                    }}
                  >
                    Area
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px 12px",
                      borderBottom: "1px solid #e8def0",
                    }}
                  >
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Phone &amp; call state
                  </td>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Place and manage calls; cooperate with the system dialer where required.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    SMS
                  </td>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Optional features such as alerts to assistants, only when you configure
                    them.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Camera
                  </td>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Optional features such as contact or ID photos that you choose to capture.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Contacts
                  </td>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Show and call contacts as part of the simplified phone experience.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Call log
                  </td>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Call history and missed-call style reminders where those features are used.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Audio, vibration, wake lock, keyguard
                  </td>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Ringing, volume, vibration, and reliable behaviour during calls and alerts.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    In-call &amp; call screening
                  </td>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    System integration for active calls, answering, and screening as
                    implemented in the app.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Notifications
                  </td>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Important reminders and status (including on newer Android versions).
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Foreground services
                  </td>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Reliable behaviour for ongoing call or related background work as allowed by
                    Android.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Boot completed
                  </td>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Restore behaviour after device restart where you have enabled relevant
                    features.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Battery optimisation
                  </td>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Optional prompts so time-sensitive call or alert behaviour is not stopped by
                    aggressive battery saving, only if you agree.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Device admin
                  </td>
                  <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0eaf5" }}>
                    Optional kiosk or carer lock features—only if you or a carer explicitly
                    completes setup in the app.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={h2}>8. Default phone app and home</h2>
          <p>
            On supported devices you may set Tom&apos;s Phone as the <strong>default phone app</strong>{" "}
            (dialer / calling) or <strong>default home</strong> launcher. That lets Android route
            calls and related intents through the app. Call handling runs <strong>on your device</strong>{" "}
            as part of normal phone operation; we do not use the default-phone role to collect
            the content of your calls for advertising.
          </p>

          <h2 style={h2}>9. International users</h2>
          <p>
            If you use the app outside your home country, information processed by our providers
            may be stored or processed in other countries where they operate.
          </p>

          <h2 style={h2}>10. Children&apos;s privacy</h2>
          <p>
            Tom&apos;s Phone is <strong>not directed at children</strong>. It is intended for
            adults, including older users and carers assisting them. We do not knowingly
            collect personal information from children under 13 (or the minimum age in your
            jurisdiction). If you believe we have collected such information, contact{" "}
            <a href="mailto:support@toms-phone.com" style={link}>
              support@toms-phone.com
            </a>{" "}
            and we will take steps to delete it where appropriate.
          </p>

          <h2 style={h2}>11. Your choices</h2>
          <p>
            You can limit some processing through device settings (for example revoking
            permissions or OS-level analytics options where available). Uninstalling the app
            stops further collection from that device.
          </p>

          <h2 style={h2}>12. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The <strong>Effective date</strong>{" "}
            at the top will change when we do. Continued use of the app after changes means you
            accept the updated policy, unless applicable law requires otherwise.
          </p>

          <h2 style={h2}>13. Contact</h2>
          <p>
            For privacy questions or support:{" "}
            <a href="mailto:support@toms-phone.com" style={link}>
              support@toms-phone.com
            </a>
            . You can also reach us through <strong>in-app messaging or support</strong> where
            the app provides it.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#5c516c", marginBottom: 0 }}>
            This policy is provided for transparency and Google Play requirements. It is not
            legal advice; consider independent review for your jurisdiction.
          </p>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Card, Container, H2, Hero } from "../_components/Chrome";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What Tom's Phone keeps on the phone, what it never collects, why each permission exists, and how to erase everything. No advertising, no analytics, no account.",
};

/**
 * Replaces the policy effective 14 April 2026, which described the PREVIOUS codebase and was wrong
 * about this app in ways that mattered: it claimed Firebase Analytics, Camera, Contacts, Boot
 * completed, Battery optimisation and Device admin — none of which this app declares or uses, and
 * Contacts most of all, since never reading the address book is a deliberate design decision.
 *
 * Source of truth is planning/PRIVACY.md in the app repo, written from the manifest and source
 * rather than from intent. Play's Data Safety declaration has to match this; if one changes, both
 * change. Do not edit this page to describe a behaviour the app does not have.
 */

const EFFECTIVE_DATE = "12 August 2026";

const PERMISSIONS = [
  ["Phone / place calls", "To make a call when a button is pressed."],
  [
    "Call log",
    "To show which calls were missed, so they can be returned.",
  ],
  [
    "Phone state",
    "To show whether voicemail is waiting, and to read the SIM's voicemail number.",
  ],
  [
    "Send SMS",
    "Battery and SOS alerts, to contacts the helper opted in individually.",
  ],
  [
    "In-call & call screening",
    "To be the phone's dialler, and to block unknown callers if the helper turns that on.",
  ],
  [
    "Notifications",
    "For the ongoing notice shown while a missed-call reminder is playing.",
  ],
  ["Vibrate", "Feedback when a button is pressed."],
  [
    "Foreground service",
    "To keep a missed-call reminder running until the call has been returned.",
  ],
  [
    "Internet & network state",
    "Crash reports only, and to tell Wi-Fi from mobile data so they are held back.",
  ],
];

export default function PrivacyPage() {
  return (
    <Container>
      <Hero eyebrow="Tom’s Phone" title="Privacy policy">
        <p className="m-0">
          <strong>Effective date:</strong> {EFFECTIVE_DATE}
          <br />
          <span className="text-sm">
            Replaces the policy effective 14 April 2026, which described an
            earlier version of the app.
          </span>
        </p>
      </Hero>

      <Card>
        <div className="rounded-2xl bg-wash p-5">
          <p className="m-0">
            <strong>In short:</strong> everything the app stores stays on the
            phone. There is no advertising, no analytics, no account, and
            nothing is sold or shared. The only thing that reaches us is a crash
            report, over Wi-Fi, which you can turn off. The only thing that
            reaches anyone else is a battery or SOS text, to contacts you choose.
          </p>
        </div>

        <H2>1. Who we are</H2>
        <p>
          Tom&apos;s Phone is an Android app that turns a phone into a simple,
          large-button phone for someone who finds an ordinary smartphone
          difficult. It is set up by a <strong>helper</strong> — usually a family
          member — on a phone the senior then uses.
        </p>
        <p>
          Contact:{" "}
          <a href="mailto:support@toms-phone.com" className="text-brand">
            support@toms-phone.com
          </a>
        </p>

        <H2>2. What the app keeps on the phone</H2>
        <p>
          Everything the app stores is kept <strong>on the phone itself</strong>,
          in storage private to the app. None of it is sent to us, and none of it
          is uploaded anywhere.
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Contacts you add in the app</strong> — name, phone number,
            spoken name, button colour. These are entries the helper types in.{" "}
            <strong>The app never reads the phone&apos;s address book</strong>;
            it has no permission to, and that was a deliberate design decision.
          </li>
          <li>
            <strong>Settings</strong> — the senior&apos;s name, button layout,
            text size, margins, volume, and the rest.
          </li>
          <li>
            <strong>Emergency medical information</strong>, if the helper fills
            it in: name, date of birth, address, blood type, allergies,
            medications, conditions, notes, emergency contacts, and{" "}
            <strong>a photograph</strong> if one is taken. This exists so
            ambulance crews can see it in an emergency.
          </li>
          <li>
            <strong>A helper PIN</strong>, if set. Stored as a salted hash, never
            as the PIN itself.
          </li>
        </ul>

        <H2>3. The photograph</H2>
        <p>
          The medical card can include a photo of the person the phone is for.
        </p>
        <p>
          The app <strong>does not have camera permission</strong>. When the
          helper chooses to add a photo, the phone&apos;s own camera app opens
          and writes the picture to a temporary file the app owns — or they pick
          a photo the phone already has. The app then shrinks it and keeps it in
          its private storage.
        </p>
        <p>
          <strong>The photograph never leaves the phone.</strong> It is not
          uploaded, not backed up to us, and not shared with anyone. It is
          deleted when the photo is removed, or when app data is reset.
        </p>

        <H2>4. Calls and messages</H2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Calls.</strong> The app places and answers calls, and acts as
            the phone&apos;s dialler. Call details stay in the phone&apos;s own
            call log, which the app reads to show missed calls. We never see
            them.
          </li>
          <li>
            <strong>Text messages.</strong> The app can send an automatic text to
            contacts the helper has <strong>individually opted in</strong> — when
            the battery is low, when the phone is back on charge, or when the SOS
            button is used. It sends only to those contacts, only those messages,
            and it <strong>cannot read any text messages</strong>.
          </li>
          <li>
            <strong>Emergency calls.</strong> The SOS button calls the number the
            helper configured. We are not involved in that call and receive
            nothing about it.
          </li>
        </ul>

        <H2>5. Crash reports</H2>
        <p>
          If the app stops unexpectedly, it can send a crash report so we can
          find and fix the fault. This uses{" "}
          <strong>Google Firebase Crashlytics</strong>.
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>It is on to start with, and can be turned off</strong> —
            Settings → About &amp; help → Crash reports.
          </li>
          <li>
            <strong>
              Reports are sent over Wi-Fi only, never over mobile data.
            </strong>{" "}
            If the phone is on mobile data the report waits until it next has
            Wi-Fi. This matters because many of these phones are pay-as-you-go,
            where using up data credit can stop calls and texts working.
          </li>
          <li>
            A report contains what went wrong and what type of phone it is.{" "}
            <strong>
              It never contains names, phone numbers, messages, contacts, medical
              information, or the photograph.
            </strong>
          </li>
          <li>
            Turning crash reports off also deletes any report still waiting to be
            sent.
          </li>
        </ul>

        <H2>6. What we do not do</H2>
        <ul className="list-disc pl-5">
          <li>
            <strong>No advertising</strong>, and no data sold or shared with
            advertisers.
          </li>
          <li>
            <strong>No usage analytics.</strong> The app contains no analytics
            software. The Firebase Analytics component is deliberately excluded
            from the build, and an automated test fails the build if it ever
            returns.
          </li>
          <li>
            <strong>No account.</strong> There is nothing to sign up for and no
            profile.
          </li>
          <li>
            <strong>No tracking</strong> of location, browsing, or app use.
          </li>
        </ul>
        <p>
          Apart from crash reports, and purchases handled by Google Play,{" "}
          <strong>the app does not use the internet at all</strong>.
        </p>

        <H2>7. Permissions, and why each one exists</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[0.95rem]">
            <thead>
              <tr className="bg-wash text-left">
                <th className="border-b border-line p-3">Permission</th>
                <th className="border-b border-line p-3">Why</th>
              </tr>
            </thead>
            <tbody>
              {PERMISSIONS.map(([name, why]) => (
                <tr key={name}>
                  <td className="border-b border-line p-3 align-top font-medium">
                    {name}
                  </td>
                  <td className="border-b border-line p-3 align-top text-muted">
                    {why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          The app does <strong>not</strong> have permission to read contacts, use
          the camera directly, record audio, or see the phone&apos;s location.
        </p>

        <H2>8. Being the default phone and home app</H2>
        <p>
          Tom&apos;s Phone is designed to be set as the phone&apos;s{" "}
          <strong>default Phone app</strong> and{" "}
          <strong>default Home app</strong>. That is what stops the senior
          reaching confusing screens. It gives the app no additional access to
          personal data beyond the permissions above, and it can be undone at any
          time in Android settings.
        </p>

        <H2>9. Purchases</H2>
        <p>
          Purchases and subscriptions are handled by <strong>Google Play</strong>
          . We never see card details. Google tells the app only whether a
          purchase is active.
        </p>

        <H2>10. Keeping and deleting information</H2>
        <p>
          Information stays on the phone until it is deleted. The helper can
          remove any contact or clear the medical information at any time, and{" "}
          <strong>Reset Tom&apos;s Phone</strong> in settings erases everything
          the app has stored — settings, contacts, medical information, the
          photograph, and the PIN.
        </p>
        <p>
          Uninstalling the app removes its data with it. We hold nothing to
          delete on request, because we hold nothing.
        </p>

        <H2>11. Children</H2>
        <p>Tom&apos;s Phone is not designed for or directed at children.</p>

        <H2>12. Changes to this policy</H2>
        <p>
          If this policy changes we will update this page and its effective date.
          Material changes will be noted in the app.
        </p>

        <H2>13. Contact</H2>
        <p>
          <a href="mailto:support@toms-phone.com" className="text-brand">
            support@toms-phone.com
          </a>
        </p>

        <p className="mt-8 mb-0 text-sm text-muted">
          This policy states what the app does, in plain words, for transparency
          and Google Play&apos;s requirements. It is not legal advice. If you are
          setting up a phone for someone and want to know what is stored, the{" "}
          <Link href="/support" className="text-brand">
            help pages
          </Link>{" "}
          cover the practical side.
        </p>
      </Card>
    </Container>
  );
}

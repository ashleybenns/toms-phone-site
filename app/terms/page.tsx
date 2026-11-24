import type { Metadata } from "next";
import Link from "next/link";
import { Card, Container, H2, Hero } from "../_components/Chrome";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "The terms on which AshBashApps Limited offers Tom's Phone: what the app is and is not, the free trial and the two prices, refunds through Google Play, and what the helper takes on.",
};

/**
 * The Play Console's optional Terms of Service URL points here (decided 2026-11-15: add the page
 * before production, then paste the URL into the trader page). Plain words, in the house voice
 * (TP_June26 planning/BRAND_VOICE.md): what we offer, what it is not, money, what the helper
 * takes on, and nothing that tries to exclude liability for negligence — that would be void under
 * UK consumer law and read worse than nothing. Facts here must match the Play listing and the
 * short spec; if the app changes, this page changes with it.
 */

const EFFECTIVE_DATE = "15 November 2026";

export default function TermsPage() {
  return (
    <Container>
      <Hero eyebrow="Tom’s Phone" title="Terms">
        <p className="m-0">
          <strong>Effective date:</strong> {EFFECTIVE_DATE}
        </p>
      </Hero>

      <Card>
        <div className="rounded-2xl bg-wash p-5">
          <p className="m-0">
            <strong>In short:</strong> Tom&apos;s Phone is an Android app sold
            through Google Play by AshBashApps Limited, a UK company. It is a
            phone app, not a personal alarm or a care service. It is free for
            30 days, then &pound;20 once or &pound;1 a month; if you stop
            paying, the phone keeps working and only your settings screens
            lock. Refunds go through Google Play. Nothing here takes away the
            rights you have as a consumer in the UK.
          </p>
        </div>

        <H2>1. Who we are</H2>
        <p>
          Tom&apos;s Phone is made and offered by{" "}
          <strong>AshBashApps Limited</strong>, a company registered in England
          and Wales, number 13945428, registered office 71-75 Shelton Street,
          Covent Garden, London, WC2H 9JQ. Support:{" "}
          <a href="mailto:support@toms-phone.com" className="text-brand">
            support@toms-phone.com
          </a>
          . Company contact:{" "}
          <a href="mailto:hello@ashbashapps.com" className="text-brand">
            hello@ashbashapps.com
          </a>
          .
        </p>

        <H2>2. What Tom&apos;s Phone is</H2>
        <p>
          An app that turns an ordinary Android phone into a dedicated phone for
          an older or vulnerable person: a few large named buttons, an SOS
          button, and nothing else to wander into. It is set up and looked after
          by a helper — usually a family member — and these terms are between
          us and that helper. The person using the phone does not need to agree
          to anything and is never shown this page.
        </p>
        <p>
          It needs an Android phone running Android 9 or later, with a SIM that
          can make calls and send texts, and it must be set as the phone&apos;s
          default Phone app and default Home app. It is Android only.
        </p>

        <H2>3. What it is not</H2>
        <p>
          Tom&apos;s Phone is <strong>not</strong> a personal alarm, a telecare
          or monitoring service, a fall detector, or a medical device. Nobody is
          watching, and it does not know where the phone is. The SOS button
          places an ordinary phone call to the emergency services through the
          phone and its network; like any phone call it depends on the phone
          itself, the SIM, the network, the battery and the signal where the
          phone is.
          The medical information screen holds what the helper typed in; it is
          for whoever comes to help and is not a medical record.
        </p>
        <p>
          If the person you look after needs someone alerted when they fall,
          or a centre that watches over them day and night, Tom&apos;s Phone is
          not a substitute for that.
        </p>

        <H2>4. The free trial and the price</H2>
        <p>
          The app is free to use in full for <strong>30 days</strong> from
          first use, with nothing to enter. After that, buying it keeps the
          helper&apos;s settings open: <strong>&pound;20 once</strong>, or{" "}
          <strong>&pound;1 a month</strong>, as shown on Google Play at the
          time of purchase. Those are the UK prices. It is also sold in
          Ireland, the United States, Canada, Australia and New Zealand, at
          the price Google Play shows there in the local currency.
        </p>
        <p>
          <strong>If you do not buy it, or stop paying, the phone keeps
          working.</strong> Calls, the SOS button, missed-call reminders and
          text alerts carry on exactly as they were. What locks is the
          helper&apos;s settings area, so changes wait until it is bought.
          Backing up the setup, resetting the app and Exit app are never
          locked.
        </p>

        <H2>5. Paying, cancelling and refunds</H2>
        <p>
          Google Play sells the app to you on our behalf: for purchases in the
          UK, <strong>Google is the merchant of record</strong>, acting as our
          agent. Payment is taken by Google Play, under Google Play&apos;s own
          terms, and we never see your card details. A monthly
          plan is cancelled in Google Play — in the app, Settings ▸ Trial &amp;
          purchase ▸ Manage subscription takes you there, or go to
          play.google.com/store/account/subscriptions — and it runs to the end
          of the month already paid for. Refund requests also go through Google
          Play; your statutory rights as a consumer, including your rights if
          the app is faulty, are not affected by anything here.
        </p>

        <H2>6. What the helper takes on</H2>
        <p>
          Because the person using the phone relies on how it was set up, the
          helper is the one who:
        </p>
        <ul className="list-disc pl-5">
          <li>
            sets SOS up, tries it with the test call, and then{" "}
            <strong>makes it live</strong> — it starts in test and makes no
            call until then;
          </li>
          <li>
            keeps the contacts, the medical information and the people who
            receive text alerts up to date;
          </li>
          <li>
            follows the Device setup advice in the app (screen lock, SIM PIN,
            battery settings and the rest) — Tom&apos;s Phone advises on the
            phone&apos;s own settings and never changes one;
          </li>
          <li>
            is entitled to set up that phone, and to record the name, contacts
            and medical information of the person using it.
          </li>
        </ul>

        <H2>7. Your information</H2>
        <p>
          What the app keeps on the phone, the little it ever sends, and why
          each permission exists are in the{" "}
          <Link href="/privacy" className="text-brand">
            privacy policy
          </Link>
          . There is no account, no advertising and no analytics.
        </p>

        <H2>8. Our responsibility</H2>
        <p>
          We will provide the app with reasonable care and skill, and as
          described on this site and on Google Play. Nothing in these terms
          limits our responsibility for death or personal injury caused by our
          negligence, for fraud, or for anything else UK law does not allow us
          to limit. Beyond that, we are not responsible for a call that does not
          connect because of the phone, the SIM, the network or the battery,
          nor for SOS left in test, or a number never checked with the test
          call.
        </p>

        <H2>9. Updates and changes</H2>
        <p>
          We may update the app through Google Play to fix faults and improve
          it. If these terms change we will update this page and its effective
          date. If the monthly price changes, Google Play tells you before you
          are charged it.
        </p>

        <H2>10. Law</H2>
        <p>
          These terms are governed by the law of England and Wales, and the
          courts of England and Wales will deal with any dispute — or, if you
          live in Scotland or Northern Ireland, the courts there. Nothing here
          affects the consumer rights you have under UK law.
        </p>

        <p className="mt-8 mb-0 text-sm text-muted">
          These terms are written in plain words. They are not legal advice.
          The{" "}
          <Link href="/support" className="text-brand">
            help pages
          </Link>{" "}
          cover setting up and everyday questions.
        </p>
      </Card>
    </Container>
  );
}

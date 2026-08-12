import Link from "next/link";
import { Card, Container, H2, Hero } from "./_components/Chrome";

/**
 * The introduction.
 *
 * Written for the person who buys and sets it up — an adult child or other family helper — not for
 * the senior, who never sees this page. So it answers their questions in their order: what is it,
 * will it actually help, what does it cost, what do I have to do.
 */

const FEATURES = [
  {
    title: "A few big buttons, with names on",
    body: "The home screen shows the people who matter, by name, in letters large enough to read without glasses. One press calls them. There is no scrolling, no app drawer, and nothing else to press by mistake.",
  },
  {
    title: "An SOS button",
    body: "A large emergency button that calls whoever you choose — 999, a neighbour, or your own mobile. It asks for confirmation first, so it cannot go off in a pocket, and it can text the people you pick to tell them it happened.",
  },
  {
    title: "Missed calls that get returned",
    body: "A missed call shows as a name, not a number, and stays until it has been dealt with. If you are the one who was missed, the phone can keep gently reminding until you and they have actually spoken.",
  },
  {
    title: "Nowhere to get lost",
    body: "Tom's Phone becomes the phone's home screen, so pressing Home always comes back here. Settings, notifications and the other apps stay out of reach — not hidden as a trick, just not in the way.",
  },
  {
    title: "Emergency medical information",
    body: "Allergies, medications, conditions and who to contact, kept on the phone for ambulance crews to find without needing a PIN. It never leaves the phone.",
  },
  {
    title: "Set up by you, not by them",
    body: "Everything is configured in a helper area reached by a deliberate gesture, optionally behind a PIN. You choose the buttons, the colours, the text size, and what SOS does.",
  },
];

export default function HomePage() {
  return (
    <Container>
      <Hero
        eyebrow="For Android phones"
        title="A phone that stays simple, for someone who finds one hard"
      >
        <p className="m-0 text-lg">
          Tom&apos;s Phone turns an ordinary Android phone into a large-button
          phone showing a few named people, an SOS button, and nothing else to
          get lost in. You set it up; they just use it.
        </p>
        <p className="mt-5 mb-0 flex flex-wrap gap-3">
          <Link
            href="/support"
            className="inline-block rounded-xl bg-brand px-5 py-3 font-semibold text-white no-underline hover:bg-brand-dark"
          >
            How to set it up
          </Link>
          <Link
            href="/support#faq"
            className="inline-block rounded-xl border border-line bg-card px-5 py-3 font-semibold text-brand no-underline hover:border-brand"
          >
            Common questions
          </Link>
        </p>
      </Hero>

      <Card>
        <H2>Who it is for</H2>
        <p>
          Someone who used to manage a phone and now finds a smartphone
          bewildering — through failing eyesight, arthritis, a stroke, dementia,
          or simply never having got on with it. They can still hold a
          conversation and still want to call their family. The phone is the
          part that stopped working.
        </p>
        <p className="mb-0">
          And it is for the person looking after them, who is tired of hearing{" "}
          <em>&ldquo;I pressed something and now it won&apos;t work.&rdquo;</em>
        </p>
      </Card>

      <Card>
        <H2>What it does</H2>
        <div className="grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title}>
              <h3 className="mt-0 mb-1.5 font-bold">{f.title}</h3>
              <p className="m-0 text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <H2>What it costs</H2>
        <p>
          Free to try for a month, with everything working. After that it is{" "}
          <strong>£1 a month</strong>, or <strong>£20 once</strong> if you would
          rather not think about it again.
        </p>
        <p className="mb-0 rounded-2xl bg-wash p-5">
          <strong>The phone never stops working if you stop paying.</strong>{" "}
          Calls, the SOS button, missed calls and everything the senior touches
          keep going regardless. What locks is the helper&apos;s settings area —
          so you cannot make changes until it is bought, but nobody is ever left
          unable to call for help over a subscription. You can always take a
          backup of your setup, reset the app, or stop using it.
        </p>
      </Card>

      <Card>
        <H2>What you need</H2>
        <ul className="mb-0 list-disc pl-5">
          <li>
            An Android phone, roughly 2018 or newer (Android 9 and above). Not
            an iPhone — Apple does not allow an app to replace the home screen
            and dialler this way.
          </li>
          <li>A SIM with a normal call and text allowance.</li>
          <li>
            About twenty minutes to set it up, ideally with the phone in front
            of you.
          </li>
        </ul>
      </Card>
    </Container>
  );
}

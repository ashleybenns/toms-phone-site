import type { Metadata } from "next";
import Link from "next/link";
import { Card, Container, H2, Hero } from "../_components/Chrome";

export const metadata: Metadata = {
  title: "Help & support",
  description:
    "How to set up Tom's Phone, how to get back into the helper settings, what happens in an emergency, and answers to common questions.",
};

/**
 * The page the app's "Guides and help" button is for.
 *
 * Everything here is written against what the app actually does, not what would be nice — a helper
 * reading this has the phone in their hand and will catch a lie immediately. Where a limitation is
 * real it is stated, because finding it out later is worse.
 */

const FAQS = [
  {
    q: "Can they still get out of it and into the normal phone?",
    a: "Not by accident, which is the point. Tom's Phone becomes the home screen, so pressing Home comes back to it. Getting to the helper settings needs a deliberate sideways slide across the words at the top — not something a wandering finger finds. You can add a PIN on top of that if they are the exploring sort.",
  },
  {
    q: "What happens when somebody rings who is not in the contacts?",
    a: "By default it rings as normal and shows as “Unknown” rather than a number they cannot place. If nuisance calls are the problem, there is a setting that lets only saved contacts ring — everything else is silently blocked before it disturbs them. Add the doctor and the pharmacy as contacts first.",
  },
  {
    q: "Does the SOS button call 999 straight away?",
    a: "Only if you set it to. It always asks for confirmation first so it cannot fire in a pocket, and you choose what it dials — 999, your own mobile, a neighbour, or the surgery. It can also text the people you pick to tell them it happened. There is a test mode so you can try the whole thing without calling anyone real.",
  },
  {
    q: "Will I know if something is wrong?",
    a: "You can be texted when the battery is low and again when it is back on charge — the most common reason a phone quietly stops working. If you have a button on their home screen, you also get told about missed calls to you, and the phone keeps reminding them until you have actually spoken.",
  },
  {
    q: "I have forgotten the helper PIN.",
    a: "The only way past it is to reset the app, which clears everything and starts again at first-launch. That is why the backup exists: take one from the helper settings when you finish setting up, keep the file somewhere safe, and a forgotten PIN costs you five minutes instead of an evening.",
  },
  {
    q: "Can I try it on my own phone first?",
    a: "Yes, and it is a good idea. Install it, set it as the Home and Phone app, and use it for an afternoon. When you are done, the Exit app button in the helper settings takes you to the Android screen where you set your normal home screen and dialler back.",
  },
  {
    q: "Does it work on an iPhone?",
    a: "No. Apple does not let an app replace the home screen and the dialler, which is what makes this work. Android only.",
  },
  {
    q: "What happens to my information?",
    a: "It stays on the phone. Contacts, settings, and medical information are never uploaded, and the app never reads the phone's own address book. The only thing that ever leaves is an optional crash report, over Wi-Fi only. The full detail is in the privacy policy.",
  },
];

const STEPS = [
  {
    title: "Install it and open it",
    body: "Get Tom's Phone from Google Play on the phone the senior will use. It opens into a short setup rather than straight into the finished screen.",
  },
  {
    title: "Let it be the Home and Phone app",
    body: "Android will ask twice — once to be the home screen, once to be the dialler. Both matter: the first is what stops them getting lost, the second is what lets calls use the big, simple call screen. Without them the app still runs, but it is just another app.",
  },
  {
    title: "Put their name in",
    body: "The top of the screen reads “[Name]'s Phone” when nothing else is happening, which is quietly reassuring on a phone that is not theirs by habit yet.",
  },
  {
    title: "Add the people who matter",
    body: "Two to four is usually right. Each gets a large button in a colour you choose. Resist adding everybody — a screen of eight names is harder to use than a screen of three, and choosing is the part that is difficult.",
  },
  {
    title: "Set up the SOS button",
    body: "Choose what it calls and who gets a text. Then use the test mode and watch them try it, because a button nobody has ever pressed is not a safety feature.",
  },
  {
    title: "Fill in the medical information",
    body: "Allergies, medications, conditions, and who to contact. Ambulance crews look for this, and it can be seen in an emergency without knowing any PIN.",
  },
  {
    title: "Take a backup, then hand it over",
    body: "Export your settings from the helper area and keep the file. It is the difference between a lost phone being annoying and being an evening's work.",
  },
];

export default function SupportPage() {
  return (
    <Container>
      <Hero eyebrow="Help & support" title="Setting it up, and getting help">
        <p className="m-0 text-lg">
          Written for the helper. If you are stuck on something that is not
          here, email{" "}
          <a href="mailto:support@toms-phone.com" className="text-brand">
            support@toms-phone.com
          </a>{" "}
          and say which phone you are using — it genuinely helps.
        </p>
      </Hero>

      <Card>
        <H2>Setting it up</H2>
        <p className="text-muted">
          About twenty minutes, best done with the phone in front of you and
          before you hand it over.
        </p>
        <ol className="mt-4 mb-0 list-none p-0">
          {STEPS.map((s, i) => (
            <li key={s.title} className="mb-5 flex gap-4 last:mb-0">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-wash font-bold text-brand"
              >
                {i + 1}
              </span>
              <span>
                <strong className="block">{s.title}</strong>
                <span className="text-muted">{s.body}</span>
              </span>
            </li>
          ))}
        </ol>
      </Card>

      <Card>
        <H2>Getting back into the helper settings</H2>
        <p>
          <strong>
            Slide a finger sideways across the words at the very top of the home
            screen.
          </strong>{" "}
          Not a tap, not a long press — a deliberate sideways slide across the
          status text.
        </p>
        <p className="mb-0 text-muted">
          It is hidden this way on purpose. It had to be something a senior
          would never do by accident but a helper could do one-handed while
          holding a cup of tea, without adding a button to a screen whose whole
          value is having very few of them.
        </p>
      </Card>

      <Card>
        <H2>If something is wrong</H2>
        <dl className="m-0">
          <dt className="font-bold">The home screen has gone back to normal</dt>
          <dd className="mt-1 mb-4 ml-0 text-muted">
            Something has taken the Home role back — usually a system update, or
            a tap on &ldquo;always&rdquo; against another launcher. Open Tom&apos;s
            Phone from the app list; it will notice and offer to fix it.
          </dd>

          <dt className="font-bold">Calls do not use the big call screen</dt>
          <dd className="mt-1 mb-4 ml-0 text-muted">
            The Phone role has been lost in the same way. The app re-checks when
            you come back from Android settings, so put it back and reopen the
            app.
          </dd>

          <dt className="font-bold">
            They are missing calls because the phone is silent
          </dt>
          <dd className="mt-1 mb-4 ml-0 text-muted">
            Check Do Not Disturb and the ringer on the phone itself. Tom&apos;s
            Phone stops the volume keys lowering the ring on its own screens, but
            it cannot override a system-wide silent mode.
          </dd>

          <dt className="font-bold">The phone is dead every time you visit</dt>
          <dd className="mt-1 mb-4 ml-0 text-muted">
            Turn on the low-battery text so you hear about it before they do.
            Charging habits are the single most common reason one of these
            phones stops working.
          </dd>

          <dt className="font-bold">I want to stop using it</dt>
          <dd className="m-0 ml-0 text-muted">
            <strong>Exit app</strong> in the helper settings takes you to the
            Android screen for choosing your home screen and dialler. Set them
            back to the phone&apos;s own, and Tom&apos;s Phone is an ordinary app
            again. <strong>Reset Tom&apos;s Phone</strong> erases everything it
            has stored. Neither is behind the paywall.
          </dd>
        </dl>
      </Card>

      <Card className="scroll-mt-6">
        <div id="faq">
          <H2>Common questions</H2>
          <dl className="m-0">
            {FAQS.map((f) => (
              <div key={f.q} className="mb-5 last:mb-0">
                <dt className="font-bold">{f.q}</dt>
                <dd className="mt-1 mb-0 ml-0 text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Card>

      <Card>
        <H2>Still stuck</H2>
        <p className="mb-0">
          Email{" "}
          <a href="mailto:support@toms-phone.com" className="text-brand">
            support@toms-phone.com
          </a>
          . Tell us what phone it is and what you expected to happen — and please
          do not wait until you are furious. Ideas for things that would help are
          just as welcome as faults. What the app stores and sends is set out in
          the{" "}
          <Link href="/privacy" className="text-brand">
            privacy policy
          </Link>
          .
        </p>
      </Card>
    </Container>
  );
}

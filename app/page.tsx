import Image from "next/image";
import Link from "next/link";
import { Card, Container, H2, Hero } from "./_components/Chrome";

/**
 * The home page — a brochure.
 *
 * Written for the person who buys and sets it up (an adult child or other family helper), never
 * for the person who will use the phone. It is cut from the Play listing, which is cut from the
 * short spec, which is cut from AGENTS.md (TP_June26: planning/BRAND_VOICE.md §8), in that order,
 * so a claim appears here only if it appears there. The order of claims is the ranked USP list
 * (planning/USPS.md); the screenshots carry USP #2 — the same phone set up several ways — so the
 * page need not say "configurable" in words. Re-cut 2026-11-15.
 *
 * 2026-11-17 (BRAND_VOICE.md §1, §2, §8): the new tag line; "Why I made it", Ashley's origin story
 * in the first person (its facts match AGENTS.md §28; it is not on the Play listing); who it is for
 * and who it isn't for; and the invitation to say what would help. Section order is BRAND_VOICE §8,
 * item 4.
 */

const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.ashbashapps.tomsphone";

/** The eight listing screenshots (TP_June26 art/play_listing/phone), with the USP captions. */
const SHOTS = [
  {
    src: "/screenshots/01_home_one_button.png",
    alt: "Mary's Phone: one large blue button reading Sarah, and a red SOS 999 button",
    caption: "One big button, if that is all they need.",
  },
  {
    src: "/screenshots/02_home_standby.png",
    alt: "Mary's Phone: buttons for Sarah, David and Doctor, a No Missed Calls button, and SOS 999",
    caption: "Their people, by name. One press calls.",
  },
  {
    src: "/screenshots/03_home_full.png",
    alt: "Mary's Phone with the time, four named buttons, No Missed Calls, Contacts, Keypad, Voicemail and SOS 999",
    caption: "As full as they can manage: people, missed calls, contacts, a keypad, voicemail, the time.",
  },
  {
    src: "/screenshots/04_missed_call_sarah.png",
    alt: "The status reads Missed call from Sarah and the missed-call button reads Sarah",
    caption: "A missed call shows who rang, by name, and one press returns it.",
  },
  {
    src: "/screenshots/06_incoming_call.png",
    alt: "Sarah is calling, with a green Answer button and a red Decline button",
    caption: "Who is calling, in words they can read.",
  },
  {
    src: "/screenshots/05_sos_confirm_test.png",
    alt: "The SOS confirmation screen in test mode: a banner saying no real call will be made, Press 2 times, a TEST button and a Medical button",
    caption: "SOS calls the emergency services. It starts in test.",
  },
  {
    src: "/screenshots/07_layout_preview.png",
    alt: "The helper's Home screen buttons page, with a live preview of Mary's screen",
    caption: "You decide, with a preview of their screen as you go.",
  },
  {
    src: "/screenshots/08_settings_hub.png",
    alt: "The Helper settings page: Start here, Device setup, People & buttons, Safety",
    caption: "A settings area the person is not shown.",
  },
];

const FOR_THEM = [
  {
    title: "One press calls a person",
    body: "Big, text-only buttons with the names of the people they call, in colours you choose. There is no app drawer, no settings icon and nothing to wander into; any list or keypad has a big Back button, and a phone put down comes back to that screen by itself.",
  },
  {
    title: "The ring says their name",
    body: "The phone rings with its own ringtone and says their name — “Mary, that’s your phone ringing.” It can say who is calling too. An unknown number is never read out.",
  },
  {
    title: "A missed call is not forgotten",
    body: "If they miss your call and you have turned the reminder on, the phone asks them by name to ring back, every 1½, 5 or 10 minutes, until a call between you connects. A missed-call button, if you add one, shows who rang and returns the call with one press.",
  },
  {
    title: "SOS calls the emergency services",
    body: "Police, fire or ambulance, after a confirmation of one, two or three taps, so it is hard to set off by accident. It starts in test mode and makes no call until you make it live; a test call lets you rehearse it first.",
  },
  {
    title: "Medical information for whoever comes to help",
    body: "Allergies, medications, conditions, where a ReSPECT or DNACPR form is kept, who to contact — a one-second hold away on the SOS call screen, with no PIN in the way.",
  },
  {
    title: "Loud — and the battery speaks for itself",
    body: "Calls start on the loudspeaker and stay loud; the volume keys cannot silence the phone by accident. When the battery is low, the phone asks them by name to plug it in, and says so when it is charging again.",
  },
];

const FOR_YOU = [
  {
    title: "Texts, only when something needs you",
    body: "Texts to the people you opt in, one at a time: when the battery is low (once more if it stays unplugged), when it is back on charge, and when SOS is pressed or cancelled. Nothing else is texted unless you ask for it.",
  },
  {
    title: "As simple or as full as they can manage",
    body: "Their screen can be one big call button or up to nine — people, a missed-call button and the extras. You decide, with a preview of their screen as you go.",
  },
  {
    title: "A settings area they are not shown",
    body: "Reached by a gesture you know and they do not. Lock it with a PIN if you like.",
  },
  {
    title: "Block unknown callers",
    body: "Off unless you turn it on: then only saved contacts and voicemail can ring. Blocking pauses for 48 hours after any emergency call, so the services can ring back.",
  },
  {
    title: "Advice on the phone’s own settings",
    body: "Screen lock, SIM PIN, notifications, battery saving and the rest, with the menu paths. Tom’s Phone changes none of them.",
  },
  {
    title: "Back up and restore",
    body: "Save the setup to a file and restore it on a new phone. The medical information and the PIN stay on the phone they were typed into.",
  },
];

export default function HomePage() {
  return (
    <Container>
      <Hero
        eyebrow="A big-button phone for Android"
        title="Nothing to learn. Nothing to remember."
      >
        <p className="m-0 text-lg">
          Tom&apos;s Phone turns an ordinary Android phone into one simple
          screen for someone a smartphone has become too much for: their name
          at the top, a few big buttons with the names of the people they
          call, and an SOS button. They press a name, and it calls.
        </p>
        <p className="mt-3 mb-0 text-lg">
          You set it up and look after it. They just use it.
        </p>
        <p className="mt-5 mb-0 flex flex-wrap gap-3">
          <a
            href={PLAY_URL}
            className="inline-block rounded-xl bg-brand px-5 py-3 font-semibold text-white no-underline hover:bg-brand-dark"
          >
            Get it on Google Play
          </a>
          <Link
            href="/support"
            className="inline-block rounded-xl border border-line bg-card px-5 py-3 font-semibold text-brand no-underline hover:border-brand"
          >
            How to set it up
          </Link>
        </p>
      </Hero>

      <Card>
        <H2>One phone, set up several ways</H2>
        <p className="text-muted">
          The same phone, as simple or as full as the person can manage. You
          choose the people, the colours, the order and the number of buttons.
        </p>
        <ul className="m-0 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-4">
          {SHOTS.map((s) => (
            <li key={s.src} className="m-0">
              <figure className="m-0">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={1170}
                  height={2340}
                  sizes="(min-width: 640px) 200px, 45vw"
                  className="h-auto w-full rounded-2xl border border-line"
                />
                <figcaption className="mt-2 text-sm text-muted">
                  {s.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <H2>For the person using it</H2>
        <div className="grid gap-6 sm:grid-cols-2">
          {FOR_THEM.map((f) => (
            <div key={f.title}>
              <h3 className="mt-0 mb-1.5 font-bold">{f.title}</h3>
              <p className="m-0 text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card id="story">
        <H2>Why I made it</H2>
        <p>
          I built the first Tom&apos;s Phone for my mum, Wanda, when she was
          96. She had tried phones made for older people and couldn&apos;t learn
          another one. She needed to make and answer a call with one tap,
          however tired or confused she was.
        </p>
        <p>
          What I didn&apos;t expect was how much the missed-call reminder would
          matter. If Mum missed my call because she was asleep or in another
          room, her phone told her, by name, to ring me back, and kept telling
          her until she did. I no longer had to keep ringing back. And a text
          when her phone went back on charge told me the battery hadn&apos;t
          died. I found that very reassuring.
        </p>
        <p>
          Every family is different, so I rebuilt it for anyone to set up for
          the person they look after, as simple or as full as they can manage.
        </p>
        <p className="mb-0 font-semibold">Ashley</p>
      </Card>

      <Card>
        <H2>For you, the helper</H2>
        <div className="grid gap-6 sm:grid-cols-2">
          {FOR_YOU.map((f) => (
            <div key={f.title}>
              <h3 className="mt-0 mb-1.5 font-bold">{f.title}</h3>
              <p className="m-0 text-muted">{f.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 mb-0">
          That&apos;s the short version. Margins for a hand that curls round the
          phone, a press that counts after a held touch, and every other
          setting are in{" "}
          <Link href="/features" className="text-brand">
            everything it does
          </Link>
          .
        </p>
      </Card>

      <Card>
        <H2>Who it is for</H2>
        <p>
          Someone who used to manage a phone and now finds a smartphone too
          much. They can still hold a conversation and still want to call
          their family. The phone is the part that stopped working. Families
          set it up for:
        </p>
        <ul className="mt-0 mb-4 list-disc pl-5">
          <li>a parent whose eyesight or hands aren&apos;t what they were</li>
          <li>someone whose memory comes and goes</li>
          <li>
            someone who holds a phone their own way, or rests a finger on the
            screen without meaning to
          </li>
          <li>someone who has never got on with a smartphone</li>
        </ul>
        <p>
          And it is for the person looking after them, who is tired of hearing{" "}
          <em>&ldquo;I pressed something and now it won&apos;t work.&rdquo;</em>
        </p>
        <h3 className="mt-6 mb-1.5 font-bold">Who it isn&apos;t for</h3>
        <p className="mb-0">
          If they can already open and use other apps reliably, they don&apos;t
          need Tom&apos;s Phone. It is a phone for calls: no texts, no internet,
          no other apps. That is on purpose.
        </p>
      </Card>

      <Card>
        <H2>What it does not do</H2>
        <p>
          No ads. No analytics. No account to create. It works without
          internet; only buying it needs a connection. It is not a personal
          alarm or a telecare service, it does not know where the phone is, and
          nobody is watching.
        </p>
        <p className="mb-0">
          It never reads the phone&apos;s own address book; the contacts are the
          ones you type in. Names, numbers and the medical information stay on
          the phone. Apart from the texts you set up, the only thing that ever
          leaves it is an optional crash report, sent only on a connection that
          does not charge for data, and you can switch that off. The{" "}
          <Link href="/privacy" className="text-brand">
            privacy policy
          </Link>{" "}
          says all of this in full.
        </p>
      </Card>

      <Card>
        <H2>Setting it up</H2>
        <p>
          Any Android phone from Android 9 (2018 or so) will do &mdash; probably
          one you already have. It is Android only. The phone needs a SIM with
          a normal call and text allowance.
        </p>
        <p className="mb-0">
          Tom&apos;s Phone must be set as the phone&apos;s default Phone app and
          default Home app; the Start here page in its settings walks you
          through both. That is what gives the person their one screen, and it
          can be undone at any time. The{" "}
          <Link href="/support" className="text-brand">
            setup guide
          </Link>{" "}
          takes it step by step, with the phone in front of you.
        </p>
      </Card>

      <Card>
        <H2>Price</H2>
        <p>
          Free for 30 days from first use, with nothing to enter. After that,
          buying it lets you keep changing the settings:{" "}
          <strong>&pound;20 once</strong>, or <strong>&pound;1 a month</strong>,
          through Google Play. Available in the UK.
        </p>
        <p className="mb-0 rounded-2xl bg-wash p-5">
          <strong>The phone keeps working either way.</strong> Calls, the SOS
          button and missed-call reminders are never affected. What locks is
          the helper&apos;s settings area; backing up, resetting and Exit app
          are never locked.
        </p>
      </Card>

      <Card>
        <H2>Tell me what would help</H2>
        <p className="mb-0">
          Tom&apos;s Phone is made by one person, and I keep changing it. If
          something would make it work better for the person you look after,
          write to me at{" "}
          <a href="mailto:support@toms-phone.com" className="text-brand">
            support@toms-phone.com
          </a>
          , and tell me who you set it up for.
        </p>
      </Card>
    </Container>
  );
}

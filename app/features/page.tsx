import type { Metadata } from "next";
import Link from "next/link";
import { Card, Container, H2, Hero } from "../_components/Chrome";

/**
 * Everything it does — the full feature list, for the helper deciding and the helper setting up.
 *
 * The home page carries the main things in USP order; this page carries all of them, grouped the
 * way the helper settings are, with each setting's own label (verbatim from TP_June26
 * app/src/main/res/values/strings.xml) and the page it is on. Every claim is pulled from AGENTS.md
 * (§5–§19) and checked against the app's code and strings on 2026-11-17: timings and ranges from
 * config/ConfigModels.kt (TapResponseConfig, NoTouchMargins), tap behaviour from ui/SeniorTapGesture.kt.
 * When a setting, label or range changes in the app, this page changes with it
 * (TP_June26 planning/PROPAGATION.md §1 and §3).
 */

export const metadata: Metadata = {
  title: "Everything it does",
  description:
    "Every feature of Tom's Phone, the big-button phone for Android: what it does for the person using the phone, what you can set up, and where to find it.",
};

type Feature = {
  title: string;
  body: string;
  /** Short points under the body, for a setting with several options. */
  points?: string[];
  /** Where the setting is: the helper settings page and the setting's own label. */
  where?: string;
};

type Section = {
  id: string;
  name: string;
  intro: string;
  features: Feature[];
};

const SECTIONS: Section[] = [
  {
    id: "people",
    name: "Their people, and their buttons",
    intro:
      "The home screen holds only what they can manage. You decide what that is, and you can change it as things change.",
    features: [
      {
        title: "One press calls a person",
        body: "Each person gets a big button with their name on it, in a colour you choose. Their name on the button can be short (“Doctor”) while the phone says the full name out loud.",
        where: "People & buttons ▸ Contacts",
      },
      {
        title: "As simple or as full as they can manage",
        body: "Up to nine buttons in all, or just one. You choose the people, any extra buttons, and the order. A live preview of their screen shows the result as you go, says how many letters of a name will fit, and tells you plainly when buttons are getting too small: “Good — buttons and text are comfortably large”, or a warning.",
        where: "People & buttons ▸ Home screen buttons",
      },
      {
        title: "Buttons that never move",
        body: "Once you leave the settings, nothing on their screen moves or changes size. Only words change: the lines at the top, and a button that shows a name or a count. What they learn stays where they learned it.",
      },
      {
        title: "The shape says what a button does",
        body: "A button that calls someone is a rounded bar. A button that opens a page (contacts, the keypad, the list of missed calls) has a pointed end, like a signpost. SOS is the only round-ended button. They don’t need to read a button to know what kind it is.",
      },
      {
        title: "Extra buttons, only if they help",
        body: "A contacts list, a keypad, voicemail, and Screen off. Every page these open has a big Back button, and goes back to the home screen by itself if it is left alone: after 30 seconds on a list, 2 minutes on the keypad.",
        where: "People & buttons ▸ Home screen buttons",
      },
      {
        title: "Missed calls, the simple way or the full way",
        body: "A missed-call button shows who rang, by name, and one press calls them back. Or, for someone who can read a page, a list of every missed call. Choose one, not both; the settings warn you if you choose neither. A caller who isn’t in their contacts shows as “Unknown”, never as a number, and an unknown international number, or in the UK an unknown premium-rate number, is never offered for a call back, because some scam calls ring once hoping to be returned at a high charge.",
        where: "People & buttons ▸ Home screen buttons",
      },
      {
        title: "Reminders to ring you back",
        body: "If they miss a call from someone with a home button, the phone can say so out loud straight away (“Wanda, you missed a call from Ashley. Please call Ashley now.”) and keep saying it until a call between you connects. It is off until you turn it on for that person. Reaching voicemail counts as connecting, because the phone can’t tell the difference. The reminder is silent while there is no signal, and the top line says “No phone signal”.",
        points: [
          "Turn it on for each person: People & buttons ▸ Contacts",
          "How often it repeats, every 1½, 5 or 10 minutes: Calls & voicemail ▸ Missed-call reminder",
        ],
      },
    ],
  },
  {
    id: "touch",
    name: "Made for the way they hold and touch a phone",
    intro:
      "Many people who struggle with a smartphone don’t tap it the way it expects. These settings make the phone fit their hands, rather than the other way round. Try them with the person, using the tap test.",
    features: [
      {
        title: "No-touch margins, for fingers that curl round the edge",
        body: "Some people hold a phone with their fingers wrapped round the sides, or rest its bottom edge in their palm. On an ordinary phone that grip presses things, so they learn to hold it loosely, and a loosely held phone gets dropped. Side and bottom margins keep every button away from where those fingers land, so they can hold the phone firmly. The SOS button sits further in again, away from the bottom corners. You set each margin in small steps and see the result in the preview.",
        where: "Screen & touch ▸ No-touch margins",
      },
      {
        title: "Tap response: how a press counts",
        body: "Choose the one that matches how they already touch the screen:",
        points: [
          "Tap and release: the usual tap. Shake protection (Off, Low, Med or High) ignores very brief brushes.",
          "Tap and hold: for someone who doesn’t tap but presses, and keeps pressing until something happens. The button works as soon as it has been held for the time you set, from 0.3 to 1.5 seconds, without waiting for the finger to lift. A brush shorter than that does nothing.",
          "Accumulating touch: for shaky hands. Short touches add up, and the phone buzzes softly as each one counts. When the total reaches the time you set (0.3 to 1.2 seconds) the button works; if they stop, the count starts again after 2 to 10 seconds.",
        ],
        where: "Screen & touch ▸ Tap test",
      },
      {
        title: "One button at a time",
        body: "While one finger is pressing a button, a second finger or a resting palm can’t press another. A finger left resting on a button for more than 2 seconds stops counting as a press, so a hand laid on the screen doesn’t make a call.",
      },
      {
        title: "The tap test",
        body: "A practice page with one big button. Sit with them, try each tap response, and count how many presses register before you choose.",
        where: "Screen & touch ▸ Tap test",
      },
      {
        title: "A buzz they can feel",
        body: "A short buzz confirms each press: Off, Normal or Strong, with a Feel it button to try it. There are no buzz patterns to learn.",
        where: "Screen & touch ▸ Tap feedback (buzz)",
      },
      {
        title: "Text size and weight, within safe limits",
        body: "Make the text larger or smaller, and bold or not. The phone keeps it within the range where every name still fits and every button stays big enough to press. It ignores the phone’s own text size and bold settings, so changing those can’t rearrange their screen.",
        where: "Screen & touch ▸ Text size",
      },
      {
        title: "Dark or light",
        body: "A dark or light background. Button colours and SOS keep their contrast and meaning either way.",
        where: "Screen & touch",
      },
      {
        title: "The time, if it helps",
        body: "The time on the last of the lines at the top of the screen. Off unless you turn it on.",
        where: "Screen & touch ▸ Show the time",
      },
      {
        title: "A screen that rests, and wakes for a call",
        body: "Whatever you choose, the screen wakes for a call.",
        points: [
          "Stay on while charging (recommended): off the charger, the screen rests black to save battery, showing only “Wanda’s Phone” and “Touch to wake”. A touch anywhere brings the home screen straight back.",
          "Always stay on: the same rest, but only below 20% battery when unplugged, so there is always enough left for calls.",
          "Use the phone’s normal timeout: the screen switches off the way it would on any other phone.",
        ],
        where: "Screen & touch ▸ Screen power",
      },
    ],
  },
  {
    id: "calls",
    name: "Calls they can hear, and answer",
    intro:
      "Calls start loud and stay loud, the ring tells them it’s their phone, and nothing changes between one call and the next.",
    features: [
      {
        title: "The ring says their name",
        body: "Its own ringtone, and a voice: “Wanda, that’s your phone ringing.” It can say who is calling too. You choose who it names out loud: no one, people with a home button (the default), or everyone in their contacts, because the whole room hears the ring. An unknown number is never read out. The screen shows who is calling, by name, or “Unknown”.",
        where: "Calls & voicemail ▸ Who the phone names out loud",
      },
      {
        title: "Big buttons to answer and end",
        body: "A large Answer and a large Decline, then a large End call. The buttons stay in the same places throughout the call.",
      },
      {
        title: "Loud, and it stays loud",
        body: "Calls start on the loudspeaker at the volume you set, and go back to it after every call. The volume keys can’t turn the phone down by accident. You set how loud the caller’s voice is and how loud it rings.",
        where: "Calls & voicemail ▸ Call volume (caller’s voice), Ringing volume",
      },
      {
        title: "Louder, for a quiet caller",
        body: "An optional Louder button on the call screen turns the caller up a notch with each press, for that call only. The next call starts at your level again.",
        where: "Calls & voicemail ▸ Louder button on calls",
      },
      {
        title: "A speaker button that can’t be pressed by mistake",
        body: "An optional Speaker on button. If it sits close to other buttons on a narrow phone, Speaker needs two taps stops a press meant for something else from changing the speaker.",
        where: "Calls & voicemail ▸ Speaker needs two taps",
      },
      {
        title: "Spoken prompts, at the speed they follow",
        body: "The phone says “Calling Sarah” before it dials, and if nobody answered, it says so when they’re back on the home screen. The low battery warning and the missed-call reminder speak too. Choose Normal, Slower or Slowest. Hear it buttons let you listen to the real ring, reminder and battery warning before they do.",
        where: "Calls & voicemail ▸ Speaking speed",
      },
      {
        title: "Vibrate when ringing",
        body: "The phone buzzes as it rings, and once with each spoken reminder. On unless you turn it off.",
        where: "Calls & voicemail ▸ Vibrate when ringing",
      },
      {
        title: "Block unknown callers",
        body: "Off unless you turn it on. Then only their saved contacts and voicemail can ring; other calls are stopped before they ring, and you can still see them in Recent calls. Blocking pauses itself for 48 hours after any emergency call, so the services can ring back.",
        where: "Calls & voicemail ▸ Block unknown callers",
      },
      {
        title: "Voicemail they can use",
        body: "A Voicemail button that reads “New Voicemail” when a message is waiting, if the network says so. It opens a keypad for the voicemail’s spoken menu or PIN, with a big End call. You can set the voicemail number if the SIM doesn’t supply one.",
        where: "Calls & voicemail ▸ Voicemail number",
      },
      {
        title: "Recent calls, for you",
        body: "Every call in and out, missed and blocked ones included. An unknown number can be added as a contact from there.",
        where: "Calls & voicemail ▸ Recent calls",
      },
    ],
  },
  {
    id: "safety",
    name: "SOS, medical information and battery",
    intro:
      "SOS calls the emergency services. It starts in test, and you rehearse it before you make it live.",
    features: [
      {
        title: "SOS calls the emergency services",
        body: "Police, fire or ambulance, after a confirmation of one, two or three taps, so a pocket or a passing hand can’t set it off. It starts in TEST and makes no call until you make it live; until then the button reads “SOS (TEST)”. The confirmation screen cancels itself after 30 seconds if nothing is pressed. If a real SOS call doesn’t go through, the phone says so out loud and asks them to press SOS again.",
        where: "Safety ▸ Emergency SOS, Taps to call for help",
      },
      {
        title: "A test call before it goes live",
        body: "Pick a contact or type a number. The next press of SOS runs the real confirmation and the real call to that number, marked as a test, with the texts marked TEST. Then make SOS live.",
        where: "Safety ▸ Make a test call",
      },
      {
        title: "Medical information for whoever comes to help",
        body: "Allergies, medications (with the date the list was last changed, added for you), conditions, blood type, weight and height, where a ReSPECT or DNACPR form is kept, and who to contact. A paramedic or neighbour holds the Medical button on the SOS call screen for one second to read it, with no PIN in the way. It stays on this phone: it isn’t uploaded and isn’t in backups.",
        where: "Safety ▸ Emergency / medical information",
      },
      {
        title: "The battery speaks up",
        body: "When the battery is low, the phone asks them by name to put it on the charger. When they do, it says “Phone is charging”.",
        where: "Safety ▸ Battery alerts; Calls & voicemail ▸ Say “Phone is charging” when plugged in",
      },
      {
        title: "Texts to you, only when something needs you",
        body: "To the people you choose, one at a time: when the battery is low (and once more if it stays unplugged), when it is back on charge, when SOS is pressed, and when an SOS is cancelled before the call. At your request it can also send a test battery text, and your helper PIN once when you set it. That is the whole list, so a text from Tom’s Phone always means “look at this now”.",
        where: "People & buttons ▸ Contacts; Safety ▸ Battery alerts",
      },
    ],
  },
  {
    id: "setup",
    name: "Setting it up, and keeping it yours to change",
    intro:
      "The settings are yours. The person using the phone isn’t shown them, and nothing in them changes the phone’s own settings.",
    features: [
      {
        title: "A settings area they aren’t shown",
        body: "Slide a finger across the words at the top of the home screen, or tap them 7 times. Screen-reader users get an “Open helper settings” action instead. Lock it with a PIN if you like, and text the PIN to people you trust as you set it. “Forgot PIN?” never offers a reset to whoever is holding the phone.",
        where: "Admin ▸ Helper PIN",
      },
      {
        title: "Start here",
        body: "Their name, making Tom’s Phone the Home app and the Phone app, allowing calls, and the setup guide again if you want it.",
        where: "Start here",
      },
      {
        title: "Advice on the phone’s own settings",
        body: "Screen lock None, SIM PIN off, brightness, gesture navigation, the digital assistant, accessibility shortcuts, notifications and Do Not Disturb, and battery saving, each with the menu path on most phones and on a Samsung. A green tick shows where the app can see it’s already done. Tom’s Phone changes none of them.",
        where: "Device setup",
      },
      {
        title: "A search box over every setting",
        body: "Type a word like “voicemail” or “PIN” and go straight to it.",
      },
      {
        title: "Back up and restore",
        body: "Save the setup (their name, contacts, buttons and settings) to a file, and restore it on a new phone. The medical information and the PIN stay on the phone they were typed into.",
        where: "Admin ▸ Back up & restore",
      },
      {
        title: "Exit, or start again",
        body: "Exit Tom’s Phone takes you to the Android page where the Home and Phone apps are changed back, and explains what that undoes. Reset Tom’s Phone deletes everything the app holds, after you type to confirm, and nothing else on the phone.",
        where: "Admin ▸ Exit Tom’s Phone, Reset Tom’s Phone",
      },
    ],
  },
  {
    id: "wont",
    name: "What it won’t do, on purpose",
    intro: "Some things are left out because they would make it less safe or less simple.",
    features: [
      {
        title: "No texts, no internet, no other apps",
        body: "It is a phone for calls. They can’t read or send texts on it, and there is nothing else to open.",
      },
      {
        title: "It never answers a call by itself",
        body: "A phone that answers on its own is a microphone into someone’s room for whoever rings. And an answered call looks like a chat even when nobody is there. If they don’t answer, the right next step is a visit.",
      },
      {
        title: "Nobody is watching",
        body: "It is not a personal alarm, a telecare service or a fall detector. It doesn’t know where the phone is, and no account, ads or analytics come with it.",
      },
    ],
  },
];

function FeatureItem({ f }: { f: Feature }) {
  return (
    <div>
      <h3 className="mt-0 mb-1.5 font-bold">{f.title}</h3>
      <p className="m-0 text-muted">{f.body}</p>
      {f.points ? (
        <ul className="mt-2 mb-0 list-disc pl-5 text-muted">
          {f.points.map((p) => (
            <li key={p} className="mb-1">
              {p}
            </li>
          ))}
        </ul>
      ) : null}
      {f.where ? (
        <p className="mt-2 mb-0 text-sm text-muted">
          <span className="font-semibold">In the settings:</span> {f.where}
        </p>
      ) : null}
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <Container>
      <Hero eyebrow="Everything it does" title="Every feature, and why it’s there">
        <p className="m-0 text-lg">
          The home page has the main things. This is all of it: what the phone
          does for the person using it, what you can set up, and where to find
          each setting. Setting names are the app&apos;s own, so you can find
          them on the phone.
        </p>
        <ul className="mt-4 mb-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 text-base">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-brand">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </Hero>

      {SECTIONS.map((s) => (
        <Card key={s.id} id={s.id}>
          <H2>{s.name}</H2>
          <p className="mb-6">{s.intro}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {s.features.map((f) => (
              <FeatureItem key={f.title} f={f} />
            ))}
          </div>
        </Card>
      ))}

      <Card>
        <H2>Something missing?</H2>
        <p className="mb-0">
          If the person you look after needs something this phone doesn&apos;t
          do, tell me at{" "}
          <a href="mailto:support@toms-phone.com" className="text-brand">
            support@toms-phone.com
          </a>
          . The{" "}
          <Link href="/support" className="text-brand">
            setup guide
          </Link>{" "}
          takes each of these step by step.
        </p>
      </Card>
    </Container>
  );
}

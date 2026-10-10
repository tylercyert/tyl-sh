import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Pages — Terms of Use",
  description: "Terms of Use for the Small Pages iOS app.",
};

export default function SmallPagesTermsPage() {
  return (
    <div className="prose">
      <h1>Small Pages Terms of Use</h1>
      <blockquote>
        <p>Draft for review, not legal advice.</p>
      </blockquote>
      <p>
        <strong>Effective date:</strong> [effective date: the day the App
        Store listing goes live]
      </p>
      <p>
        These terms are an agreement between you and Tyler Cyert, an
        individual developer based in Bloomington, Indiana, United States
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;), about your use of Small Pages.
        By using the app, you agree to them. If you don&apos;t agree, please
        don&apos;t use the app.
      </p>
      <p>
        Our Privacy Policy (
        <Link href="https://tyl.sh/small-pages/privacy">
          https://tyl.sh/small-pages/privacy
        </Link>
        ) explains how we handle your information.
      </p>
      <p>You must be at least 13 to use Small Pages.</p>

      <h2>The service</h2>
      <p>
        Small Pages gives you one writing prompt a day. You write a page, and
        the app keeps track of your streak, days written, XP and level. It also
        offers a word of the day, optional daily challenges and an optional
        evening reminder.
      </p>
      <ul>
        <li>
          <strong>Free:</strong> the daily prompt and page, the word of the
          day, your streak and its freezes, XP and levels, the daily
          challenges, your full history in Reflect, and one free instant
          feedback, offered once your streak first reaches 3 days.
        </li>
        <li>
          <strong>Pro</strong>, a paid subscription: more prompts and extra
          pages after your daily page, instant feedback on your pages, Zen
          mode, and the other features shown on the paywall before you buy.
        </li>
      </ul>
      <p>Instant feedback has daily limits and a maximum page length.</p>

      <h2>Your writing is yours</h2>
      <ul>
        <li>You own what you write. We claim no rights to it.</li>
        <li>Your pages are stored on your device, not by us.</li>
        <li>
          When you ask for instant feedback, you allow us and our feedback
          provider to process that page only to give you feedback. The Privacy
          Policy explains how.
        </li>
        <li>Feedback is for your own use, to help you write.</li>
      </ul>
      <p>
        The app itself belongs to us or our licensors. That includes the
        prompts, the word list, the feedback notes, the design and the code. We
        give you a personal licence, which you can&apos;t transfer, to use the
        app on Apple devices you own or control, as Apple&apos;s rules allow.
        Fonts and other content are used under their own licences, which are
        listed in the app&apos;s Settings.
      </p>

      <h2>Acceptable use</h2>
      <p>Please don&apos;t:</p>
      <ul>
        <li>try to get around the feedback limits or Pro;</li>
        <li>
          use our feedback server from outside the app, or send it automated or
          bulk requests;
        </li>
        <li>do anything that could harm, overload or disrupt the service;</li>
        <li>
          copy, modify or reverse engineer the app, except where the law allows
          it;
        </li>
        <li>use instant feedback on illegal content or to harm anyone;</li>
        <li>resell the app or its feedback.</li>
      </ul>
      <p>
        We may limit or block instant feedback for an install that breaks these
        rules.
      </p>

      <h2>Subscriptions and trials</h2>
      <ul>
        <li>
          Payments go through Apple. We use RevenueCat, a subscription service,
          to check whether you have Pro.
        </li>
        <li>
          Pro costs $4.99 a month or $29.99 a year in the United States. Prices
          in other countries may differ. The App Store shows your price before
          you buy.
        </li>
        <li>
          The yearly plan includes a 7-day free trial, if you&apos;re eligible.
          The monthly plan has no trial. If you don&apos;t cancel at least 24
          hours before the trial ends, it becomes a paid yearly subscription.
          Any unused part of a free trial ends when you buy a subscription.
        </li>
        <li>
          Payment is charged to your Apple Account when you confirm the
          purchase, or when the trial ends.
        </li>
        <li>
          Subscriptions renew automatically unless you cancel at least 24 hours
          before the current period ends. Apple charges the renewal within the
          24 hours before the period ends.
        </li>
        <li>
          To manage or cancel, go to Settings on your iPhone or iPad, tap your
          name, then Subscriptions. Deleting the app doesn&apos;t cancel your
          subscription.
        </li>
        <li>
          If you cancel, Pro stays on until the end of the period you&apos;ve
          paid for.
        </li>
        <li>
          Apple handles all billing and refunds. To ask for a refund, use
          Apple&apos;s &ldquo;Report a Problem&rdquo; page. We can&apos;t issue
          refunds ourselves.
        </li>
        <li>
          If you reinstall the app or get a new device, use &ldquo;Restore
          purchases&rdquo; in the app.
        </li>
        <li>
          We may change prices. Apple tells you before a change affects your
          subscription and, where required, asks you to agree.
        </li>
      </ul>

      <h2>Instant feedback: what it is and isn&apos;t</h2>
      <ul>
        <li>
          Instant feedback is automated. An AI service scores your page and
          flags sentences. It can be wrong, and it can miss things.
        </li>
        <li>
          It looks at craft: clarity, detail, word choice and how well the page
          answers the prompt. It doesn&apos;t judge you or what you wrote
          about.
        </li>
        <li>
          It isn&apos;t professional advice of any kind: not medical,
          mental-health, legal or academic advice or assessment.
        </li>
        <li>Treat the scores as suggestions and use your own judgement.</li>
        <li>
          If you&apos;re writing about something hard and need support, please
          reach out to a professional or, in an emergency, your local emergency
          services.
        </li>
      </ul>

      <h2>Availability</h2>
      <ul>
        <li>
          Writing works offline. Instant feedback needs an internet connection,
          and it may sometimes be slow or unavailable.
        </li>
        <li>
          We may change, pause or remove features, including instant feedback,
          or change the service that provides it. We&apos;ll try to tell you
          about big changes in advance.
        </li>
        <li>
          Your pages exist only on your device and in your own backups. We
          can&apos;t recover them if your device is lost or the app is deleted,
          so keep your iPhone backed up.
        </li>
      </ul>

      <h2>Termination</h2>
      <ul>
        <li>
          You can stop using Small Pages at any time by deleting the app.
          Cancel any subscription separately through Apple.
        </li>
        <li>
          We may suspend or end your access to instant feedback if you break
          these terms.
        </li>
        <li>
          The sections on ownership, disclaimers, liability and governing law
          still apply after you stop using the app.
        </li>
      </ul>

      <h2>Disclaimers and liability</h2>
      <p>
        [disclaimers: final wording for a lawyer, if the human wants one; until
        then this plain-words version stands]
      </p>
      <ul>
        <li>
          The app is provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo;, without warranties, as far as the law allows.
        </li>
        <li>
          As far as the law allows, we&apos;re not liable for lost pages or
          streaks, or for decisions you make based on feedback.
        </li>
        <li>
          Our total liability is limited to [liability cap: the human to
          decide].
        </li>
        <li>
          Nothing in these terms limits rights you have under consumer law that
          can&apos;t be waived.
        </li>
      </ul>

      <h2>Apple</h2>
      <p>You got Small Pages from the App Store, so these points also apply:</p>
      <ul>
        <li>
          These terms are between you and us, not Apple. Apple isn&apos;t
          responsible for the app or its content.
        </li>
        <li>
          Apple has no obligation to provide maintenance or support for the
          app.
        </li>
        <li>
          If the app doesn&apos;t meet a warranty that applies to it, you can
          tell Apple, and Apple will refund the price you paid for the app, if
          any. As far as the law allows, Apple has no other warranty obligation
          for the app.
        </li>
        <li>
          We, not Apple, are responsible for handling any claims about the app,
          including product liability, legal compliance, consumer protection,
          privacy and intellectual property claims.
        </li>
        <li>
          You confirm that you aren&apos;t in a country under a US government
          embargo and aren&apos;t on a US government list of restricted
          parties.
        </li>
        <li>
          Apple and its subsidiaries are third-party beneficiaries of these
          terms and may enforce them against you.
        </li>
      </ul>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Indiana, United
        States, without regard to its conflict-of-law rules.
      </p>
      <p>
        Any dispute about these terms or the app goes to the state courts in
        Monroe County, Indiana, or the federal courts for the Southern District
        of Indiana. Either of us may also use a small claims court. If you live
        outside the United States and your local consumer law lets you bring a
        claim in your own courts or under your own law, nothing here takes that
        away.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. When we do, we&apos;ll change the effective
        date above and tell you in the app about important changes. If you keep
        using the app after a change takes effect, you accept the new terms.
      </p>

      <h2>Contact</h2>
      <p>
        Tyler Cyert
        <br />
        Bloomington, Indiana, United States
        <br />
        [contact email: the human to confirm]
      </p>
    </div>
  );
}

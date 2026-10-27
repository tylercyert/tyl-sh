import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Driftwood — Terms of Use",
  description: "Terms of Use for the Driftwood iOS app.",
};

export default function DriftwoodTermsPage() {
  return (
    <div className="prose">
      <h1>Driftwood Terms of Use</h1>
      <p>
        <strong>Effective date:</strong> October 27, 2026
      </p>
      <p>
        These terms are an agreement between you and Tyler Cyert, an
        individual developer based in Bloomington, Indiana, United States
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;), about your use of Driftwood. By
        using the app, you agree to them. If you don&apos;t agree, please
        don&apos;t use the app.
      </p>
      <p>
        Our Privacy Policy (
        <Link href="https://tyl.sh/driftwood/privacy">
          https://tyl.sh/driftwood/privacy
        </Link>
        ) explains how we handle your information.
      </p>
      <p>
        You must be at least 13 to use Driftwood. If you&apos;re under 18,
        have a parent or guardian read these terms with you.
      </p>

      <h2>The service</h2>
      <p>
        Driftwood keeps the articles you save, from the share sheet or by
        pasting a link. Each day it picks three you haven&apos;t got to and
        reads them aloud with your device&apos;s own voices, like a music
        player. It also offers folders and an optional daily reminder.
      </p>
      <ul>
        <li>
          <strong>Free:</strong> saving articles, your Library and folders,
          the built-in samples, and the first article you save, played in full.
        </li>
        <li>
          <strong>Driftwood Unlimited</strong>, paid: listening to all your
          saves, every day. You can buy it as a yearly or monthly subscription,
          or once for life.
        </li>
      </ul>

      <h2>Subscriptions and purchases</h2>
      <ul>
        <li>
          Payments go through Apple. The app checks whether you have Unlimited
          through Apple and RevenueCat, the service we use to manage purchases
          (see the Privacy Policy).
        </li>
        <li>
          Unlimited costs $29.99 a year, $4.99 a month, or $39.99 once for
          life in the United States. Prices in other countries may differ. The
          App Store shows your price before you buy.
        </li>
        <li>
          The yearly plan includes a 14-day free trial, if you&apos;re
          eligible. The monthly plan and the lifetime purchase have no trial.
          If you don&apos;t cancel at least 24 hours before the trial ends, it
          becomes a paid yearly subscription. Any unused part of a free trial
          ends when you buy a subscription.
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
          If you cancel, Unlimited stays on until the end of the period
          you&apos;ve paid for.
        </li>
        <li>
          The lifetime purchase is paid once. It doesn&apos;t renew, and
          there&apos;s nothing to cancel.
        </li>
        <li>
          Apple handles all billing and refunds. To ask for a refund, use
          Apple&apos;s &ldquo;Report a Problem&rdquo; page. We can&apos;t issue
          refunds ourselves.
        </li>
        <li>
          If you reinstall the app or get a new device, use &ldquo;Restore&rdquo;
          on the plans screen in the app.
        </li>
        <li>
          We may change prices. Apple tells you before a change affects your
          subscription and, where required, asks you to agree.
        </li>
      </ul>

      <h2>Your saves are yours</h2>
      <ul>
        <li>
          What you save is yours, or belongs to the sites and authors who
          published it. We claim no rights to it.
        </li>
        <li>Your saves are stored on your device, not by us.</li>
        <li>
          You&apos;re responsible for what you save. Respect the terms of the
          sites you save from, and their authors&apos; copyright. Driftwood
          fetches a page the way a browser does, for you alone.
        </li>
        <li>
          Reading aloud is for your personal use. Don&apos;t record, publish or
          distribute what the app reads.
        </li>
      </ul>
      <p>
        The app itself belongs to us or our licensors. That includes the design
        and the code. We give you a personal licence, which you can&apos;t
        transfer, to use the app on Apple devices you own or control, as
        Apple&apos;s rules allow. Open-source libraries in the app are used
        under their own licences.
      </p>

      <h2>Acceptable use</h2>
      <p>Please don&apos;t:</p>
      <ul>
        <li>
          use the app to copy, scrape or redistribute content you don&apos;t
          have the right to;
        </li>
        <li>
          do anything that could harm, overload or disrupt a site you save
          from;
        </li>
        <li>
          copy, modify or reverse engineer the app, except where the law allows
          it;
        </li>
        <li>try to get around Driftwood Unlimited;</li>
        <li>resell the app or what it reads.</li>
      </ul>

      <h2>Reading pages</h2>
      <ul>
        <li>
          Driftwood works with the text it can find on a page. Some pages
          can&apos;t be read: paywalled pages, pages that need a sign-in, pages
          made mostly of images or video, and pages whose owners block
          automated reading. The app tells you when it couldn&apos;t read one.
        </li>
        <li>
          The text it extracts can be incomplete or out of order. Open the
          original page when it matters.
        </li>
        <li>
          Speech comes from Apple&apos;s system voices. How they sound, and
          which are available, is up to iOS.
        </li>
      </ul>

      <h2>Availability</h2>
      <ul>
        <li>
          Reading a page needs an internet connection the first time. After
          that, listening works offline.
        </li>
        <li>
          We may change, pause or remove features. We&apos;ll try to tell you
          about big changes in advance.
        </li>
        <li>
          Your saves exist only on your device and in your own backups. We
          can&apos;t recover them if your device is lost or the app is deleted,
          so keep your iPhone backed up.
        </li>
      </ul>

      <h2>Termination</h2>
      <ul>
        <li>
          You can stop using Driftwood at any time by deleting the app.
        </li>
        <li>
          The sections on ownership, disclaimers, liability and governing law
          still apply after you stop using the app.
        </li>
      </ul>

      <h2>Disclaimers and liability</h2>
      <ul>
        <li>
          The app is provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo;, without warranties, as far as the law allows.
        </li>
        <li>
          As far as the law allows, we&apos;re not liable for lost saves or
          progress, for pages the app couldn&apos;t read or read wrongly, or
          for the content of the sites you save from.
        </li>
        <li>
          Our total liability is limited to the amount you paid us in the 12
          months before the claim, or US$50, whichever is more.
        </li>
        <li>
          Nothing in these terms limits rights you have under consumer law that
          can&apos;t be waived.
        </li>
      </ul>

      <h2>Apple</h2>
      <p>You got Driftwood from the App Store, so these points also apply:</p>
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
        Email: <Link href="mailto:sudo@tyl.sh">sudo@tyl.sh</Link>
      </p>
    </div>
  );
}

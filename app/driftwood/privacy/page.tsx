import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Driftwood — Privacy Policy",
  description: "Privacy Policy for the Driftwood iOS app.",
};

export default function DriftwoodPrivacyPage() {
  return (
    <div className="prose">
      <h1>Driftwood Privacy Policy</h1>
      <p>
        <strong>Effective date:</strong> October 27, 2026
      </p>
      <p>
        Driftwood is an iPhone app that reads your saved articles aloud, made
        by Tyler Cyert, an individual developer based in Bloomington, Indiana,
        United States (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This policy
        explains what happens to your information when you use it. Our Terms
        of Use (
        <Link href="https://tyl.sh/driftwood/terms">
          https://tyl.sh/driftwood/terms
        </Link>
        ) cover the rest.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>There&apos;s no account and no sign-in.</li>
        <li>Your saves stay on your device.</li>
        <li>There are no ads and no tracking.</li>
        <li>
          To manage Driftwood Unlimited, the app uses RevenueCat. It receives
          a random ID and your Driftwood purchase history, never your saves or
          what you listen to (see Purchases).
        </li>
      </ul>

      <h2>What we collect</h2>
      <p>
        Only your Driftwood purchase history, through RevenueCat, under a
        random ID (see Purchases). The app has no server of ours to talk to.
        It doesn&apos;t send us or anyone else your saves, what you listen to,
        or anything else about you.
      </p>
      <p>
        We don&apos;t collect your name, email address, contacts, location,
        photos or advertising identifier. We don&apos;t use advertising or
        tracking tools, and we don&apos;t track you across other
        companies&apos; apps or websites. The only analytics we see are
        RevenueCat&apos;s purchase totals, such as how many people subscribe.
        We don&apos;t sell your information, and we share it only with
        RevenueCat, which handles purchase records for us.
      </p>

      <h2>What stays on your device</h2>
      <p>
        Everything the app keeps is stored in the app on your device, in
        storage it shares with its share extension:
      </p>
      <ul>
        <li>the links you save;</li>
        <li>the page text the app extracts from them;</li>
        <li>your folders;</li>
        <li>your listening progress;</li>
        <li>your play-day counts;</li>
        <li>your settings, such as the reminder time.</li>
      </ul>
      <p>
        We don&apos;t have a copy and can&apos;t see any of it. Version 1.0
        doesn&apos;t sync between devices.
      </p>
      <p>
        If you back up your iPhone to iCloud or a computer, that backup may
        include the app&apos;s data. That backup is between you and Apple, or
        kept on your own computer.
      </p>

      <h2>Reading a page</h2>
      <p>
        To read an article you saved, the app downloads that page from its own
        website, as a browser would. That website sees a normal web request
        from your device, including your IP address, and handles it under its
        own privacy policy. The app contacts no other server for content.
      </p>

      <h2>Speech</h2>
      <p>
        Driftwood reads aloud with Apple&apos;s system voices, on your device.
        The text isn&apos;t sent anywhere to be spoken. Which voices you have
        is set in iOS Settings, under Accessibility &rsaquo; Spoken Content.
      </p>

      <h2>Notifications</h2>
      <p>
        The daily reminder is optional. If you turn it on, iOS asks for
        permission.
      </p>
      <p>
        The reminder is scheduled on your device. No server is involved, and
        we don&apos;t collect a push token. You can change the time or turn it
        off in the app&apos;s Settings, or in iOS Settings.
      </p>

      <h2>iCloud</h2>
      <p>
        Version 1.0 doesn&apos;t use iCloud. If a later version adds iCloud
        sync, your data would go to your own iCloud account under Apple&apos;s
        terms, and we&apos;ll update this policy before that ships.
      </p>

      <h2>Purchases</h2>
      <p>
        When you buy Driftwood Unlimited, Apple handles the payment. We never
        see your name, Apple Account or payment details.
      </p>
      <p>
        To manage Unlimited, the app uses RevenueCat, Inc. (
        <Link href="https://www.revenuecat.com">https://www.revenuecat.com</Link>
        ), a service that checks App Store purchases for us. Each time you
        open the app, it asks RevenueCat whether you have Unlimited, and it
        asks again before playing and when it shows you the prices. Each time,
        it sends RevenueCat:
      </p>
      <ul>
        <li>
          a random ID the app makes on your device, which isn&apos;t your name,
          email address or Apple Account;
        </li>
        <li>
          your App Store purchase history for Driftwood: the plan, its price
          and currency, and the dates of purchases, trials, renewals,
          cancellations and refunds;
        </li>
        <li>
          basic technical details, such as the app and iOS versions, your
          device&apos;s language and region, and your App Store country.
        </li>
      </ul>
      <p>
        Like any server your device connects to, RevenueCat also sees your IP
        address.
      </p>
      <p>
        RevenueCat uses this to tell the app whether you have Unlimited, and
        to show us purchase records and totals under the random ID. It gets
        nothing else from the app: not your saves, not what you listen to. It
        handles this data for us, as our service provider, under its own
        privacy policy (
        <Link href="https://www.revenuecat.com/privacy">
          https://www.revenuecat.com/privacy
        </Link>
        ). RevenueCat is based in the United States, so these records are
        processed there.
      </p>
      <p>
        Apple&apos;s own handling of purchases is covered by Apple&apos;s
        privacy policy.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>
          <strong>Turn off reminders</strong> in the app&apos;s Settings or in
          iOS Settings.
        </li>
        <li>
          <strong>Delete your data.</strong> Delete the app. That removes your
          saves, the extracted text, your folders, progress and settings from
          your device. Copies in your own device backups stay until you delete
          or replace those backups.
        </li>
        <li>
          <strong>Ask us.</strong> Email us at any time. Our only records are
          your purchase records at RevenueCat, under a random ID. To see or
          delete yours, send us the Order ID from Apple&apos;s receipt email.
        </li>
      </ul>

      <h2>Your rights in the EU, UK and California</h2>
      <p>
        <strong>EU and UK.</strong> Apart from purchase records, the app
        processes your data only on your device, and we receive none of it. We
        process purchase records to give you the Unlimited you bought (to
        perform our contract with you) and to keep records of sales (our
        legitimate interest in running the app). RevenueCat processes them for
        us. You have the right to access, correct or delete
        your data, to restrict or object to how it&apos;s used, to data
        portability, and to complain to your local data protection authority.
      </p>
      <p>
        <strong>California.</strong> We don&apos;t sell or share your personal
        information, as California law uses those words, and we don&apos;t use
        it for targeted advertising. You can ask to know what we hold about
        you (only purchase records under a random ID, as of this version), to
        correct it or to delete it, and
        we won&apos;t treat you differently for asking.
      </p>

      <h2>Children</h2>
      <p>
        Driftwood isn&apos;t directed at children under 13. You must be at
        least 13 to use it. We don&apos;t knowingly collect information from
        children under 13.
      </p>

      <h2>Changes</h2>
      <p>
        If we change this policy, we&apos;ll update the effective date above.
        If a change means data leaves your device, we&apos;ll tell you in the
        app before it takes effect.
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

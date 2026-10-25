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
        <strong>Effective date:</strong> October 25, 2026
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
        <li>Nothing is sent to us.</li>
      </ul>

      <h2>What we collect</h2>
      <p>
        Nothing. The app has no server of ours to talk to. It doesn&apos;t
        send us your saves, what you listen to, or anything else about you.
      </p>
      <p>
        We don&apos;t collect your name, email address, contacts, location,
        photos or advertising identifier. We don&apos;t use advertising,
        analytics or tracking tools, and we don&apos;t track you across other
        companies&apos; apps or websites. We don&apos;t sell your information
        or share it with anyone.
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
        To know whether you have Unlimited, the app asks Apple on your device
        through Apple&apos;s StoreKit, and keeps the answer on your device.
        Nothing about your purchase is sent to us or to anyone else.
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
          <strong>Ask us.</strong> Email us at any time. We hold nothing of
          yours, so there&apos;s usually nothing on our side to look up or
          delete, but we&apos;re happy to answer questions.
        </li>
      </ul>

      <h2>Your rights in the EU, UK and California</h2>
      <p>
        <strong>EU and UK.</strong> The app processes your data only on your
        device, and we receive none of it. If that ever changes, this policy
        will say so first. You have the right to access, correct or delete
        your data, to restrict or object to how it&apos;s used, to data
        portability, and to complain to your local data protection authority.
      </p>
      <p>
        <strong>California.</strong> We don&apos;t sell or share your personal
        information, as California law uses those words, and we don&apos;t use
        it for targeted advertising. You can ask to know what we hold about
        you (nothing, as of this version), to correct it or to delete it, and
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

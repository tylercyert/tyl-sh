import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tada Island — Privacy Policy",
  description: "Privacy Policy for the Tada Island iOS app.",
};

export default function TadaIslandPrivacyPage() {
  return (
    <div className="prose">
      <h1>Tada Island Privacy Policy</h1>
      <p>
        <strong>Effective date:</strong> September 26, 2026
      </p>

      <h2>Overview</h2>
      <p>
        Tada Island is made by Tyler Cyert, doing business as tyl.sh
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This policy explains what data
        Tada Island collects, why, and how to reach us with questions.
      </p>

      <h2>No account required</h2>
      <p>
        There&apos;s no sign-up, login, email address, or password. Tada
        Island doesn&apos;t have social features, ads, chat, or content
        shared with other users.
      </p>

      <h2>Data that stays on your device</h2>
      <p>
        The text of every Done you log, your islands, tiles, plaques, names,
        Shells, streak, store items, Atlas discoveries, and settings are
        stored only in the app&apos;s local storage on your device. We never
        receive this data, and it isn&apos;t backed up to our servers.
      </p>
      <p>
        The home-screen widget reads a small summary &mdash; today&apos;s
        island image, fog count, and streak &mdash; from storage shared only
        between the app and its own widget on your device.
      </p>
      <p>
        Deleting the app deletes this data. Your iOS device backups (iCloud
        or computer backups you control) may include it, as with any
        app&apos;s data.
      </p>

      <h2>Reminders</h2>
      <p>
        Tada Island can send an optional local notification at 6:00 PM on
        days you haven&apos;t logged a Done (&ldquo;Today&apos;s island is
        still in the fog&rdquo;). This is scheduled entirely on your device
        &mdash; we ask permission first, you can turn it off in iOS Settings
        at any time, and no push token is ever collected or sent to us.
      </p>

      <h2>Data handled by third parties</h2>
      <p>
        We rely on a small number of services to run the app. None of them
        receive the text of your Dones, tile names, or any personal names.
      </p>
      <p>
        <strong>Apple (App Store and in-app purchases).</strong> Apple
        processes all payments; we never receive your card or payment
        details. Apple&apos;s own privacy policy governs purchases. If you
        opt in to share crash data with developers in iOS Settings, Apple may
        give us anonymized crash reports.
      </p>
      <p>
        <strong>RevenueCat, Inc.</strong> (subscription management &mdash;{" "}
        <Link href="https://www.revenuecat.com/privacy">privacy policy</Link>
        ). RevenueCat verifies purchases, tells the app whether you have Pro,
        and powers the in-app &ldquo;Manage Subscription&rdquo; screen. It
        processes: a random anonymous ID generated on your device (not your
        name or email), your purchase and subscription history and receipts
        from Apple, subscription status, and basic device/app information
        (like iOS version, app version, device model, locale, and country or
        storefront). Your IP address may be processed as part of the network
        request. RevenueCat doesn&apos;t link this to your identity, and we
        don&apos;t use it for advertising or tracking. RevenueCat processes
        data in the United States.
      </p>
      <p>
        <strong>No advertising, no analytics, no other third parties.</strong>{" "}
        Tada Island doesn&apos;t use advertising SDKs, doesn&apos;t use
        Apple&apos;s advertising identifier (IDFA), doesn&apos;t ask for App
        Tracking Transparency permission, and doesn&apos;t sell or share
        personal data for cross-context behavioral advertising. It also
        doesn&apos;t collect location, contacts, photos, camera, microphone,
        health, or financial data.
      </p>

      <h2>Your rights and how to reach us</h2>
      <p>
        Because we don&apos;t have accounts and can&apos;t identify you from
        the data we receive, there&apos;s not much for us to look up &mdash;
        but you can always ask. Email{" "}
        <Link href="mailto:sudo@tyl.sh">sudo@tyl.sh</Link> to request that any
        records tied to your device be deleted or exported.
      </p>
      <p>
        If you&apos;re a Pro subscriber, you can include the User ID shown on
        the app&apos;s Manage Subscription screen (a RevenueCat identifier);
        that lets us ask RevenueCat to act on your record. If you&apos;re not
        subscribed, there&apos;s no analytics or account identifier tied to
        you at all &mdash; the RevenueCat ID exists only in relation to
        purchases, and reinstalling the app starts a new one.
      </p>

      <h2>California residents</h2>
      <p>
        Tada Island processes only the limited categories of data described
        above (device/subscription information handled by RevenueCat, and
        locally-stored app data we never receive). We don&apos;t sell or
        share personal information, and you won&apos;t be discriminated
        against for exercising any privacy right. To submit a request to know
        or delete, email <Link href="mailto:sudo@tyl.sh">sudo@tyl.sh</Link>.
      </p>

      <h2>Children</h2>
      <p>
        Tada Island isn&apos;t directed at children under 13, and we
        don&apos;t knowingly collect data from them.
      </p>

      <h2>Security and retention</h2>
      <p>
        Data sent to RevenueCat travels over encrypted connections (HTTPS).
        Data stored on your device is protected by iOS. On-device data stays
        until you delete the app; RevenueCat retains data under its own
        policy and for as long as needed to keep purchase records.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, we&apos;ll update the effective date above
        and note material changes in the app&apos;s update notes.
      </p>

      <h2>Contact</h2>
      <p>
        Tyler Cyert, doing business as tyl.sh
        <br />
        Email: <Link href="mailto:sudo@tyl.sh">sudo@tyl.sh</Link>
      </p>
    </div>
  );
}

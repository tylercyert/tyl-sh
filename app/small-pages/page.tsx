import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Pages — Support",
  description: "Help and contact for the Small Pages iOS app.",
};

export default function SmallPagesSupportPage() {
  return (
    <div className="prose">
      <h1>Small Pages</h1>
      <p>
        A daily writing app for iPhone and iPad: one prompt a day, a short
        page, and a streak that forgives a missed day.
      </p>

      <h2>Contact</h2>
      <p>
        Questions, bugs or ideas: email{" "}
        <Link href="mailto:sudo@tyl.sh">sudo@tyl.sh</Link>.
      </p>

      <h2>Common questions</h2>
      <h3>I bought Pro on another device, or after reinstalling</h3>
      <p>
        Open Settings in the app and tap <strong>Restore purchases</strong>.
        Use the same Apple Account you bought with.
      </p>
      <h3>How do I cancel my subscription?</h3>
      <p>
        Subscriptions are managed by Apple. On your iPhone or iPad, open
        Settings, tap your name, then <strong>Subscriptions</strong>. Cancel
        at least 24 hours before the end of the current period to avoid the
        next charge.
      </p>
      <h3>How do I ask for a refund?</h3>
      <p>
        Apple handles refunds. Ask at{" "}
        <Link href="https://reportaproblem.apple.com">
          reportaproblem.apple.com
        </Link>
        .
      </p>
      <h3>Where are my pages kept?</h3>
      <p>
        On your device. There&apos;s no account and no sign-in, so we
        can&apos;t see or recover your pages.
      </p>

      <h2>Legal</h2>
      <ul>
        <li>
          <Link href="/small-pages/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/small-pages/terms">Terms of Use</Link>
        </li>
      </ul>
    </div>
  );
}

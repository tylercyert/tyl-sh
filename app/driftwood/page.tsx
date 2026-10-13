import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Driftwood — Support",
  description: "Help and contact for the Driftwood iOS app.",
};

export default function DriftwoodSupportPage() {
  return (
    <div className="prose">
      <h1>Driftwood</h1>
      <p>
        Save articles from the share sheet or by pasting a link. Each day
        Driftwood picks three you forgot and reads them aloud, on your device,
        like a music player.
      </p>

      <h2>Contact</h2>
      <p>
        Questions, bugs or ideas: email{" "}
        <Link href="mailto:sudo@tyl.sh">sudo@tyl.sh</Link>.
      </p>

      <h2>Common questions</h2>
      <h3>Where are my saves stored?</h3>
      <p>
        On your device. There&apos;s no account and no sign-in, so we
        can&apos;t see or recover your saves. Version 1.0 doesn&apos;t sync
        between devices.
      </p>
      <h3>Why does a page say &ldquo;Couldn&apos;t read&rdquo;?</h3>
      <p>
        Driftwood downloads the page and pulls out its text. Some pages
        don&apos;t give it any: paywalls, pages that need a sign-in, pages that
        are mostly images or video, or sites that block automated reading. Open
        the original in your browser, or try a different link to the same
        article.
      </p>
      <h3>How do I get a better voice?</h3>
      <p>
        Driftwood uses Apple&apos;s system voices. In the app, open{" "}
        <strong>Settings &rsaquo; Better voices</strong>. It takes you to iOS
        Settings &rsaquo; Accessibility &rsaquo; Spoken Content, where Premium
        and Enhanced voices are a free download from Apple.
      </p>

      <h2>Legal</h2>
      <ul>
        <li>
          <Link href="/driftwood/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/driftwood/terms">Terms of Use</Link>
        </li>
      </ul>
    </div>
  );
}

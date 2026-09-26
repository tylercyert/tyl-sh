import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tada Island — Terms of Use",
  description: "Terms of Use for the Tada Island iOS app.",
};

export default function TadaIslandTermsPage() {
  return (
    <div className="prose">
      <h1>Tada Island Terms of Use</h1>
      <p>
        <strong>Effective date:</strong> September 26, 2026
      </p>

      <h2>Agreement</h2>
      <p>
        These Terms of Use are a legal agreement between you and Tyler
        Cyert, doing business as tyl.sh (&ldquo;we&rdquo;, &ldquo;us&rdquo;),
        for the Tada Island iOS app. By downloading or using the app, you
        agree to these terms.
      </p>

      <h2>License</h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable, revocable
        license to use Tada Island on Apple devices that you own or control,
        under Apple&apos;s Usage Rules in the App Store Terms of Service.
      </p>

      <h2>Apple&apos;s required terms</h2>
      <ul>
        <li>
          This agreement is between you and us, not Apple. Apple isn&apos;t
          responsible for the app or its content.
        </li>
        <li>Apple has no obligation to provide maintenance or support for the app.</li>
        <li>
          If the app fails to conform to any warranty, you may notify Apple,
          and Apple will refund the purchase price to you; to the maximum
          extent permitted by law, Apple has no other warranty obligation
          regarding the app.
        </li>
        <li>
          We, not Apple, are responsible for addressing any claims relating
          to the app, such as product liability claims, legal or regulatory
          compliance, or consumer protection claims.
        </li>
        <li>
          We, not Apple, are responsible for any third-party intellectual
          property infringement claim related to the app.
        </li>
        <li>
          You confirm that you&apos;re not located in a country subject to a
          U.S. government embargo, and that you&apos;re not on any U.S.
          government list of prohibited or restricted parties.
        </li>
        <li>Our name and contact information: Tyler Cyert, doing business as tyl.sh, sudo@tyl.sh.</li>
        <li>Apple&apos;s own Terms of Service govern your purchases through the App Store.</li>
        <li>
          Apple, and Apple&apos;s subsidiaries, are third-party beneficiaries
          of these terms and may enforce them against you.
        </li>
      </ul>

      <h2>Tada Island Pro (subscription)</h2>
      <p>
        Tada Island Pro is an auto-renewing subscription available at
        $3.99/month or $29.99/year, with a 7-day free trial for eligible new
        subscribers. Prices vary by country and currency; the App Store
        shows the exact price before you buy.
      </p>
      <ul>
        <li>Payment is charged to your Apple ID at confirmation of purchase.</li>
        <li>
          Your subscription renews automatically unless you cancel at least
          24 hours before the end of the current period.
        </li>
        <li>Renewal is charged within 24 hours before the current period ends.</li>
        <li>
          Manage or cancel your subscription in your Apple ID account
          settings, or from the app&apos;s Manage Subscription screen.
        </li>
        <li>Buying a subscription forfeits any unused portion of a free trial.</li>
        <li>Refunds are handled by Apple, according to its own policies.</li>
      </ul>
      <p>
        <strong>What Pro includes:</strong> with Pro, every island
        you&apos;ve charted stays visible on your path. Without Pro, you can
        see your 7 most recent islands; older ones stay on your device but
        appear &ldquo;in the fog&rdquo; until you subscribe or release an
        island. Pro also includes unlimited ring rises and the Pirate Coves
        region. Logging Dones, revealing tiles, the Atlas, plaques, the
        store, streaks, and the widget are all available without Pro.
      </p>
      <p>
        Features may change over time. Pro doesn&apos;t guarantee any
        particular future content.
      </p>

      <h2>Shells</h2>
      <p>
        Shells are an in-app currency earned only by playing &mdash; we
        never sell them for real money. They have no monetary value,
        can&apos;t be transferred, exchanged, or redeemed for cash, and we
        may adjust a Shell balance if it was obtained through a bug. Tile
        rarity odds are shown on the app&apos;s odds page.
      </p>

      <h2>Your content</h2>
      <p>
        The Dones you write stay on your device &mdash; we never receive
        them, and you&apos;re responsible for what you write. Because
        there&apos;s no cloud backup, deleting the app deletes your islands
        and Dones permanently.
      </p>

      <h2>Acceptable use</h2>
      <p>
        You agree not to reverse-engineer the app, tamper with or
        circumvent its purchase system, or use it for any unlawful purpose.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Tada Island, its design, and its code belong to us. Some art is
        based on assets released under CC0 by Kenney (kenney.nl); the app
        icon uses Microsoft Fluent Emoji, licensed under MIT. Both are
        credited in the license notices bundled with the app.
      </p>

      <h2>Disclaimers and limitation of liability</h2>
      <p>
        Tada Island is provided &ldquo;as is,&rdquo; to the extent allowed
        by applicable law. To the maximum extent permitted by law, our
        liability to you is capped at the amount you paid for Pro in the 12
        months before a claim arose. Nothing in these terms limits any right
        that can&apos;t be limited under applicable consumer protection law.
      </p>

      <h2>Termination</h2>
      <p>
        We may suspend or terminate your access to the app if you violate
        these terms. You can stop using the app, and delete it, at any time.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. If we make material
        changes, we&apos;ll note them in the app&apos;s update notes.
        Continuing to use the app after changes take effect means you accept
        the new terms.
      </p>

      <h2>Severability and governing law</h2>
      <p>
        If any part of these terms is found unenforceable, the rest remains
        in effect. These terms are governed by the laws of the State of
        Indiana, USA, without regard to conflict-of-laws rules &mdash;
        except where mandatory consumer protection laws in your country say
        otherwise.
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Pages — Privacy Policy",
  description: "Privacy Policy for the Small Pages iOS app.",
};

export default function SmallPagesPrivacyPage() {
  return (
    <div className="prose">
      <h1>Small Pages Privacy Policy</h1>
      <blockquote>
        <p>Draft for review, not legal advice.</p>
      </blockquote>
      <p>
        <strong>Effective date:</strong> [effective date: the day the App
        Store listing goes live]
      </p>
      <p>
        Small Pages is a daily writing app for iPhone and iPad, made by Tyler
        Cyert, an individual developer based in Bloomington, Indiana, United
        States (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This policy explains what
        happens to your information when you use it. Our Terms of Use (
        <Link href="https://tyl.sh/small-pages/terms">
          https://tyl.sh/small-pages/terms
        </Link>
        ) cover the rest.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>There&apos;s no account and no sign-in.</li>
        <li>Your pages stay on your device.</li>
        <li>There are no ads and no tracking.</li>
        <li>
          Instant feedback is optional. A page is sent only after you agree,
          and we don&apos;t keep it.
        </li>
      </ul>

      <h2>What we collect</h2>
      <p>Very little:</p>
      <ul>
        <li>
          <strong>Pages you send for instant feedback</strong>, and only when
          you agree. We pass them on and don&apos;t store them. See
          &ldquo;Instant feedback&rdquo; below.
        </li>
        <li>
          <strong>A random install ID.</strong> The app creates it on your
          device the first time you use instant feedback. It&apos;s made for
          this install only: it isn&apos;t your device&apos;s identifier, and
          it isn&apos;t linked to your name or your Apple Account. Our server
          uses it for one thing: counting today&apos;s feedback requests so it
          can apply daily limits. The server keeps only a scrambled (hashed)
          form of the ID with that day&apos;s count, and deletes them once the
          day is over. It keeps nothing else.
        </li>
        <li>
          <strong>Subscription status</strong>, through RevenueCat. See
          &ldquo;Payments&rdquo; below.
        </li>
      </ul>
      <p>
        We don&apos;t collect your name, email address, contacts, location,
        photos or advertising identifier. We don&apos;t use advertising or
        tracking tools, and we don&apos;t track you across other
        companies&apos; apps or websites. We don&apos;t sell your information
        or share it for advertising.
      </p>
      <p>
        When your device connects to our feedback server, the service that
        hosts the server sees your IP address, as with any website. Our server
        doesn&apos;t record it.
      </p>

      <h2>What stays on your device</h2>
      <p>
        Everything you write, and everything the app tracks, is stored in the
        app on your device:
      </p>
      <ul>
        <li>your pages and drafts;</li>
        <li>your streak, freezes, days written, XP and level;</li>
        <li>your challenge results;</li>
        <li>
          the feedback you&apos;ve received (scores, suggestions and flagged
          sentences);
        </li>
        <li>
          your settings, such as the reminder time and the name you give the
          app, if any.
        </li>
      </ul>
      <p>
        We don&apos;t have a copy and can&apos;t see any of it. This version
        doesn&apos;t sync between devices.
      </p>
      <p>
        If you back up your iPhone or iPad to iCloud or a computer, that backup
        may include the app&apos;s data. That backup is between you and Apple,
        or kept on your own computer.
      </p>

      <h2>Instant feedback</h2>
      <p>
        Instant feedback is optional. It scores a page and points out
        sentences worth another look.
      </p>
      <p>
        <strong>When a page is sent.</strong> Nothing is sent unless you
        agree.
      </p>
      <ul>
        <li>
          Before a page is first sent, the app tells you what is sent and asks.
        </li>
        <li>
          With Pro, if you choose &ldquo;Every daily page&rdquo;, each page you
          finish is sent when you tap Done: your daily page, and any extra
          pages you write.
        </li>
        <li>
          If you choose &ldquo;Just this page&rdquo; or &ldquo;Get
          feedback&rdquo;, only that page is sent, and the app asks again next
          time.
        </li>
        <li>
          If you choose &ldquo;Not this time&rdquo;, nothing is sent, and the
          app asks again next time.
        </li>
        <li>
          A past page in Reflect is sent only when you tap to get feedback on
          it.
        </li>
      </ul>
      <p>
        <strong>What is sent.</strong>
      </p>
      <ul>
        <li>The page&apos;s text, its prompt and the prompt&apos;s category.</li>
        <li>
          If you have challenges turned on, the day&apos;s challenges, so the
          feedback can take them into account.
        </li>
        <li>
          When you fix a sentence, that sentence, the one before it, the prompt
          and any challenges are sent again to be re-checked.
        </li>
        <li>The random install ID, which is used only for daily limits.</li>
      </ul>
      <p>
        <strong>Where it goes.</strong> The page goes to our feedback server,
        which passes it to our feedback provider: an AI service in the United
        States. The provider reads the page and returns scores and labels,
        chosen from lists we wrote. It writes no text. Every note you see was
        written by us. If you live outside the United States, your page is
        processed there.
      </p>
      <p>
        <strong>What is kept.</strong>
      </p>
      <ul>
        <li>
          Our server doesn&apos;t store or log your page, prompt or sentences.
        </li>
        <li>
          The provider receives the page from our server, not from your device.
          It doesn&apos;t get your IP address or your install ID.
        </li>
        <li>
          The provider doesn&apos;t use your writing to train AI models.
        </li>
        <li>
          The provider may keep a copy of what it receives, as its own terms
          allow. For example, it may keep it to run its service, to watch for
          abuse, to meet legal duties, and in its backups. It may also keep
          technical records about requests, such as logs and usage statistics.
          It doesn&apos;t say how long it keeps them, and we can&apos;t shorten
          that.
        </li>
        <li>
          The results come back to your device and are saved there with the
          page.
        </li>
      </ul>
      <p>
        If you&apos;d rather no page ever leaves your device, don&apos;t use
        instant feedback. Everything else works without it.
      </p>

      <h2>Payments</h2>
      <p>
        Small Pages Pro is a subscription sold through the App Store. Apple
        takes the payment. We never see your card or bank details.
      </p>
      <p>
        To show the plans and check whether you have Pro, the app uses
        RevenueCat, a subscription service. RevenueCat gives your install an
        anonymous ID, which isn&apos;t linked to your name. If you subscribe,
        it receives your purchase records from Apple: which plan you have, when
        it started and renews, and whether you&apos;re in a trial. Like any
        server, it also sees your IP address and basic technical details, such
        as the app version, iOS version and your App Store country. We use this
        only to give you Pro and to restore purchases, never for advertising or
        tracking. RevenueCat handles this data under its own privacy policy.
      </p>

      <h2>Notifications</h2>
      <p>
        The evening reminder is optional. After your first page, the app asks
        whether you&apos;d like one. If you say yes, iOS asks for permission.
      </p>
      <p>
        The reminder is scheduled on your device. No server is involved, and
        we don&apos;t collect a push token. You can change the time or turn it
        off in the app&apos;s Settings, or in iOS Settings.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>
          <strong>Stop feedback on every page.</strong> Turn off &ldquo;Feedback
          after every page&rdquo; in Settings. After that, a page is sent only
          when you ask for feedback on it.
        </li>
        <li>
          <strong>Never send a page.</strong> Don&apos;t use instant feedback.
          Writing, streaks, XP and your history all work without it.
        </li>
        <li>
          <strong>Turn off reminders</strong> in the app&apos;s Settings or in
          iOS Settings.
        </li>
        <li>
          <strong>Delete your data.</strong> Delete the app. That removes your
          pages, progress, settings and install ID from your device. Copies in
          your own device backups stay until you delete or replace those
          backups. Deleting the app doesn&apos;t cancel a subscription; cancel
          it in your Apple Account settings.
        </li>
        <li>
          <strong>Ask us.</strong> Email us at any time. We don&apos;t store
          your pages or link feedback requests to you, so there&apos;s usually
          nothing of yours on our side to look up or delete. For the same
          reason, we can&apos;t find your page among the provider&apos;s
          records. If you&apos;d like your purchase records removed from
          RevenueCat, send us the order ID from your Apple receipt and
          we&apos;ll find and delete them.
        </li>
      </ul>

      <h2>Your rights in the EU, UK and California</h2>
      <p>
        <strong>EU and UK.</strong> We are the controller of the personal data
        described here. We rely on your consent to send a page for feedback;
        you can withdraw it at any time by turning off &ldquo;Feedback after
        every page&rdquo; or by not asking for feedback. We rely on our
        legitimate interest in keeping instant feedback fair and working for
        the daily count, and on our contract with you to give you Pro. You have
        the right to access, correct or delete your data, to restrict or object
        to how we use it, to data portability, and to complain to your local
        data protection authority. Pages sent for feedback are processed in the
        United States. [transfer safeguards and EU/UK representative: for a
        lawyer]
      </p>
      <p>
        <strong>California.</strong> We don&apos;t sell or share your personal
        information, as California law uses those words, and we don&apos;t use
        it for targeted advertising. You can ask to know what we hold about
        you, to correct it or to delete it, and we won&apos;t treat you
        differently for asking.
      </p>

      <h2>Children</h2>
      <p>
        Small Pages isn&apos;t directed at children under 13. You must be at
        least 13 to use it. We don&apos;t knowingly collect information from
        children under 13. If you think a child under 13 has used instant
        feedback, contact us.
      </p>

      <h2>Changes</h2>
      <p>
        If we change this policy, we&apos;ll update the effective date above.
        If a change affects what is sent or who receives it, we&apos;ll tell
        you in the app before it takes effect, and ask again where your consent
        is needed.
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

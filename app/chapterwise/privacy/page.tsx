import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chapterwise — Privacy Policy",
  description: "Privacy Policy for the Chapterwise app for iPhone, iPad and Mac.",
};

export default function ChapterwisePrivacyPage() {
  return (
    <div className="prose">
      <h1>Chapterwise Privacy Policy</h1>
      <p>
        <strong>Effective date:</strong> October 27, 2026
      </p>
      <p>
        Chapterwise is an app for writing a book, on iPhone, iPad and Mac, made by Tyler Cyert, an individual developer based in Bloomington, Indiana, United States (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This policy explains what happens to your information when you use it. Our Terms of Use (<Link href="https://tyl.sh/chapterwise/terms">https://tyl.sh/chapterwise/terms</Link>) cover the rest.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>There&apos;s no account and no sign-in.</li>
        <li>Your book is plain files you own, in your iCloud Drive or on your device.</li>
        <li>There are no ads, no analytics and no tracking.</li>
        <li>Nothing is sent to us.</li>
      </ul>

      <h2>What we collect</h2>
      <p>
        Nothing. The app has no server of ours to talk to, and it makes no network requests of its own. It doesn&apos;t send us your writing, your plan, your progress or anything else about you.
      </p>
      <p>
        We don&apos;t collect your name, email address, contacts, location, photos or advertising identifier. We don&apos;t use advertising, analytics or tracking tools, and we don&apos;t track you across other companies&apos; apps or websites. We don&apos;t sell your information or share it with anyone.
      </p>

      <h2>Where your book is kept</h2>
      <p>
        Each book is a folder of plain files:
      </p>
      <ul>
        <li><code>plan.json</code>, the book&apos;s plan: the sentence you typed, the genre and length you chose, the beats and pieces, and your progress, such as which pieces are done and their word counts;</li>
        <li>one Markdown file for each piece, holding what you wrote.</li>
      </ul>
      <p>
        Apart from the books, the app keeps one thing in its own settings on each device, never in the book files: which book you had open last.
      </p>
      <p>
        We don&apos;t have a copy and can&apos;t see any of it. You can open, copy or move these files in Files, in Finder or in any app you choose. What another app does with them is covered by that app&apos;s own terms and privacy policy.
      </p>
      <p>
        <strong>With iCloud Drive on,</strong>{" "}the folder is in your iCloud Drive, under iCloud Drive › Chapterwise. Apple stores it and syncs it between your devices signed in to the same Apple Account, under Apple&apos;s own terms and privacy policy. We have no access to your iCloud Drive. If you turn iCloud Drive on after writing with it off, the app moves the books on that device into iCloud Drive › Chapterwise, once.
      </p>
      <p>
        <strong>With iCloud Drive off,</strong>{" "}or if you&apos;re not signed in to iCloud, the folder stays on your device: in Files under On My iPhone (or On My iPad) › Chapterwise, or in the app&apos;s own storage on your Mac. It doesn&apos;t sync between devices.
      </p>
      <p>
        If you back up your device to iCloud or a computer, that backup may include books kept on the device. That backup is between you and Apple, or kept on your own computer.
      </p>

      <h2>Exporting</h2>
      <p>
        Export…, in the book&apos;s menu in the app&apos;s Books list, makes one Markdown file of your manuscript and opens the system share sheet. You choose where it goes, such as Files, Mail or another app. Once it&apos;s there, it&apos;s handled under that app&apos;s or service&apos;s own terms. The app doesn&apos;t send it anywhere you didn&apos;t choose.
      </p>

      <h2>AI</h2>
      <p>
        Version 1.0 has no AI features. Your writing isn&apos;t sent to an AI service or used to train one. Chapterwise never writes your book for you.
      </p>

      <h2>Notifications and permissions</h2>
      <p>
        Version 1.0 sends no notifications and asks for no permissions.
      </p>

      <h2>Purchases</h2>
      <p>
        Version 1.0 is free, with nothing to buy in the app.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li><strong>Choose where your books live.</strong>{" "}Turn iCloud Drive on or off for Chapterwise in your device&apos;s iCloud settings.</li>
        <li><strong>Take your book with you.</strong>{" "}Your books are plain Markdown files. Open them in Files or Finder, or choose Export… in the book&apos;s menu to share one manuscript.</li>
        <li><strong>Delete a book.</strong>{" "}In the app&apos;s Books list, open the book&apos;s menu and choose Delete. The book&apos;s folder goes to Recently Deleted in Files, or to the Trash on a Mac, where you can still restore it until it&apos;s removed for good.</li>
        <li><strong>Delete the app.</strong>{" "}That removes the books kept on your device and the app&apos;s settings. Books in iCloud Drive stay there; delete the Chapterwise folder in Files or Finder to remove them. Copies in your own device backups stay until you delete or replace those backups.</li>
        <li><strong>Ask us.</strong>{" "}Email us at any time. We hold nothing of yours, so there&apos;s usually nothing on our side to look up or delete, but we&apos;re happy to answer questions.</li>
      </ul>

      <h2>Your rights in the EU, UK and California</h2>
      <p>
        <strong>EU and UK.</strong>{" "}The app processes your data only on your device and, if you turn on iCloud Drive, in your own iCloud account, which Apple provides to you under its own terms. We receive none of it. If that ever changes, this policy will say so first. You have the right to access, correct or delete your data, to restrict or object to how it&apos;s used, to data portability, and to complain to your local data protection authority.
      </p>
      <p>
        <strong>California.</strong>{" "}We don&apos;t sell or share your personal information, as California law uses those words, and we don&apos;t use it for targeted advertising. You can ask to know what we hold about you (nothing, as of this version), to correct it or to delete it, and we won&apos;t treat you differently for asking.
      </p>

      <h2>Children</h2>
      <p>
        Chapterwise isn&apos;t directed at children under 13. You must be at least 13 to use it. We don&apos;t knowingly collect information from children under 13.
      </p>

      <h2>Changes</h2>
      <p>
        If we change this policy, we&apos;ll update the effective date above. If a change means anything is sent to us or to anyone else, we&apos;ll update this policy and tell you in the app before it takes effect.
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

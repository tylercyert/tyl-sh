import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chapterwise — Support",
  description: "Support for the Chapterwise app for iPhone, iPad and Mac.",
};

export default function ChapterwiseSupportPage() {
  return (
    <div className="prose">
      <h1>Chapterwise</h1>
      <p>
        Type one sentence about your book. Chapterwise plans the whole book and hands you one small piece to write at a time, on iPhone, iPad and Mac. No account, no tracking, and AI never writes for you.
      </p>

      <h2>Contact</h2>
      <p>
        Questions, bugs or ideas: email <Link href="mailto:sudo@tyl.sh">sudo@tyl.sh</Link>.
      </p>

      <h2>Common questions</h2>
      <h3>Where is my book stored?</h3>
      <p>
        In plain files you own: one folder per book, with its plan and one Markdown file for each piece. With iCloud Drive on, the folder is in Files › iCloud Drive › Chapterwise (in Finder on a Mac, iCloud Drive › Chapterwise). With iCloud Drive off, it&apos;s on your device, in Files › On My iPhone › Chapterwise (On My iPad on an iPad), or in the app&apos;s own storage on a Mac. There&apos;s no account, so we can&apos;t see or recover your books.
      </p>
      <h3>How do I move a book to another app?</h3>
      <p>
        Your book is already Markdown, one file per piece, so any Markdown or text editor can open it from Files or Finder. To get it as a single file, go to the app&apos;s Books list, open the book&apos;s menu (touch and hold the book on iPhone and iPad, or Control-click or right-click it on a Mac) and choose Export…. It makes one Markdown manuscript and opens the share sheet, so you can save it to Files, send it to another app or email it.
      </p>
      <h3>How do I get my book onto another device?</h3>
      <p>
        Turn on iCloud Drive on both devices, signed in with the same Apple Account. Your books sync through iCloud Drive › Chapterwise and open in Chapterwise on each device. If you started with iCloud Drive off, turning it on moves the books on that device into iCloud Drive › Chapterwise, once.
      </p>
      <h3>What if I edit the same piece on two devices?</h3>
      <p>
        If two devices change the same piece before they&apos;ve synced, Chapterwise keeps both. One stays as the piece; the other is saved beside it, with &ldquo;(other version)&rdquo; at the end of its name. Nothing is thrown away. Open the other version in Files or Finder, copy anything you want to keep into the piece, then delete the other version.
      </p>
      <h3>How do I delete a book?</h3>
      <p>
        In the app&apos;s Books list, open the book&apos;s menu (touch and hold the book on iPhone and iPad, or Control-click or right-click it on a Mac) and choose Delete. The book&apos;s folder goes to Recently Deleted in Files, or to the Trash on a Mac, where you can still restore it until it&apos;s removed for good.
      </p>

      <h2>Legal</h2>
      <ul>
        <li>Privacy Policy: <Link href="https://tyl.sh/chapterwise/privacy">https://tyl.sh/chapterwise/privacy</Link></li>
        <li>Terms of Use: <Link href="https://tyl.sh/chapterwise/terms">https://tyl.sh/chapterwise/terms</Link></li>
      </ul>
    </div>
  );
}

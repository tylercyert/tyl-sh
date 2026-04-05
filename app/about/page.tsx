import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Tyler Cyert.",
};

export default function AboutPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>About Me</h1>
      <p>
        Hi, I&apos;m Tyler Cyert. Welcome to my corner of the internet.
      </p>
      <p>
        This site is where I share my projects, thoughts, and things I&apos;m
        working on. Feel free to look around.
      </p>
      {/* Add your full bio here */}
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
  description: "About Tyler Cyert.",
};

export default function AboutPage() {
  return (
    <div className="prose">
      <h1>about</h1>
      <p>
        Hi, I&apos;m Tyler. I wear a lot of hats, but if I had to pick one
        label it&apos;d be creator. That&apos;s where the energy comes from.
        I&apos;ve always been drawn to building things, at work, on my own
        time, at every scale.
      </p>
      <p>
        Today, most of my energy goes toward building software that complements
        human nature rather than exploits it. Technology can do great things
        when focused correctly, and real damage when it isn&apos;t. I&apos;ve
        got a few products in my pipeline, and I hope you&apos;ll notice the
        pattern: they&apos;re built for people, not around them.
      </p>
    </div>
  );
}

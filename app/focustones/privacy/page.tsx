import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { MDXRemote } from "next-mdx-remote/rsc";

export const metadata: Metadata = {
  title: "FocusTones — Privacy Policy",
  description: "Privacy Policy for the FocusTones iPhone app.",
};

const policy = readFileSync(
  join(process.cwd(), "content/legal/focustones-privacy.mdx"),
  "utf8",
);

export default function FocusTonesPrivacyPage() {
  return (
    <article className="prose">
      <MDXRemote source={policy} />
    </article>
  );
}

import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { MDXRemote } from "next-mdx-remote/rsc";

export const metadata: Metadata = {
  title: { absolute: "FocusTones — Support" },
  description: "Support for the FocusTones iPhone app.",
};

const support = readFileSync(
  join(process.cwd(), "content/legal/focustones-support.mdx"),
  "utf8",
);

export default function FocusTonesSupportPage() {
  return (
    <article className="prose">
      <MDXRemote source={support} />
    </article>
  );
}

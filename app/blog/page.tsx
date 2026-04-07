import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "blog",
  description: "Blog posts by Tyler Cyert.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <h1>blog</h1>
      {posts.length === 0 ? (
        <p style={{ color: "var(--fg-dim)" }}>No posts yet.</p>
      ) : (
        <ul className="post-list" style={{ marginTop: "1rem" }}>
          {posts.map((post) => (
            <li key={post.slug} className="post-item">
              <span className="post-date">
                {new Date(post.date).toISOString().slice(0, 10)}
              </span>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 5);

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Tyler Cyert</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Projects, thoughts, and writing.
        </p>
        <Link
          href="/about"
          className="inline-block text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        >
          More about me &rarr;
        </Link>
      </section>

      {recentPosts.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">Recent Posts</h2>
          <div className="space-y-8">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <Link
            href="/blog"
            className="inline-block text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            All posts &rarr;
          </Link>
        </section>
      )}
    </div>
  );
}

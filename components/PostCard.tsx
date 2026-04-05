import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article>
      <Link href={`/blog/${post.slug}`} className="group block">
        <h3 className="text-lg font-medium group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
          {post.title}
        </h3>
        <time className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {post.description && (
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
            {post.description}
          </p>
        )}
      </Link>
    </article>
  );
}

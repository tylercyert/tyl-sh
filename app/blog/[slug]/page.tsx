import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import mdxComponents from "@/components/MDXComponents";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <header style={{ marginBottom: "2rem" }}>
        <h1>{post.title}</h1>
        <time className="post-date">
          {new Date(post.date).toISOString().slice(0, 10)}
        </time>
      </header>
      <div className="prose">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}

import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 5);

  return (
    <>
      <section>
        <h1>&gt;tyl.sh</h1>
        <p>Projects, thoughts, and writing by Tyler Cyert.</p>
      </section>

      <hr />

      <section>
        <h2>work</h2>
        <div className="project">
          <h3>
            <Link href="https://github.com/tylercyert/nitesong">nitesong</Link>
          </h3>
          <p>
            Creator and sole developer of nitesong — songwriting SaaS built to
            amplify the human creative experience.
          </p>
        </div>
      </section>

      <hr />

      {recentPosts.length > 0 && (
        <section>
          <h2>recent posts</h2>
          <ul className="post-list">
            {recentPosts.map((post) => (
              <li key={post.slug} className="post-item">
                <span className="post-date">
                  {new Date(post.date).toISOString().slice(0, 10)}
                </span>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "1rem" }}>
            <Link href="/blog">all posts &rarr;</Link>
          </p>
        </section>
      )}
    </>
  );
}

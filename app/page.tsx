import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 5);

  return (
    <>
      <section>
        <pre style={{ color: "var(--accent)", fontSize: "0.45rem", lineHeight: 1.2, marginBottom: "1rem" }}>{`  :::::::::::  :::   :::  :::              ::::::::   :::    :::
     :+:      :+:   :+:  :+:             :+:    :+:  :+:    :+:
    +:+       +:+ +:+   +:+             +:+         +:+    +:+
   +#+        +#++:    +#+             +#++:++#++  +#++:++#++
  +#+         +#+     +#+                    +#+  +#+    +#+
 #+#         #+#     #+#         #+#  #+#    #+#  #+#    #+#
###         ###     ##########  ###   ########   ###    ###`}</pre>
        <h1>hello world!</h1>
        <p>My name is Tyler Cyert. By day, I am a Systems Engineer at SoundPro.com. By night, I am a developer, writer, and musician.</p>
      </section>

      <hr />

      <section>
        <h2>work</h2>
        <div className="project">
          <h3>
            <Link href="https://www.nitesong.io">nitesong</Link>
          </h3>
          <p>
            Creator and sole developer of nitesong — songwriting SaaS built for
            writers who want to stay in the creative flow.
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

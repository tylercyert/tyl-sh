import Image from "next/image";
import type { MDXComponents } from "mdx/types";

const SpotifyPlaylist = ({ id, title }: { id: string; title?: string }) => (
  <iframe
    src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator`}
    width="100%"
    height="352"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    title={title ?? "Spotify playlist"}
    style={{ border: 0, borderRadius: 12, marginBlock: "1rem" }}
  />
);

const components: MDXComponents = {
  img: (props) => (
    <Image
      {...(props as { src: string; alt: string })}
      width={720}
      height={400}
      style={{ width: "100%", height: "auto" }}
    />
  ),
  SpotifyPlaylist,
};

export default components;

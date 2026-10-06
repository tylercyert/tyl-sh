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

// The MDX renderer blocks JS expressions, so every prop arrives as a string.
const Figure = ({
  src,
  alt,
  caption,
  href,
  generated,
  width = "592",
  height = "400",
}: {
  src: string;
  alt: string;
  caption?: string;
  href?: string;
  generated?: string;
  width?: string;
  height?: string;
}) => {
  const w = Number(width);
  const image = (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={Number(height)}
      style={{ width: "100%", height: "auto" }}
    />
  );
  const isGenerated = generated === "true";
  return (
    <figure style={{ maxWidth: `${w}px`, marginInline: 0 }}>
      {href ? (
        <a href={href} rel="noreferrer">
          {image}
        </a>
      ) : (
        image
      )}
      {(caption || isGenerated) && (
        <figcaption>
          {caption}
          {isGenerated ? " (generated)" : ""}
        </figcaption>
      )}
    </figure>
  );
};

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
  Figure,
};

export default components;

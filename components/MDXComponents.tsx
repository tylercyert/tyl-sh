import Image from "next/image";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  img: (props) => (
    <Image
      {...(props as { src: string; alt: string })}
      width={720}
      height={400}
      className="rounded-lg"
      style={{ width: "100%", height: "auto" }}
    />
  ),
};

export default components;

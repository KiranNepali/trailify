import React from "react";
import BlogHero from "./BlogHero";
import Blogs from "./Blogs";

type Props = {};

export default function BlogMain({}: Props) {
  return (
    <div>
      <BlogHero />
      <Blogs />
    </div>
  );
}

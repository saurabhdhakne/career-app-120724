// src/components/Blog.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase/supabase";
import DOMPurify from "dompurify";

const Blog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  async function fetchBlogs() {
    let { data: blog, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug);
    setBlog(blog[0]);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }

  if (!blog) {
    return <div className="container font-bold text-xl">Post not found!</div>;
  }

  return (
    <div className="container">
      <div className="m-4  overflow-y-auto flex flex-col items-center justify-start">
        <div dangerouslySetInnerHTML={{ __html: blog?.desc }} />
      </div>
    </div>
  );
};

export default Blog;

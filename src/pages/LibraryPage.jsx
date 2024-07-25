// src/components/Blog.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase/supabase";
import DOMPurify from "dompurify";

const LibraryPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  async function fetchBlogs() {
    let { data: blog, error } = await supabase
      .from("library")
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
    <div className="container mx-auto w-[700px] mt-[20px] overflow-y-auto px-2">
      <div
        className="rounded-md p-4 w-full"
        dangerouslySetInnerHTML={createMarkup(blog.desc)}
      ></div>
    </div>
  );
};

export default LibraryPage;

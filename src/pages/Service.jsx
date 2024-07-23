// src/components/Blog.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase/supabase";
import DOMPurify from "dompurify";

const Service = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  async function fetchBlogs() {
    let { data: blog, error } = await supabase
      .from("services")
      .select("*")
      .eq("slug", slug);
    console.log("blog: ", blog);
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
      <div className=" relative w-full h-[100%] flex flex-col items-center justify-center  bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/553575/pexels-photo-553575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-4 text-white text-center">
          <h1 className="text-6xl text-white font-bold my-2">{blog.title}</h1>
          <p>{blog.subtitle}</p>
          <p>
            <em>{blog.author}</em>
          </p>
        </div>
      </div>
      <div className="m-4  overflow-y-auto flex flex-col items-center justify-start">
        <div
          className=" shadow h-full my-4 rounded-md p-4 w-full"
          dangerouslySetInnerHTML={createMarkup(blog.desc)}
        ></div>
        <div className="text-center bg-slate-100 w-full p-4 rounded-md">
          <p>Categories: {blog.categories}</p>
          <p>Tags: {blog.tags}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;

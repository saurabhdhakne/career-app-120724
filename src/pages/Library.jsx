import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

const Library = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  async function fetchBlogs() {
    let { data: blogs, error } = await supabase
      .from("library")
      .select("title,subtitle,slug,id,thumbnail");
    setAllBlogs(blogs);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <section className="overflow-hidden mt-[20px] dark:bg-dark">
        <section className="container mx-auto bg-white dark:bg-dark">
          <div className="">
            <div className="flex flex-wrap">
              <div className="container">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <span className="mb-2 block text-lg font-semibold text-primary">
                    Our Library
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                    Our newest guides
                  </h2>
                  <p className="text-base text-body-color dark:text-dark-6">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row pb-5">
              <div className="w-[20%] shadow hidden md:block">
                <Sidebar />
              </div>
              <div className="w-[100%] md:w-[80%] flex flex-wrap">
                {allBlogs?.map((item) => (
                  <Card
                    key={item.id}
                    data={item}
                    route={"library"}
                    bucketName={"images"}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Library;
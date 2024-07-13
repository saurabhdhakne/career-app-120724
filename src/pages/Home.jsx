import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import Card from "../components/Card";

const Home = () => {
  const navigate = useNavigate();
  const [allBlogs, setAllBlogs] = useState([]);
  const [services, setServices] = useState([]);

  async function fetchBlogs() {
    let { data: blogs, error } = await supabase
      .from("blogs")
      .select("title,subtitle,slug,id");
    setAllBlogs(blogs);
  }
  async function fetchServices() {
    let { data: services, error } = await supabase
      .from("services")
      .select("title,subtitle,slug,id");
    setServices(services);
  }

  useEffect(() => {
    fetchBlogs();
    fetchServices();
  }, []);

  function handleLogout() {
    localStorage.removeItem("accessToken");
    navigate("/login");
  }
  return (
    <>
      <section className="container bg-white dark:bg-dark">
        <div className="">
          <div className=" flex flex-wrap">
            <div className="container">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Services
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-wrap">
            {services?.map((item) => (
              <Card
                key={item.id}
                data={item}
                route={"service"}
                date="Dec 22, 2023"
                CardTitle="Meet AutoManage, the best AI management tools"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "../supabase/supabase";
// import Card from "../components/Card";

// const Home = () => {
//   const navigate = useNavigate();
//   const [allBlogs, setAllBlogs] = useState([]);
//   const [services, setServices] = useState([]);

//   async function fetchBlogs() {
//     let { data: blogs, error } = await supabase
//       .from("blogs")
//       .select("title,subtitle,slug,id");
//     setAllBlogs(blogs);
//   }
//   async function fetchServices() {
//     let { data: services, error } = await supabase
//       .from("services")
//       .select("title,subtitle,slug,id");
//     setServices(services);
//   }

//   useEffect(() => {
//     fetchBlogs();
//     fetchServices();
//   }, []);

//   function handleLogout() {
//     localStorage.removeItem("accessToken");
//     navigate("/login");
//   }

//   return (
//     <div className="flex flex-col w-full h-full p-4">
//       <div className="bg-blue-100 p-2 w-full text-center rounded-md text-2xl text-slate-700">
//         Career guides
//       </div>

//       <div className="grid gap-4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {allBlogs.map((item) => (
//           <Card key={item.id} data={item} route={"blog"} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

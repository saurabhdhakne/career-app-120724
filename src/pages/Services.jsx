import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import Card from "../components/Card";

const Services = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  async function fetchServices() {
    let { data: services, error } = await supabase
      .from("services")
      .select("title,subtitle,slug,id");
    setServices(services);
  }

  useEffect(() => {
    fetchServices();
  }, []);

  function handleLogout() {
    localStorage.removeItem("accessToken");
    navigate("/login");
  }
  return (
    <>
      <section className="overflow-hidden mt-[20px] dark:bg-dark">
        <section className="container mx-auto bg-white dark:bg-dark">
          <div className="">
            <div className=" flex flex-wrap">
              <div className="container">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <span className="mb-2 block text-lg font-semibold text-primary">
                    Our Services
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                    Our Services
                  </h2>
                  <p className="text-base text-body-color dark:text-dark-6">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
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
      </section>
    </>
  );
};

export default Services;

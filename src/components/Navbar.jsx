import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { IoMdCreate } from "react-icons/io";
import { MdHomeRepairService } from "react-icons/md";
import { ImBooks } from "react-icons/im";

const Navbar = () => {
  const { isAuthenticated, isAdmin } = useContext(AppContext);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const navigate = useNavigate();
  const [navbarBlur, setNavbarBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("handle scroll");
      if (window.scrollY > 5) {
        console.log("Add class");
        setNavbarBlur(true);
      } else {
        setNavbarBlur(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Blogs", href: "/blogs", current: false },
    { name: "Services", href: "/services", current: false },
    { name: "Library", href: "/library", current: false },
    { name: "Contact", href: "/contact", current: false },
    { name: "About", href: "/about", current: false },
  ];

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    navigate("/");
  };

  const toggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-40 navbar-blur ${
          navbarBlur ? "navbar-blur" : ""
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-normal whitespace-nowrap">
              ACS
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={toggleSidenav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-primary-dark md:p-0 ${
                      item.current
                        ? "bg-primary text-white md:bg-transparent md:text-primary"
                        : "text-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {isAuthenticated() ? (
                <>
                  {isAdmin() && (
                    <>
                      <button
                        onClick={() => navigate("/admin/create-blog")}
                        type="button"
                        title="New blog"
                        className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-full text-sm p-2  dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800"
                      >
                        <IoMdCreate />
                      </button>
                      <button
                        onClick={() => navigate("/admin/create-service")}
                        type="button"
                        title="New Service"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm p-2  dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                      >
                        <MdHomeRepairService />
                      </button>
                      <button
                        onClick={() => navigate("/admin/create-library")}
                        type="button"
                        title="New Service"
                        className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-full text-sm p-2  dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
                      >
                        <ImBooks />
                      </button>
                    </>
                  )}
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-light font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary dark:hover:bg-primary-dark focus:outline-none dark:focus:ring-primary-dark"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  type="button"
                  className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-light font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary dark:hover:bg-primary-dark focus:outline-none dark:focus:ring-primary-dark"
                >
                  Login
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/*----------- Sidenav Overlay -------------------*/}
      {sidenavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleSidenav}
        ></div>
      )}
      {/* Sidenav */}
      <div
        className={`fixed top-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          sidenavOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-500 focus:outline-none"
          onClick={toggleSidenav}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col mt-8 p-4">
          {navItems.map((item, index) => (
            <li key={index} className="mb-2">
              <Link
                to={item.href}
                className={`block py-2 px-4 rounded hover:bg-primary-light ${
                  item.current ? "bg-primary text-white" : "text-gray-900"
                }`}
                onClick={toggleSidenav}
              >
                {item.name}
              </Link>
            </li>
          ))}
          {isAuthenticated() ? (
            <>
              {isAdmin() && (
                <div className="flex gap-2 items-center justify-evenly mb-3">
                  <button
                    onClick={() => navigate("/admin/create-blog")}
                    type="button"
                    title="New blog"
                    className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-full text-sm p-2  dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800"
                  >
                    <IoMdCreate />
                  </button>
                  <button
                    onClick={() => navigate("/admin/create-service")}
                    type="button"
                    title="New Service"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm p-2  dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                  >
                    <MdHomeRepairService />
                  </button>
                  <button
                    onClick={() => navigate("/admin/create-library")}
                    type="button"
                    title="New Service"
                    className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-full text-sm p-2  dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
                  >
                    <ImBooks />
                  </button>
                </div>
              )}
              <button
                onClick={() => {
                  handleLogout();
                  toggleSidenav();
                }}
                type="button"
                className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-light font-medium rounded-lg text-sm px-5 py-2.5 mt-2 dark:bg-primary dark:hover:bg-primary-dark focus:outline-none dark:focus:ring-primary-dark"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                toggleSidenav();
              }}
              type="button"
              className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-light font-medium rounded-lg text-sm px-5 py-2.5 mt-2 dark:bg-primary dark:hover:bg-primary-dark focus:outline-none dark:focus:ring-primary-dark"
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import {
  FaTachometerAlt,
  FaTasks,
  FaInbox,
  FaUsers,
  FaBoxOpen,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const sidebarItems = [
  {
    icon: FaTachometerAlt,
    label: "Software",
    badge: "3",
    path: "/admin/dashboard",
  },
  { icon: FaTasks, label: "Designing", path: "/admin/create-blog" },
  { icon: FaInbox, label: "physics" },
  { icon: FaUsers, label: "Maths" },
  { icon: FaBoxOpen, label: "Electronics" },
];

const Sidebar = () => {
  return (
    <aside id="default-sidebar" className="shadow" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto ">
        <p className="text-center bg-primary text-white p-2 rounded-md mb-2">
          Catalogue
        </p>
        <ul className="space-y-2 font-medium">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <ul className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                {/* <item.icon className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" /> */}
                <span className="ml-3">{item.label}</span>
                {false && (
                  <span
                    className={`inline-flex items-center justify-center px-2 ml-3 text-sm font-medium ${
                      item.badge === "Pro"
                        ? "text-gray-800 bg-gray-100"
                        : "text-blue-800 bg-blue-100"
                    } rounded-full`}
                  >
                    {item.badge}
                  </span>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

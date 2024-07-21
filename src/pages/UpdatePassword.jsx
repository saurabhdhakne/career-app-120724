import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../supabase/supabase";

export default function UpdatePassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(null);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const hash = new URLSearchParams(location.hash.substring(1));
    const accessToken = hash.get("access_token");

    if (accessToken) {
      setToken(accessToken);
    } else {
      setErrors({ token: "Invalid or missing token" });
    }
  }, [location]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
    setErrors({});
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }
    if (!token) {
      setErrors({ token: "Invalid or missing token" });
      return;
    }
    const { data, error } = await supabase.auth.updateUser(
      {
        password: password,
      },
      {
        access_token: token,
      }
    );
    if (error) {
      setErrors({ password: error.message });
    } else {
      alert("Password updated successfully");
      navigate("/login");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="shadow-md p-6 rounded-lg">
        <div className="bg-primary text-white text-center p-2 rounded-md my-2">
          Career App
        </div>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          {errors.token && (
            <p className="text-red-500 text-sm mt-1">{errors.token}</p>
          )}
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-light focus:border-primary-light block w-full p-2.5"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-light focus:border-primary-light block w-full p-2.5"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

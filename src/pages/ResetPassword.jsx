// create a react component to reset password
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
    setEmail(value);
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    console.log("e: ", e);
    e.preventDefault();
    setErrors({});
    if (email === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: error.message,
      }));
      return;
    }
    alert("Please check your email for the password reset link");
    navigate("/login");
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="shadow-md p-6 rounded-lg">
        <div className="bg-primary text-white text-center p-2 rounded-md my-2">
          Career App
        </div>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-light focus:border-primary-light block w-full p-2.5"
              placeholder="name@example.com"
              required
              value={email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="flex items-center justify-between">
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

// import { set } from "mongoose";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "./OAuth";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { error, loading } = useSelector((state) => state.user);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add signup logic here (e.g., API call)

    // For demo purposes, navigate to the login page after signup
    try {
      // setLoading(true);
      // setError(false);
      dispatch(signInStart());
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // setLoading(false);
      dispatch(signInSuccess(data));
      if (data.success === false) {
        dispatch(signInFailure());
        return;
      }
      navigate("/login");
    } catch (err) {
      dispatch(signInFailure());
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#FEFDF6] p-8">
      <h2 className="text-3xl font-extrabold text-[#1E1C39] mt-12">Sign Up</h2>
      <form
        className="flex flex-col space-y-4 w-96 mt-8"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
          className="py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-[#1E1C39]"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-[#1E1C39]"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-[#1E1C39]"
          required
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-[#1E1C39] text-[#FEFDF6] py-3 px-4 rounded-md shadow-md hover:bg-[#2E2C49] transition duration-300"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth />
      </form>
      {error && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
};

export default Signup;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "./OAuth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
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
    try {
      // setLoading(true);
      // setError(null);
      dispatch(signInStart());
      const res = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", // Include credentials
      });
      const data = await res.json();
      console.log(data);
      // setLoading(false);
      setFormData({
        email: "",
        password: "",
      });
      if (data.success === false) {
        // setError(true);
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (err) {
      // setLoading(false);
      // setError(true);
      dispatch(signInFailure(error));
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#FEFDF6] px-8">
      <h2 className="text-3xl font-extrabold text-[#1E1C39] mt-24">Login</h2>
      <form
        className="flex flex-col space-y-4 w-96 mt-8"
        onSubmit={handleSubmit}
      >
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
          type="submit"
          className="bg-[#1E1C39] text-[#FEFDF6] py-3 px-4 rounded-md shadow-md hover:bg-[#2E2C49] transition duration-300"
        >
          {loading ? "Loading..." : "Login"}
        </button>
        <OAuth />
      </form>
      <p className="mt-4 text-[#1E1C39]">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
      <p className="text-red-500 mt-4">
        {error ? error || "Invalid email or password" : ""}
      </p>
    </div>
  );
};

export default Login;

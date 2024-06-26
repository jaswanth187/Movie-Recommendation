import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., API call)

    // For demo purposes, navigate to the results page after login
    navigate("/results");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#FEFDF6] px-8">
      <h2 className="text-3xl font-extrabold text-[#1E1C39] mt-32">Login</h2>
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
          className="bg-[#1E1C39] text-[#FEFDF6] py-2 px-4 rounded-md shadow-md hover:bg-[#2E2C49] transition duration-300"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-[#1E1C39]">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;

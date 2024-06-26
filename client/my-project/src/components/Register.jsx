import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
    // Add signup logic here (e.g., API call)

    // For demo purposes, navigate to the login page after signup
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#FEFDF6] p-8">
      <h2 className="text-3xl font-extrabold text-[#1E1C39] mt-20">Sign Up</h2>
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
          type="submit"
          className="bg-[#1E1C39] text-[#FEFDF6] py-2 px-4 rounded-md shadow-md hover:bg-[#2E2C49] transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

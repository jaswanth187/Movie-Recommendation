import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden flex-grow bg-[#FEFDF6] p-8">
      <h1 className="text-4xl font-extrabold text-[#1E1C39] mb-4">
        Welcome to POPCORNPICKS
      </h1>
      <p className="text-lg text-[#1E1C39] mb-6">
        Find Your Next Favorite Film
      </p>
      <button
        className="bg-[#1E1C39] text-[#FEFDF6] font-semibold py-2 px-4 rounded-md shadow-md hover:bg-[#2E2C49] transition duration-300"
        onClick={() => navigate("/get-started")}
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;

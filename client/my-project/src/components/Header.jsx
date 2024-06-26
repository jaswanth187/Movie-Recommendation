import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#FEFDF6] w-full">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex flex-row items-center font-bold text-[#1E1C39]">
          <Link to="/">
            <img src="/logo_2.png" alt="POPCORNPICKS" className="w-20" />
          </Link>
          <Link to="/">
            <h2 className="text-[#1E1C39]">POPCORNPICKS</h2>
          </Link>
        </div>
        <Link to="/login">
          <h1 className="font-bold">Login</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;

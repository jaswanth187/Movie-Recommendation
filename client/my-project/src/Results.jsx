import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Results = () => {
  const location = useLocation();
  const formData = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FEFDF6] p-8">
      <h1 className="text-4xl font-extrabold text-[#1E1C39] mb-4">
        Your Movie Preferences
      </h1>
      <p className="text-lg text-[#1E1C39] mb-2">Mood: {formData.mood}</p>
      <p className="text-lg text-[#1E1C39] mb-2">
        Occasion: {formData.occasion}
      </p>
      <p className="text-lg text-[#1E1C39] mb-2">Genre: {formData.genre}</p>
    </div>
  );
};

// PropTypes validation
Results.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      mood: PropTypes.string,
      occasion: PropTypes.string,
      genre: PropTypes.string,
    }),
  }),
};

export default Results;

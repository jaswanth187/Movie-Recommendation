import PropTypes from "prop-types";

const Step1 = ({ formData, handleInputChange }) => {
  console.log("Current mood:", formData.mood); // Debugging: Check current mood

  return (
    <div className="flex flex-col items-center mb-12">
      <h2 className="text-2xl font-bold mb-4">How are you feeling today?</h2>
      <div className="flex flex-col space-y-4 w-96">
        <button
          style={{
            backgroundColor: formData.mood === "happy" ? "#4FD1C5" : "#E5E7EB",
          }}
          className="bg-gray-200 py-3 px-6 rounded-md text-lg"
          onClick={() => handleInputChange("mood", "happy")}
        >
          Happy
        </button>
        <button
          style={{
            backgroundColor: formData.mood === "sad" ? "#4FD1C5" : "#E5E7EB",
          }}
          className="bg-gray-200 py-3 px-6 rounded-md text-lg"
          onClick={() => handleInputChange("mood", "sad")}
        >
          Sad
        </button>
        <button
          style={{
            backgroundColor: formData.mood === "normal" ? "#4FD1C5" : "#E5E7EB",
          }}
          className="bg-gray-200 py-3 px-6 rounded-md text-lg"
          onClick={() => handleInputChange("mood", "normal")}
        >
          Normal
        </button>
      </div>
    </div>
  );
};

Step1.propTypes = {
  formData: PropTypes.shape({
    mood: PropTypes.string.isRequired,
    occasion: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Step1;

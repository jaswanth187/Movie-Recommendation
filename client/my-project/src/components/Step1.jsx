import PropTypes from "prop-types";

const Step1 = ({ formData, handleInputChange }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">How are you feeling today?</h2>
      <div className="flex flex-col space-y-2">
        <button
          className={`bg-gray-200 py-2 px-4 rounded-md ${
            formData.mood === "happy" ? "bg-blue-300" : ""
          }`}
          onClick={() => handleInputChange("mood", "happy")}
        >
          Happy
        </button>
        <button
          className={`bg-gray-200 py-2 px-4 rounded-md ${
            formData.mood === "sad" ? "bg-blue-300" : ""
          }`}
          onClick={() => handleInputChange("mood", "sad")}
        >
          Sad
        </button>
        <button
          className={`bg-gray-200 py-2 px-4 rounded-md ${
            formData.mood === "normal" ? "bg-blue-300" : ""
          }`}
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

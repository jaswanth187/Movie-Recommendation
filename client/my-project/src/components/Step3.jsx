import PropTypes from "prop-types";

const Step3 = ({ formData, handleInputChange }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">
        Please choose any genre you’re interested in.
      </h2>
      <div className="flex flex-col space-y-2">
        <button
          className={`bg-gray-200 py-2 px-4 rounded-md ${
            formData.genre === "action" ? "bg-blue-300" : ""
          }`}
          onClick={() => handleInputChange("genre", "action")}
        >
          Action
        </button>
        <button
          className={`bg-gray-200 py-2 px-4 rounded-md ${
            formData.genre === "comedy" ? "bg-blue-300" : ""
          }`}
          onClick={() => handleInputChange("genre", "comedy")}
        >
          Comedy
        </button>
        <button
          className={`bg-gray-200 py-2 px-4 rounded-md ${
            formData.genre === "drama" ? "bg-blue-300" : ""
          }`}
          onClick={() => handleInputChange("genre", "drama")}
        >
          Drama
        </button>
        <button
          className={`bg-gray-200 py-2 px-4 rounded-md ${
            formData.genre === "horror" ? "bg-blue-300" : ""
          }`}
          onClick={() => handleInputChange("genre", "horror")}
        >
          Horror
        </button>
      </div>
    </div>
  );
};

Step3.propTypes = {
  formData: PropTypes.shape({
    mood: PropTypes.string,
    occasion: PropTypes.string,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Step3;

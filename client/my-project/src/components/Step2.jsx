import PropTypes from "prop-types";

const Step2 = ({ formData, handleInputChange }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">
        What comes closest to your occasion?
      </h2>
      <div className="flex flex-col space-y-2">
        <button
          className={`bg-gray-200 py-2 px-4 rounded-md ${
            formData.occasion === "myself" ? "bg-blue-300" : ""
          }`}
          onClick={() => handleInputChange("occasion", "myself")}
        >
          Just watching a movie by myself
        </button>
        <button
          className={`bg-gray-200 py-2 px-4 rounded-md ${
            formData.occasion === "date" ? "bg-blue-300" : ""
          }`}
          onClick={() => handleInputChange("occasion", "date")}
        >
          Movie Date
        </button>
        <button
          className={`bg-gray-200 py-2 px-4 rounded-md ${
            formData.occasion === "friends" ? "bg-blue-300" : ""
          }`}
          onClick={() => handleInputChange("occasion", "friends")}
        >
          Movie night with friends
        </button>
        <button
          className={`bg-gray-200 py-2 px-4 rounded-md ${
            formData.occasion === "family" ? "bg-blue-300" : ""
          }`}
          onClick={() => handleInputChange("occasion", "family")}
        >
          Watching a movie with family or relative
        </button>
      </div>
    </div>
  );
};

Step2.propTypes = {
  formData: PropTypes.shape({
    mood: PropTypes.string,
    occasion: PropTypes.string.isRequired,
    genre: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Step2;

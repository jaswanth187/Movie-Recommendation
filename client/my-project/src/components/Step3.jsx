import PropTypes from "prop-types";

const Step3 = ({ formData, handleInputChange }) => {
  return (
    <div className="flex flex-col items-center mb-12">
      <h2 className="text-2xl font-bold mb-4">
        Please choose any genre you’re interested in.
      </h2>
      <div className="flex flex-col space-y-4 w-96">
        <button
          style={{
            backgroundColor:
              formData.genre === "action" ? "#4FD1C5" : "#E5E7EB",
          }}
          className="bg-gray-200 py-2 px-4 rounded-md text-lg"
          onClick={() => handleInputChange("genre", "action")}
        >
          Action
        </button>
        <button
          style={{
            backgroundColor:
              formData.genre === "comedy" ? "#4FD1C5" : "#E5E7EB",
          }}
          className="bg-gray-200 py-2 px-4 rounded-md text-lg"
          onClick={() => handleInputChange("genre", "comedy")}
        >
          Comedy
        </button>
        <button
          style={{
            backgroundColor: formData.genre === "drama" ? "#4FD1C5" : "#E5E7EB",
          }}
          className="bg-gray-200 py-2 px-4 rounded-md text-lg"
          onClick={() => handleInputChange("genre", "drama")}
        >
          Drama
        </button>
        <button
          style={{
            backgroundColor:
              formData.genre === "horror" ? "#4FD1C5" : "#E5E7EB",
          }}
          className="bg-gray-200 py-2 px-4 rounded-md text-lg"
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

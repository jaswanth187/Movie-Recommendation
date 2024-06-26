import PropTypes from "prop-types";

const Step2 = ({ formData, handleInputChange }) => {
  return (
    <div className="flex flex-col items-center mb-12">
      <h2 className="text-2xl font-bold mb-4">
        What comes closest to your occasion?
      </h2>
      <div className="flex flex-col space-y-4 w-96">
        <button
          style={{
            backgroundColor:
              formData.occasion === "myself" ? "#4FD1C5" : "#E5E7EB",
          }}
          className="bg-gray-200 py-2 px-4 rounded-md text-lg"
          onClick={() => handleInputChange("occasion", "myself")}
        >
          Just watching a movie by myself
        </button>
        <button
          style={{
            backgroundColor:
              formData.occasion === "date" ? "#4FD1C5" : "#E5E7EB",
          }}
          className="bg-gray-200 py-2 px-4 rounded-md text-lg"
          onClick={() => handleInputChange("occasion", "date")}
        >
          Movie Date
        </button>
        <button
          style={{
            backgroundColor:
              formData.occasion === "friends" ? "#4FD1C5" : "#E5E7EB",
          }}
          className="bg-gray-200 py-2 px-4 rounded-md text-lg"
          onClick={() => handleInputChange("occasion", "friends")}
        >
          Movie night with friends
        </button>
        <button
          style={{
            backgroundColor:
              formData.occasion === "family" ? "#4FD1C5" : "#E5E7EB",
          }}
          className="bg-gray-200 py-2 px-4 rounded-md text-lg"
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

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    mood: "",
    occasion: "",
    genre: "",
  });

  const navigate = useNavigate();

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final step: handle form submission
      navigate("/results", { state: formData }); // Navigate to results page with state
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FEFDF6] p-8">
      {step === 1 && (
        <Step1 formData={formData} handleInputChange={handleInputChange} />
      )}
      {step === 2 && (
        <Step2 formData={formData} handleInputChange={handleInputChange} />
      )}
      {step === 3 && (
        <Step3 formData={formData} handleInputChange={handleInputChange} />
      )}
      <div className="mt-4 flex space-x-4">
        {step > 1 && (
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-md"
            onClick={handlePrevStep}
          >
            Previous
          </button>
        )}
        <button
          className="bg-[#1E1C39] text-[#FEFDF6] py-2 px-4 rounded-md"
          onClick={handleNextStep}
        >
          {step < 3 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;

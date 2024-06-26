import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import axios from "axios";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    mood: "",
    occasion: "",
    genre: "",
  });
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  const apiKey = "b9998564ed66f41987404cb146c0376a";

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres", error);
      }
    };
    fetchGenres();
  }, []);

  const handleFetchMovies = async () => {
    const moodGenres = {
      happy: [35],
      sad: [18],
      normal: [28, 12, 16],
    };

    const occasionFilter = {
      alone: {},
      family: { certification_country: "US", certification: "PG" },
      partner: { with_genres: [35, 10749] },
      date: { with_genres: [10749] },
    };

    const genreId = genres.find(
      (g) => g.name.toLowerCase() === formData.genre.toLowerCase()
    )?.id;
    let filters = {
      ...occasionFilter[formData.occasion],
      with_genres: genreId,
    };

    if (formData.mood === "normal") {
      filters.with_genres = [genreId, ...moodGenres["normal"]];
    } else {
      filters.with_genres = [...moodGenres[formData.mood], genreId];
    }

    const queryString = Object.entries(filters)
      .map(([key, value]) => {
        return `${key}=${Array.isArray(value) ? value.join(",") : value}`;
      })
      .join("&");

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&${queryString}`
      );
      setMovies(response.data.results);
      navigate("/results", {
        state: { formData, movies: response.data.results, genres },
      });
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleFetchMovies();
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
      <div className="mt-2 flex space-x-4">
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

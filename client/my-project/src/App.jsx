import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import MultiStepForm from "./components/MultiStepForm";
import Results from "./Results";
import Fetchingdata from "./components/Fetchingdata";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Fetchingdata />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<MultiStepForm />} />
        <Route path="/results" element={<Results />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;

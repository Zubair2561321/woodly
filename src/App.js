import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";

import "./css/animate.css";
import "./css/theme.css";
import "./css/style.css";
import "./css/index.css";
import "./assets/js/custom.js";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import Sales from "./pages/Sales";
import Lettings from "./pages/Lettings";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/sign-up" element={<Signup />}></Route>
      <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      <Route path="/sales" element={<Sales />}></Route>
      <Route path="/lettings" element={<Lettings />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default App;

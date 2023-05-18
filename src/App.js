import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import OfferPage from "./components/OfferPage/OfferPage";
import Footer from "./components/Footer/Footer";
import Specialists from "./components/Specialists/Specialist";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Specialists />
      <OfferPage />
      <Footer />
    </>
  );
}

export default App;

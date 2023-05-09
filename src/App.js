import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import OfferBox from "./components/OfferBox/OfferBox";
// import OfferPage from "./components/OfferPage/OfferPage";
import Footer from "./components/Footer/Footer";
import Specialists from "./components/Specialists/Specialist";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Specialists />
      <OfferBox />
      {/* <OfferPage /> */}

      <Footer />
    </div>
  );
}

export default App;

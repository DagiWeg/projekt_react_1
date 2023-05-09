import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="landing-page">
      <div className="landing-page-shadow">
        <div className="container">
          <p className="sentence">
            Nasza firma organizuje wyprawy po zachodnich stanach USA.
          </p>
          <p>Przeżyj niezapomnianą przygodę!</p>
          <a href="#offer">
            <button className="button">oferta</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;

import "./OfferBox.css";

function OfferBox() {
  return (
    <section className="offer-page" id="offer">
      <div className="container box">
        <p className="offer-title">
          Jakie miejsca odwiedzisz podczas wycieczki?
        </p>
        <div className="box-container">
          <div className="boxes" id="box1">
            <div className="offer-box-shadow first-box">
              <div className="dot"></div>
              <p>Park Narodowy Joshua</p>
              <span>(nowość)</span>
            </div>
          </div>
          <div className="boxes" id="box2">
            <div className="offer-box-shadow">
              <p>Los Angeles i wzgórza Hollywood</p>
            </div>
          </div>
          <div className="boxes" id="box3">
            <div className="offer-box-shadow">
              <p>Wielki Kanion Kolorado</p>
            </div>
          </div>
          <div className="boxes" id="box4">
            <div className="offer-box-shadow">
              <p>Las Vegas i kasyna</p>
            </div>
          </div>
          <div className="boxes" id="box5">
            <div className="offer-box-shadow">
              <p>Dolina Monumentów</p>
            </div>
          </div>
          <div className="boxes" id="box6">
            <div className="offer-box-shadow">
              <p>Przejazd historyczną Route 66</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferBox;

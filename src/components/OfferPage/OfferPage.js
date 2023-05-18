import "./OfferPage.css";
import offers from "../../data/offers";
import OfferBox from "../OfferBox/OfferBox";

function OfferPage() {
  return (
    <section className="offer-page" id="offer">
      <div className="container box">
        <p className="offer-title">
          Jakie miejsca odwiedzisz podczas wycieczki?
        </p>
        <div className="box-container">
          {offers.map((attr, index) => (
            <OfferBox attr={attr} key={index}></OfferBox>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferPage;

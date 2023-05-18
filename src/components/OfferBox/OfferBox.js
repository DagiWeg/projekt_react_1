import "./OfferBox.css";

function OfferBox({ attr }) {
  return (
    <div
      className={"boxes"}
      id={attr.item}
      style={{ backgroundImage: `url(${attr.photo})` }}
    >
      <div
        className={
          attr.isNew ? "offer-box-shadow first-box" : "offer-box-shadow"
        }
      >
        {attr.isNew && <div className="dot"></div>}
        <p>{attr.item}</p>
        {attr.isNew && <span>(nowość)</span>}
      </div>
    </div>
  );
}

export default OfferBox;

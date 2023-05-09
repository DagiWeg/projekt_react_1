import "./Specialist.css";

function Specialist() {
  return (
    <section className="specialists" id="specialists">
      <div className="box container">
        <p className="specialists-title">Organizatorzy wyprawy</p>
        <div className="wrapper">
          <div className="circle1"></div>
          <div className="wrapper-text">
            <p className="name">Julia Kamińska</p>
            <p className="specialist">
              Odwiedziła wszystkie kontynenty, ale najbardziej kocha Amerykę
              Północną i USA. Od 10 lat organizuje wyprawy po zachodnich
              Stanach, przybliżając uczestnikom amerykańską kulturę. Uwielbia
              naturę i piękno parków narodowych. Współautorka książki "Odkryj
              USA na własną rękę".
            </p>
          </div>
        </div>
        <div className="wrapper">
          <div className="wrapper-text">
            <p className="name marek">Marek Zieliński</p>
            <p className="specialist marek">
              Zapalony podróżnik, przemierzył Amerykę wzdłuż i wszerz, za każdym
              razem odkrywając nowe, ciekawe miejsca. Najbardziej kocha długie
              wędrówki z plecakiem, by docierać do kolejnych, nieznanych
              obszarów. Uwielbia wieczorne rozmowy o podróżach przy ognisku na
              pustyni. Na pewno nie będziecie się z nim nudzić!
            </p>
          </div>
          <div className="circle2"></div>
        </div>
      </div>
    </section>
  );
}

export default Specialist;

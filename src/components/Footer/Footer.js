import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <p>Klub Podróżników "Route 66" - wszelkie prawa zastrzeżone, 2018</p>
        <div className="wrapper-icons">
          <FontAwesomeIcon icon={faInstagram} className="fa-brands" />
          <FontAwesomeIcon icon={faFacebookSquare} className="fa-brands" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

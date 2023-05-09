import "./Footer.css";
import Icon from "../Icon/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const icons = [
    {
      link: "../index.html",
      alt: "facebook link",
      icon: faFacebookSquare,
    },
    {
      link: "../index.html",
      alt: "instagram link",
      icon: faInstagram,
    },
  ];

  return (
    <footer>
      <div className="container footer-container">
        <p>Klub Podróżników "Route 66" - wszelkie prawa zastrzeżone, 2018</p>
        <div className="wrapper-icons">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebookSquare} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import "./Footer.css";
// import Icon from "../Icon/Icon";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookSquare,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// function Footer() {
//   const icons = [
//     {
//       link: "../index.html",
//       alt: "facebook link",
//       icon: "fa-brands fa-instagram",
//     },
//     {
//       link: "../index.html",
//       alt: "instagram link",
//       icon: "fa-brands fa-square-facebook",
//     },
//   ];
//   return (
//     <footer>
//       <div className="container footer-container">
//         <p>Klub Podróżników "Route 66" - wszelkie prawa zastrzeżone, 2018</p>
//         <div className="wrapper-icons">
//           <FontAwesomeIcon icon={faInstagram} className="fa-brands" />
//           <FontAwesomeIcon icon={faFacebookSquare} className="fa-brands" />
//           {/* {icons.map(({ link, alt, icon }) => (
//             <Icon link={link} alt={alt} icon={icon} key={alt} />
//           ))} */}
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

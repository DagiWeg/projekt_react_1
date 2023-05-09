import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <p className="nav-title">Klub Podróżników "Route 66"</p>
        <ul className="nav-bar">
          <li>
            <a href="#specialists">o nas</a>
          </li>
          <li>
            <a href="#offer">oferta</a>
          </li>
          <li className="cursor-disabled">kontakt</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

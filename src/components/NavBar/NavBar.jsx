import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul>
        <li>Home</li>
        <li>Visitanos</li>
        <li>Nuestras birras</li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import "./Navbar.css";
import logo from "../../images/hero/logo.png";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Navbar = ({cartItems}) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <p>Bravo Company</p>
      </div>

      <Typewriter
      className = 'Typewriter'
        options={{
          strings: ["Welcome To Bravo Company",
           "Best Progremming Company in Sharkia"],
          autoStart: true,
          loop: true,
        }}
      />

      <div className="cart">
        <Link to="/cart">
          <MdOutlineShoppingBag className="cart-icon" />
        </Link>
        <span>{cartItems.length}</span>
      </div>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import "./style.css";
import PropTypes from "prop-types";

export const Navbar = (props) => {
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: props.color ?? "hsl(0 0% 100% / 0.1)",
        color: props.textColor ?? "white",
      }}
    >
      {/* <div>
        <img
          src="src/images/Pink Beige Fun Baby and Kids Shop Logo.png"
          alt=""
        />
      </div> */}
      <div className="logo">
        <Link to="/" className="text-class">
          Home
        </Link>
      </div>
      <div className="menu">
        <div>
          <Link to="/admin" className="text-class">
            Admin
          </Link>
        </div>
        <div>
          <Link to="/cart" className="text-class">
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

Navbar.PropTypesropTypes = {
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

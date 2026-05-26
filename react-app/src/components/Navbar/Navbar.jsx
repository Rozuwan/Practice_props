import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-wrapper">
          <div className="logo">
            <img
              src="https://img.magnific.com/free-vector/money-rainbow-logo-design_474888-2243.jpg?semt=ais_hybrid&w=740&q=80"
              alt="logo"
            />
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

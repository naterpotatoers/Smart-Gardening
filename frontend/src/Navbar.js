import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-Header">Smart Garden </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create"> Plant</Link>
      </div>
    </nav>
  );
};

export default Navbar;

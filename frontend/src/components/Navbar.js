import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-Header">Smart Garden </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create"> Plant</Link>
        <Link to="/login"> Login</Link>
        <Link to="/register"> Register</Link>
        <Link to="/profile"> Profile</Link>
        <Link to="/how"> How</Link>
        <Link to="/start"> Start</Link>
        <Link to="/all"> All</Link>
        <Link to="/analitics"> Analitics</Link>



      </div>
    </nav>
  );
};

export default Navbar;

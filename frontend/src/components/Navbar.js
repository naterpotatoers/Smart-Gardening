import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";
import "../components/NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, Toolbar, AppBar, IconButton } from "@material-ui/core";

const Bstyle = {
  color: "white",
};

function MouseOver(event) {
  event.target.style.color = "yellow";
}

function MouseOut(event) {
  event.target.style.color = "white";
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <AppBar>
        <Toolbar>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-Header">Smart Garden </h1>
          <div className="links">
            <Link to="/">
              <Button
                style={Bstyle}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                Home
              </Button>
            </Link>

            <Link to="/profile">
              <Button
                style={Bstyle}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                Profile
              </Button>
            </Link>

            <Link to="/create">
              <Button
                style={Bstyle}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                Plant
              </Button>
            </Link>

            <Link to="/how">
              <Button
                style={Bstyle}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                How
              </Button>
            </Link>
            <Link to="/start">
              <Button
                style={Bstyle}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                Start
              </Button>
            </Link>
            <Link to="/all">
              <Button
                style={Bstyle}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                All
              </Button>
            </Link>
            <Link to="/analitics">
              <Button
                style={Bstyle}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                Analitics
              </Button>
            </Link>

            <Link to="/login">
              <Button
                style={Bstyle}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                Login
              </Button>
            </Link>

            <Link to="/register">
              <Button
                style={Bstyle}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                Register
              </Button>
            </Link>

            <IconButton
              style={Bstyle}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;

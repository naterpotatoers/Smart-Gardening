import { Link } from "react-router-dom";

import React from 'react';
import logo from "../logo.svg";
import "../App.css";
import "../components/NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, Toolbar, AppBar, IconButton, ListItem, ListItemText, List, ListItemIcon, MenuList, Menu, MenuItem, Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { height } from "@material-ui/system";


const Bstyle = {
  color: "white",
};

const Mstyle = {
  color: "black",

  
};
// MouseOver & MouseOut for the navbar
function MouseOver(event) {
  event.target.style.color = "yellow";
}

function MouseMover(event)
{
    event.target.style.color = "blue";
}

//MouseMover & MouseMout for the drop down menu
function MouseOut(event) {
  event.target.style.color = "white";
}

function MouseMout(event) {
  event.target.style.color = "black";
 
  
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 91,
    height: 50,
  },
}));

const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();


  return (
    <nav className="navbar">
      <AppBar>
        <Toolbar>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-Header"> Garden Smart Center </h1>
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

            <Link to="/how">
              <Button
                style={Bstyle}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                How
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
              aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
            >
              <MenuIcon />
              </IconButton>

              <Menu

              elevation={0}
              getContentAnchorEl={null}

              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}

              
              
              >
           
                  <MenuItem  onClick={handleClose} 
           
                  >
                  
                  <Link to="/all" style={{ textDecoration: 'none' }}
                  >
                    <Button
                        style={Mstyle}
                        onMouseOver={MouseMover}
                        onMouseOut={MouseMout}
                        className={classes.root}

                    >
                    All
                    </Button>
                   </Link>
                  </MenuItem>
                <Divider></Divider>
                  <MenuItem  onClick={handleClose}>
                    <Link to="/analitics" style={{ textDecoration: 'none' }}>
                     <Button
                        style={Mstyle}
                        onMouseOver={MouseMover}
                        onMouseOut={MouseMout}
                        className={classes.root}

                    >
                    Analitics
                    </Button>
                    </Link>
                  </MenuItem>
                  <Divider></Divider>

                  <MenuItem  onClick={handleClose}>
                  
                    <Link to="/create" style={{ textDecoration: 'none' }}>
                      <Button
                        style={Mstyle}
                        onMouseOver={MouseMover}
                        onMouseOut={MouseMout}
                        className={classes.root}

                      >
                        Plant
                      </Button>
                    </Link>
                  </MenuItem>
                  <Divider></Divider>

                  <MenuItem  onClick={handleClose}>
                  
                  <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <Button
                      style={Mstyle}
                      onMouseOver={MouseMover}
                      onMouseOut={MouseMout}
                      className={classes.root}

                    >
                      Profile
                    </Button>
                  </Link>
                </MenuItem>
                <Divider></Divider>

                <MenuItem  onClick={handleClose}>
                    <Link to="/start" style={{ textDecoration: 'none' }}>
                    <Button
                      style={Mstyle}
                      onMouseOver={MouseMover}
                      onMouseOut={MouseMout}
                      className={classes.root}

                    >
                      Start
                    </Button>
                    </Link>
                  </MenuItem>

          
              </Menu>
  
          </div>
        </Toolbar>
      
      </AppBar>
    </nav>

  );
  
};


export default Navbar;

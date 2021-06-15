import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import How from "./pages/How";
import Start from "./pages/Start";
import All from "./pages/All";
import Analitics from "./pages/Analitics";

import Navbar from "./components/Navbar";
import { Account } from "./utils/Accounts";
import Status from "./utils/Status";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Account>
            <Status />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/how">
                <How />
              </Route>
              <Route path="/start">
                <Start />
              </Route>
              <Route path="/all">
                <All />
              </Route>
              <Route path="/analitics">
                <Analitics />
              </Route>
            </Switch>
          </Account>
        </div>
      </div>
    </Router>
  );
}

export default App;

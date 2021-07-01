import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import { Account } from "./utils/Accounts";
import Status from "./utils/Status";

import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    hello
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
            </Switch>
          </Account>
        </div>
      </div>
    </Router>
  );
}

export default App;

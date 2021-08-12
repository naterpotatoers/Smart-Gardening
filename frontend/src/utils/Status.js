import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "@material-ui/core";

import { AccountContext } from "./Accounts";

const Status = () => {
  // By default user is assumed to not be signed in
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState("");

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    // Checks for user session to verify user is logged in
    getSession().then((session) => {
      if (session) {
        console.log("Session: ", session);
        setEmail(session.idToken.payload.email);
        setStatus(true);
      }
    });
  }, []);
  return (
    <div className="links">
      {status ? (
        <h2>
          {email} logged-in
          <Button variant="contained" color="secondary" onClick={logout}>
            Logout
          </Button>
        </h2>
      ) : (
        <Link to="/login"></Link>
      )}
    </div>
  );
};

export default Status;

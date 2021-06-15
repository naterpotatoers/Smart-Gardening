import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Accounts";

const Status = () => {
  // By default user is assumed to not be signed in
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    // Checks for user session to verify user is logged in
    getSession().then((session) => {
      if (session) {
        console.log("Session: ", session);
        setStatus(true);
      }
    });
  }, []);
  return (
     <div className="links">
      {status ? (
        <div>
          User logged in
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Link to="/login"> Login </Link>
      )}
    </div>
  );
};

export default Status;

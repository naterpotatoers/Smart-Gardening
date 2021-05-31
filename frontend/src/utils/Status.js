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
    <div>
      {status ? (
        <div>
          User logged in
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        "Please login"
      )}
    </div>
  );
};

export default Status;

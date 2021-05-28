import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Accounts";

export default () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);
  return (
    <div>
      {status ? (
        <div>
          Logged in
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        "Please login"
      )}
    </div>
  );
};

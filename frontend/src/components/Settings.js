import React, { useEffect, useContext, useState } from "react";
import { AccountContext } from "../utils/Accounts";
// BASIC EXAMPLE OF HOW TO GRAB LOGGED IN USER INFO
export default (test) => () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then(({ email }) => {
      setLoggedIn(true);
      setUserEmail(email);
      console.log(userEmail);
    });
  }, []);
  return (
    <div>
      {loggedIn && (
        <>
          <h1>Settings</h1>
        </>
      )}
    </div>
  );
};

import React, { useState, useContext } from "react";
import { AccountContext } from "../utils/Accounts";
// Basic Login form, could be replaced with react-hook-form for training purposes
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("User logged in successfully!", data);
      })
      .catch((err) => {
        console.error("User failed to login!", err);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;

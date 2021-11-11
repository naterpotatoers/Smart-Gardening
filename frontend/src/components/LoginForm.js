import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";

import { AccountContext } from "../utils/Accounts";
// Basic Login form, could be replaced with react-hook-form for training purposes
const LoginForm = () => {
  const { control, handleSubmit } = useForm();

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    console.log(event);

    authenticate(event.email, event.password)
      .then((data) => {
        console.log("User logged in successfully!", data);
      })
      .catch((err) => {
        console.error("User failed to login!", err);
      });
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        render={({ field }) => <TextField {...field} label="Email" />}
      />
      <br />
      <Controller
        control={control}
        name="password"
        render={({ field }) => <TextField {...field} label="Password" />}
      />
      <br />
      <br />
      <Button variant="contained" color="tertiary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;

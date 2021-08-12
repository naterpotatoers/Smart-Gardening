import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import UserPool from "../utils/UserPool";
// Basic Register form, could be replaced with react-hook-form for training purposes
const RegisterForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (event) => {
    console.log(event);

    UserPool.signUp(event.email, event.password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
    // TODO: add new user to rds db
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

export default RegisterForm;

import { Typography } from "@material-ui/core";
import React from "react";
import LoginForm from "../components/LoginForm";

export default function App() {
  return (
    <div>
      <Typography align="center">
        <h2>Log In</h2>
        <LoginForm />
      </Typography>
    </div>
  );
}

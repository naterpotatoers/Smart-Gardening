import { Typography } from "@material-ui/core";

import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div className="register">
      <Typography align = "center">
          
      <h2>Register</h2>     
      <RegisterForm />
      </Typography>
      

    </div>
  );
};

export default Register;

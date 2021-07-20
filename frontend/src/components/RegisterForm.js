import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";


export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data); 

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <TextField label="Email"placeholder="Email" {...register("emailInput")} />
      {errors.obj1 && <span>This field is required</span>}
      <br></br>          <br></br>    
      {/* include validation with required or other standard HTML validation rules */}
      <TextField label="Username"placeholder="Username" {...register("usernameInput")} />
      {/* errors will return when field validation fails  */}
      {errors.obj2 && <span>This field is required</span>}
      <br></br>      <br></br>    

      <TextField label="Password"type="password"placeholder="Password" {...register("passwordInput")} />
      {/* errors will return when field validation fails  */}
      {errors.obj3 && <span>This field is required</span>}
      <br></br>      <br></br>    

      <TextField label="Location"placeholder="Location" {...register("locationInput")} />
      {/* errors will return when field validation fails  */}
      {errors.obj4 && <span>This field is required</span>}
      <br></br>      <br></br>
      <Button onClick={() => { alert('successful registration') }} variant="contained" color = "primary">Submit</Button> 
    </form> 
  );
}
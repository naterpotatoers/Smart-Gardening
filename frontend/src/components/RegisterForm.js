import React from "react";
import { useForm } from "react-hook-form";


export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data); 

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="Email" {...register("emailInput")} />
      {errors.obj1 && <span>This field is required</span>}
      <br></br>          <br></br>    
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue="Username" {...register("usernameInput")} />
      {/* errors will return when field validation fails  */}
      {errors.obj2 && <span>This field is required</span>}
      <br></br>      <br></br>    

      <input defaultValue="Password" {...register("passwordInput")} />
      {/* errors will return when field validation fails  */}
      {errors.obj3 && <span>This field is required</span>}
      <br></br>      <br></br>    

      <input defaultValue="Location" {...register("locationInput")} />
      {/* errors will return when field validation fails  */}
      {errors.obj4 && <span>This field is required</span>}
      <br></br>      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
}
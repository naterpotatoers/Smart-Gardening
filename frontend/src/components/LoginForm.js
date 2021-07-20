import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label = "Email"             
              type="text"
              placeholder="Email"
              name="email"
              {...register("email")} 
            />
            <br/><br/>
            <TextField
              label = "Password" 
              type="text"
              placeholder="Password"
              name="password"
              {...register("password")} 
            />
            <br/><br/>
            <Button variant = "contained" color = "primary">Submit</Button>
        </form>
    );
};
export default LoginForm;

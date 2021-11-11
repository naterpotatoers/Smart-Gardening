import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

const GardenForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label = "Garden name"
              type="text"
              placeholder="Garden name"
              name="gardenname"
              {...register("gardenname")} 
            />
            <br/><br/>
            <TextField
              label="Location"
              type="text"
              placeholder="Location"
              name="location"
              {...register("location")} 
            />
            <br/><br/>
            <Button variant="contained" color = "primary">Submit</Button>      
        </form>
    );
};
export default GardenForm;
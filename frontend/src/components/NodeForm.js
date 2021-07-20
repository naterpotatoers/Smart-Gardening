import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

const NodeForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label = "Node name"             
              type="text"
              placeholder="Node name"
              name="nodename"
              {...register("nodename")} 
            />
            <br/><br/>
            <TextField
              label = "Garden name" 
              type="text"
              placeholder="Garden name"
              name="gardenname"
              {...register("gardenname")} 
            />
            <br/><br/>
            <TextField  
              label = "Description" 
              type="text"
              placeholder="Description"
              name="description"
              {...register("description")} 
            />
            <br/><br/>
            <TextField
              label = "Sensors" 
              type="text"
              placeholder="Sensors"
              name="sensors"
              {...register("sensors")} 
            />
            <br/><br/>
            <Button variant = "contained" color = "primary">Submit</Button>
        </form>
    );
};
export default NodeForm;
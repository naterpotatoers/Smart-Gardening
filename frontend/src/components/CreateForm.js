import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

const CreateForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label ="Plant name"
              type="text"
              placeholder="Plant name"
              name="plantname"
              {...register("plantname")} 
            /><br/><br/>
            <TextField
              label="Garden name"
              type="text"
              placeholder="Garden name"
              name="gardenname"
              {...register("gardenname")} 
            />
            <br/><br/>
            <TextField
              label="Plant date"
              type="text"
              placeholder="Plant date"
              name="plantdate"
              {...register("plantdate")} 
            />
            <br/><br/>
            <TextField
              label = "Harvest date"
              type="text"
              placeholder="Harvest date"
              name="harvestdate"
              {...register("harvestdate")} 
            />
            <br/><br/>
            <Button variant="contained" color = "primary">Submit</Button>
        </form>
    );
};
export default CreateForm;
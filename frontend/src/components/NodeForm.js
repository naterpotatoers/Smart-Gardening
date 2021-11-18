import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

const NodeForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Node Id"
        type="text"
        placeholder="Node Id"
        name="nodeId"
        {...register("nodeId")}
      />
      <br />
      <br />
      <TextField
        label="Garden Id"
        type="text"
        placeholder="Garden Id"
        name="gardenId"
        {...register("gardenId")}
      />
      <br />
      <br />
      <TextField
        label="Email"
        type="text"
        placeholder="Email"
        name="emailUserId"
        {...register("emailUserId")}
      />
      <br />
      <br />
      <TextField
        label="Description"
        type="text"
        placeholder="Description"
        name="description"
        {...register("description")}
      />
      <br />
      <br />
      <TextField
        label="Sensors"
        type="text"
        placeholder="Sensors"
        name="sensors"
        {...register("sensors")}
      />
      <br />
      <br />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
export default NodeForm;

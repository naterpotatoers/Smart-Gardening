import { Typography } from "@material-ui/core";
import CreateForm from "../components/CreateForm"

const Create = () => {
  return (
    <div className="create">
      <Typography align = "center">
      <h2>Add new Plant Page</h2>
      <CreateForm/>
      </Typography>
     
    </div>
  );
};

export default Create;

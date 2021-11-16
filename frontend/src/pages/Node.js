import { Typography } from "@material-ui/core";

import NodeForm from "../components/NodeForm";
const AddNode = () => {
  return (
    <div className="start">
      <Typography align="center">
        <h2>Add New Node</h2>
        <NodeForm />
      </Typography>
    </div>
  );
};

export default AddNode;

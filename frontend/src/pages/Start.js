import { Typography } from "@material-ui/core";

import NodeForm from "../components/NodeForm"
const Start = () => {
    return (
      <div className="start">
        <Typography align = "center">
        <h2>Getting Started</h2>
        <NodeForm/>
        </Typography>

       
      </div>
    );
  };
  
  export default Start;
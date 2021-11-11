import { Typography } from "@material-ui/core";
import GardenForm from "../components/GardenForm"
const Profile = () => {
    return (
      <div className="profile">
        <Typography align = "center">
        <h2>Profile</h2>
        <GardenForm/>
        </Typography>
       

      </div>
    );
  };
  
  export default Profile;
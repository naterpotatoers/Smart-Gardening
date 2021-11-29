//import { Typography } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import React from "react";


const Bottom = () => {
    return (

<div>
                <BottomNavigation  showLabels sx={{ maxHeight:'100%', maxWidth:'100%' }}>
                <BottomNavigationAction sx={{ maxHeight:'100%', maxWidth:'100%' }} label = "All Rights Reserved 2021 @CMPE195 Created by: Garza,Gilani,Hernandez,Sembrano"/>
                </BottomNavigation>
                
            </div>
    );
}
export default Bottom;

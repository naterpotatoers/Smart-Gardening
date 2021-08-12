import "./Home.css";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import createTheme from '@material-ui/core/styles';

const Home = () => {

const useStyles = makeStyles( {
     root: {
     maxWidth: 400,
    },

});
              
const classes = useStyles();
            
  return (
  <div>
    <Grid container alignItems="center" >
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
        component="img"
        alt="SunFlower"
        height="400"
        image="/images/SunFlower.jpg"
        title="SunFlower"
      />
      </CardActionArea>   
      </Card>
      <Divider orientation="vertical" flexItem />

<Box
m = {10}
maxHeight = {10}
>
      <Typography variant = "h4" align =  "right" >
        <a>
        A new way to keep your plants alive and thriving!
        </a>
      </Typography>
</Box>

<Box 
maxWidth = {600}
marginLeft = {80}
marginX = {-90}
marginTop = {20}
>
<Typography variant = "subtitle 1" align = "right">
      &nbsp; Quisque vitae iaculis dui. Phasellus in cursus orci. 
      Praesent rutrum, urna ac iaculis facilisis, massa mauris tempor magna, sit amet lobortis massa augue sed dui. 
      Suspendisse urna metus, tempor a egestas vitae, tristique id leo. Aliquam id egestas quam. 
      </Typography>
</Box>

    </Grid>

   

    
  </div>
      
      


  );
};

export default Home;

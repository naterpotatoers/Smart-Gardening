import "./Home.css";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const Home = () => {
  const Bstyle = {
    color: "white",
  };

  const useStyles = makeStyles({
    root: {
      maxWidth: 400,
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems="center">
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

        <Box m={10} maxHeight={10}>
          <Typography variant="h4" align="right">
            <p>A new way to keep your plants alive and thriving!</p>
          </Typography>
        </Box>

        <Box maxWidth={600} marginLeft={80} marginX={-90} marginTop={40}>
          <Typography variant = "h4" align = "left" style = {Bstyle}>
            About:
          </Typography>
          <Typography align="right" variant ="body1">
            &nbsp; Facilitate better harvests and provide a more enjoyable gardening experience.
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default Home;

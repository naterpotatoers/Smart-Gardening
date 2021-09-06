import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const How = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 200,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 750,
    },
  });

  const classes = useStyles();
  return (
    <div>
      <Box m={5}>
        <Typography variant="h4" align="center">
          <p>Road to unlocking achievement of Plant Master:</p>
        </Typography>

        <Typography variant="h6" align="justify">
          &nbsp;&nbsp;&nbsp; How to get started raising a plant from level one. 
          Plants need a lot of time, water and sun. Often life can get really hectic. 
          Simple task fall thought the cracks, leaving many plants with out water. Resulting in death of your plant pet.
          Solution is a simple DIY device. In these next few step we will provide the equipment required in order to help keep your plant pet alive.
          This DIY device will help you keep you in the know on what your plant pet needs.
          Read all the steps and follow the direction!

        </Typography>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Sprout"
              height="200"
              image="./images/Sprout.jpg"
              title="Sprout"
            />
          </CardActionArea>
        </Card>
      </Box>
      <Box marginBottom={5}>
        <Card>
          <CardContent>
            <Typography variant="h5">Step 1:</Typography>

            <Typography variant="h6" align="center">
              &nbsp;&nbsp;&nbsp;Let's get started!
              Gathering all the parts.
              Parts List:

            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box marginBottom={5}>
        <Card>
          <CardContent>
            <Typography variant="h5" m>
              Step 2: 
            </Typography>
            <Typography variant="h6" align="center">
              &nbsp;&nbsp;&nbsp;

            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box marginBottom={5}>
        <Card>
          <CardContent>
            <Typography variant="h5" m>
              Step 3:
            </Typography>
            <Typography variant="h6" align="center">
              &nbsp;&nbsp;&nbsp;

            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box marginBottom={5}>
        <Card>
          <CardContent>
            <Typography variant="h5" m>
              Step 4:
            </Typography>
            <Typography variant="h6" align="center">
              &nbsp;&nbsp;&nbsp;

            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box marginBottom={5}>
        <Card>
          <CardContent>
            <Typography variant="h5" m>
              Step 5:
            </Typography>
            <Typography variant="h6" align="center">
              &nbsp;&nbsp;&nbsp;

            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Grid container alignItems="center"></Grid>
    </div>
  );
};

export default How;

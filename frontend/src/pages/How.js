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
          &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut pellentesque laoreet lacus. Aenean semper non orci quis
          vestibulum. Fusce a eleifend quam. Suspendisse potenti. Curabitur
          magna ex, pulvinar et nisl feugiat, interdum ultrices turpis. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Suspendisse laoreet pulvinar diam at sagittis. Proin
          efficitur ipsum tempor orci ornare eleifend. Nam congue sed sem id
          maximus. Aliquam ex orci, dignissim a magna vitae, tempus tempus elit.
          Vestibulum mollis felis eget turpis maximus finibus.
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
              &nbsp;&nbsp;&nbsp;Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Cras pharetra quam
              nec porta fringilla. Praesent consequat nulla finibus, aliquam
              orci at, scelerisque lacus. Nam a lacus pellentesque dui congue
              accumsan. Quisque a feugiat lectus. Vestibulum vitae tortor a
              libero ultrices commodo a eu nibh. Proin pulvinar neque eu neque
              facilisis aliquam. Vivamus est tortor, venenatis id dapibus
              dapibus, dapibus non turpis. Morbi quis orci vel lacus congue
              elementum. Sed quis gravida neque, in molestie est.
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
          </CardContent>
        </Card>
      </Box>

      <Box marginBottom={5}>
        <Card>
          <CardContent>
            <Typography variant="h5" m>
              Step 3:
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
          </CardContent>
        </Card>
      </Box>

      <Box marginBottom={5}>
        <Card>
          <CardContent>
            <Typography variant="h5" m>
              Step 5:
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Grid container alignItems="center"></Grid>
    </div>
  );
};

export default How;

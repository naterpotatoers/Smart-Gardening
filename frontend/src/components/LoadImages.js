import { useState, useEffect } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { CardContent, Typography } from "@material-ui/core";

export const LoadImages = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://54.190.195.163:5000/image")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <CircularProgress />;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <Card key={item.id} variant="outlined">
            <CardContent>
              <Typography>Image Id: {item.id}</Typography>
              {/* <Typography>url: {item.url}</Typography> */}
              <CardMedia
                component="img"
                alt="SunFlower"
                height="400"
                image={item.url}
                title="SunFlower"
              />
              <Typography>key: {item.key}</Typography>
            </CardContent>
          </Card>
        ))}
      </ul>
    );
  }
};

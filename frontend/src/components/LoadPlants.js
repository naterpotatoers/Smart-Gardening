import { useState, useEffect } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import { CardContent, Typography } from "@material-ui/core";

export const MyComponent = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:5000/dynamo")
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
          <Card key={item.timestamp} variant="outlined">
            <CardContent>
              <Typography>{item.data.nodeId}</Typography>
              <Typography>Soil Moisture: {item.data.soilMoisture}</Typography>
              <Typography>Sun Intensity: {item.data.sunIntensity}</Typography>
            </CardContent>
          </Card>
        ))}
      </ul>
    );
  }
};
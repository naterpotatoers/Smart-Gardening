import { useState, useEffect } from "react";
//import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import { CardContent, Typography } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import axios from "axios";

export const LoadPlants = () => {
  // const [error, setError] = useState(null);
  //const [isLoaded, setIsLoaded] = useState(false);
  //const [items, setItems] = useState([]);
  const [chartData, setChartData] = useState({});
  // const [temperature, setTemperature] = useState([]);
  ///const [timestamp, setTimeStamp] = useState([]);
  //const [items, setItems] = useState([]);

  let temp = [];
  let hum = [];
  //let soilM = [];
  let time = [];
  let timeepoch = [];
  let id = [];
  let Node = "melody-esp32-1";
  //let day =1631174400; //Thursday, September 9, 2021 1:00:00 AM GMT-07:00
  //let nextday = 1631260800; /// Friday, September 10, 2021 1:00:00 AM GMT-07:00

  const chart = () => {
    axios
      .get("http://54.213.41.248:5000/dynamo") //Data we are reading
      .then((res) => {
        console.log(res);

        for (let dataObj of res.data) {
          //if(dataObj.timestamp > day && dataObj.timestamp < nextday)
          //{
          if (dataObj.data.nodeId === Node) {
            //getting specific node user
            if (dataObj.data.temperature > 0) {
              // ignoring the outlier numbers anything below 0
              temp.push(parseFloat(dataObj.data.temperature)); // sorting temp into temp array
              hum.push(parseInt); // storing humidity in hum array
              id.push(dataObj.data.nodeId); // sorting the node id in id array
            }
            timeepoch.push(dataObj.timestamp); //storing date from epoch
            //converting to human date
            var date = new Date(dataObj.timestamp);
            const upDate = date.toLocaleString(); //2019-12-9 10:30:15
            time.push(upDate); // sotring the human date into time array

            console.log(upDate); // display in console
          }

          // }
        }

        time.sort(); // sorting the time array

        console.log(temp, time, id); // console display

        //Data for the time vs temp chart
        setChartData({
          labels: time,
          datasets: [
            {
              label: "Data",
              data: temp,
              backgroundColor: ["rgba(75,192,192,0.6)"],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //////////////////////////////////////////////////////////

  useEffect(() => {
    chart();
  }, []);

  function list() {
    let user = id[0];

    for (let a = 0; a < temp.length; a++) {
      return user + temp;
    }
  }
  ///////////////////////////////////////////////////////////
  return (
    <div>
      <div>
        <Card>
          <CardContent>
            <Line
              data={chartData}
              options={{
                scales: {
                  y: {
                    suggestedMax: 100,
                    suggestedMin: 50,
                  },
                },
              }}
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography components={list}></Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

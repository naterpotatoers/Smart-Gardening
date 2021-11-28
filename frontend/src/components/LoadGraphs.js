import { useState, useEffect } from "react";
//import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import axios from "axios";

export const LoadGraphs = () => {
  // const [error, setError] = useState(null);
  //const [isLoaded, setIsLoaded] = useState(false);
  //const [items, setItems] = useState([]);
  const [chartData, setChartData] = useState({});
  const [chartDataH, setChartDataH] = useState({});
  const [chartDataSM, setChartDataSM] = useState({});
  const [chartDataSI, setChartDataSI] = useState({});

  // const [temperature, setTemperature] = useState([]);
  ///const [timestamp, setTimeStamp] = useState([]);
  //const [items, setItems] = useState([]);

  let temp = [];
  let hum = [];
  let soilM = [];
  let sunI = [];
  let time = [];
  let id = [];
  let Node = "melody-esp32-1";
  let timestamp = [];
  var data = 0;

  const chart = () => {
    axios
      .get("http://54.190.195.163:5000/dynamo/melody-esp32-1") //Data we are reading
      .then((res) => {
        for (let dataObj of res.data) {
          if (dataObj.data.nodeId === Node) {
            //getting specific node user
            if (dataObj.data.temperature > 0) {
              // ignoring the outlier numbers anything below 0
              temp.push(parseFloat(dataObj.data.temperature)); // sorting temp into temp array
              hum.push(parseInt(dataObj.data.humidity)); // storing humidity in hum array
              soilM.push(parseInt(dataObj.data.soilMoisture));
              if (dataObj.data.sunIntensity < 2000) {
                sunI.push(parseFloat(dataObj.data.sunIntensity));
              }

              id.push(dataObj.data.nodeId); // sorting the node id in id array
              var date = new Date(dataObj.timestamp);
              time = date.toLocaleString();

              timestamp.push(time);
            }
          }

          // }
        }
        timestamp.sort();
        data = temp.length;
        //console.log(data) // console display
        const DATA_COUNT = data;
        const bot = [];
        for (let i = 0; i < DATA_COUNT; ++i) {
          bot.push(i.toString());
        }

        //Data for the time vs temp chart
        setChartData({
          labels: bot,
          datasets: [
            {
              label: "Temperature",
              data: temp,
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
            },
          ],
        });

        setChartDataH({
          labels: bot,
          datasets: [
            {
              label: "Humidity",
              data: hum,
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
            },
          ],
        });

        setChartDataSM({
          labels: bot,
          datasets: [
            {
              label: "Soil Moisture",
              data: soilM,
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
            },
          ],
        });

        setChartDataSI({
          labels: bot,
          datasets: [
            {
              label: "Sun Intensity",
              data: sunI,
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
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
  /*
function list ()
{
  let user = id[0];

  for(let a = 0; a < temp.length; a++)
  {
    return user + temp
  }
};*/
  ///////////////////////////////////////////////////////////
  return (
    <div>
      <div>
        <Typography variant="h2"> Melody's Plants Data:</Typography>
        <br />
        <Card>
          <Line width={400} height={200} data={chartData} />
          <br />
          <Typography align="center" variant="h4">
            {" "}
            Temperature vs Entries{" "}
          </Typography>
        </Card>
        <br />
        <br />

        <Card>
          <Line width={400} height={200} data={chartDataH} />
          <br />
          <Typography align="center" variant="h4">
            Humidity
          </Typography>
        </Card>
        <br />
        <br />

        <Card>
          <Line width={400} height={200} data={chartDataSM} />
          <br />
          <Typography align="center" variant="h4">
            Soil Moisture
          </Typography>
        </Card>
        <br />
        <br />

        <Card>
          <Line width={400} height={200} data={chartDataSI} />
          <br />
          <Typography align="center" variant="h4">
            Sun Intensinty
          </Typography>
        </Card>
      </div>
    </div>
  );
};

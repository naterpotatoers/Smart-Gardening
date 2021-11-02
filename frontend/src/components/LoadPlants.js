import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export const LoadPlants = (props) => {
  const [state, setState] = useState({});
  const [temperatureState, setTemperatureState] = useState({});
  const [humidityState, setHumidityState] = useState({});
  const [soilMoistureState, setSoilMoistureState] = useState({});
  const [sunIntensityState, setSunIntensityState] = useState({});
  // const [timestampState, setTimestampState] = useState({});
  console.log(props.userId);
  let rawData = [];
  let temperature = [];
  let humidity = [];
  let soilMoisture = [];
  let sunIntensity = [];
  let timestamp = [];

  function createGraph(data, label, dates) {
    const graphInfo = {
      labels: dates,
      datasets: [
        {
          label: label,
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
          data: data,
        },
      ],
    };
    return graphInfo;
  }

  const captureData = async () => {
    const res = await fetch("http://54.213.41.248:5000/dynamo/melody-esp32-1");
    rawData = await res.json();
  };

  function checkExtremes(post) {
    console.log(post.data);
    if (post.data.temperature < 150) {
      return true;
    }
    return false;
  }

  async function filterData(posts) {
    posts.sort((x, y) => {
      return x.timestamp - y.timestamp;
    });

    posts = posts.filter(checkExtremes);

    await setState(rawData);
    await console.log(state);

    timestamp = posts.map((item) => {
      return item.timestamp;
    });
    // setTimestampState(timestamp);
    temperature = posts.map((item) => {
      return item.data.temperature;
    });
    await setTemperatureState(temperature);
    humidity = posts.map((item) => {
      return item.data.humidity;
    });
    await setHumidityState(humidity);
    soilMoisture = posts.map((item) => {
      return item.data.soilMoisture;
    });
    await setSoilMoistureState(soilMoisture);
    sunIntensity = posts.map((item) => {
      return item.data.sunIntensity;
    });
    await setSunIntensityState(sunIntensity);
  }

  useEffect(async () => {
    await captureData();
    await filterData(rawData);
  }, []);

  return (
    <div>
      <h2>Temperature</h2>
      <Line
        data={createGraph(temperatureState, "Temperature", timestamp)}
        width={400}
        height={200}
      />
      <h2>Humidity</h2>
      <Line
        data={createGraph(humidityState, "Humidity", timestamp)}
        width={400}
        height={200}
      />
      <h2>Soil Moisture</h2>
      <Line
        data={createGraph(soilMoistureState, "Soil Moisture", timestamp)}
        width={400}
        height={200}
      />
      <h2>Sun Intensity</h2>
      <Line
        data={createGraph(sunIntensityState, "Sun Intensity", timestamp)}
        width={400}
        height={200}
      />
    </div>
  );
};

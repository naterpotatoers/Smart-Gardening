import { Bar } from "react-chartjs-2";
import React from "react";



export default class bChart extends React.Component {
  render() {
    return(
    <div><Bar>
      data={{
        labels: ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'],
        datasets:[{
          data:[78,79,85,98,90,98,97]
        }]
      }}
      </Bar></div>   


        

    );
  }
  
}



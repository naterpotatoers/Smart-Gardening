import "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";

const Analitics = () => {
    return (
      <div>
        Hello world
       <Bar
       data={{title: {text:'Daily Temperature'},
        labels: ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'],
        datasets:[{
          data:[78,79,85,98,90,98,97]
        }]
      }}
      >
       </Bar>

      </div>



    );
  };
  
  export default Analitics;
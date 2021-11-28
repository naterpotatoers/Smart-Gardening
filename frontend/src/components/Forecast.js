import axios from "axios";


export const Forecast = () => {
    
   const chart = () => { 
      axios
      .get('https://api.openweathermap.org/data/2.5/weather?zip=95127,us&appid=fc796142da38fe97e24b15a605bb2418') //Data we are reading
      .then(res => {
         console.log(res.weather);
      }
      )}

   return (
    <div>
  Hello
</div>
   )
};


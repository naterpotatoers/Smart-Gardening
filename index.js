import express from 'express';

import plantsRoutes from './plantApi/public/routes/plants.js';

//Establish BackEnd
const app = express();
const PORT = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/plants', plantsRoutes);

app.get('/', (req, res) => res.send('Hello and Welcome to Plant API for Smart Gardening'));

//Listen for incoming requests 
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));


//Temperature assume Fahrenheight
//Need units to find value of -> "soilMoisture": & "sunIntensity": 



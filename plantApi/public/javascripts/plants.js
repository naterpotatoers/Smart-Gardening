import {connection} from './database.js';
import mysql from 'mysql';

/*
Logic for routes
*/

let plants = [];

//all routes in here are start with /plants
export const getPlants = (req, res) => {
    let queryString = "SELECT * FROM plants";
    connection.query(queryString, function(err, results, fields) {
        if (err) throw err;
        console.log("We can get all Plants");
        res.send(results);
    });
}

//Post /plants
export const createPlant = (req,res) => {
    //revieve user request
    const plant = req.body;
    const queryString = "INSERT INTO plants('commonName', 'scientificName', 'growingSeason', 'weeksBeforeLastFrost', 'sunlight', 'tempMax', 'tempMin', 'humidityMax', 'humidityMin', 'phMax', 'phMin', 'id') VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const query = mysql.format(queryString, [plant.commonName, plant.scientificName, plant.growingSeason, plant.weeksBeforeLastFrost, plant.sunlight, plant.tempMax, plant.tempMin, plant.humidityMax, plant.humidityMin, plant.phMax, plant.phMin, plant.id]);
    connection.query(query, function(err, results, fields) {
        if (err) throw err;
        console.log("We can get create a plant");

        //send response to user that request was added correctly
        res.send(`Plant Data with the name ${plant.commonName} added to the database!`);
    
        res.send(results);
    })
}

//Get /plants/id
export const getPlant = (req, res) => {
    //retrieve parameter for id from request
    const { id } = req.params;
    //find plant in database with this id
    const foundPlant = plants.find((plants) => plants.id == id);
    //send response to user with data for plant
    res.send(foundPlant);

    /*
    const dbTable = "plants"
    const plantId = req.params
    const queryString = "SELECT * FROM dbTable WHERE id = ?"

    connection.query(queryString, [plantID], (err, rows, fields) => {
        if (err {
            res.send('Falied to query: + err)
            res.sendStatus(500)
            return
        })
    }
    */
}

//Delete /plants/id
export const deletePlant = (req, res) => {
    //retrieve parameter for id from request
    const { id } = req.params;
    //update database with list of plants that do not match this id
    //this will remove plant with this id from database
    plants = plants.filter((plants) => plants.id != id)
    //send response to user that plant has been deleted
    res.send(`User with id ${id} deleted from the database.`);

    /*
    const dbTable = "plants"
    const queryString = "DELETE FROM dbTable WHERE id = ?"

    connection.query(queryString, [plantID], (err, rows, fields) => {
        if (err {
            res.send('Falied to query: + err)
            res.sendStatus(500)
            return
        })
    }

    */
}

//Patch /plants/id
export const updatePlant = (req, res) => {
    //retrieve parameter for id from request
    const { id } = req.params;
    //retrieve parameters of body to be updated from request
    const { commonName, scientificName, growingSeason, weeksBeforeLastFrost, sunlight, tempMax, tempMin, humidityMax, humidityMin, phMax, phMin } = req.body;
    //find plant to update by id
    const plant = plants.find((plants) => plants.id === id);
    //update parameters 
    if(commonName)  plant.commonName = commonName;
    if(scientificName) plant.scientificName = scientificName;
    if(growingSeason) plant.growingSeason = growingSeason;
    if(weeksBeforeLastFrost) plant.weeksBeforeLastFrost = weeksBeforeLastFrost;
    if(sunlight) plant.sunlight = sunlight;
    if(tempMax) plant.tempMax = tempMax;
    if(tempMin) plant.tempMin = tempMin;
    if(humidityMax) plant.humidityMax = humidityMax;
    if(humidityMin) plant.humidityMin = humidityMin;
    if(phMax) plant.phMax = phMax;
    if(phMin) plant.phMin = phMin;
    //send response to user that plant has been updated
    res.send(`User with the id ${id} has been updated`);

    /*
    const dbTable = "plants"
    const queryString = ""

    connection.query(queryString, [plantID], (err, rows, fields) => {
        if (err {
            res.send('Falied to query: + err)
            res.sendStatus(500)
            return
        })
    }

    */
}


import {connection} from './database.js';
import mysql from 'mysql';

/*
Logic for routes
*/

//all routes in here are start with /plants
export const getPlants = (req, res) => {
    let query = "SELECT * FROM plants";
    connection.query(query, function(err, results, fields) {
        if (err) throw err;
        res.send();
    });
}

//Post /plants
export const createPlant = (req,res) => {
    //revieve user request
    const plant = req.body;
    const queryString = "INSERT INTO plants(commonName, scientificName, growingSeason, weeksBeforeLastFrost, sunlight, tempMax, tempMin, humidityMax, humidityMin, phMax, phMin, id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const query = mysql.format(queryString, [plant.commonName, plant.scientificName, plant.growingSeason, plant.weeksBeforeLastFrost, plant.sunlight, plant.tempMax, plant.tempMin, plant.humidityMax, plant.humidityMin, plant.phMax, plant.phMin, plant.id]);
    connection.query(query, function(err, results, fields) {
        if (err) throw err;
        res.send();
    })
}

//Get /plants/id
export const getPlant = (req, res) => {
    const query = `SELECT * FROM plants WHERE id = '${req.params.id}'`
    connection.query(query, (err, results, fields) => {
        if (err) throw err;
        res.send();
    })
    
}

//Delete /plants/id
export const deletePlant = (req, res) => {
    const query = `DELETE FROM plants WHERE id = '${req.params.id}'`
    connection.query(query, (err, results, fields) => {
        if (err) throw err;
        res.send();
    })
}

//Patch /plants/id
export const updatePlant = (req, res) => {
    //retrieve parameter for id from request
    const plant_id = req.params.id;
    
    //retrieve parameters of body to be updated from request
    const { commonName, scientificName, growingSeason, weeksBeforeLastFrost, sunlight, tempMax, tempMin, humidityMax, humidityMin, phMax, phMin } = req.body;
    
     //update parameters 
     if(commonName) {
        const queryString = "UPDATE plants SET commonName = ? WHERE id = ?";
        const query = mysql.format(queryString, [commonName, plant_id]);
        connection.query(query, (err, results, fields) => {
            if (err) throw err;
            res.send();
        })
     }
     if(scientificName) {
        const queryString = "UPDATE plants SET scientificName = ? WHERE id = ?"
        const query = mysql.format(queryString, [scientificName, plant_id]);
        connection.query(query, (err, results, fields) => {
            if (err) throw err;
            res.send();
        })
     }
     if(growingSeason) {
        const queryString = "UPDATE plants SET growingSeason = ? WHERE id = ?"
        const query = mysql.format(queryString, [growingSeason, plant_id]);
        connection.query(query, (err, results, fields) => {
            if (err) throw err;
            res.send();
        })
     }
     if(weeksBeforeLastFrost) {
        const queryString = "UPDATE plants SET weeksBeforeLastFrost = ? WHERE id = ?"
        const query = mysql.format(queryString, [weeksBeforeLastFrost, plant_id]);
        connection.query(query, (err, results, fields) => {
            if (err) throw err;
            res.send();
        })
     }
     if(sunlight) {
        const queryString = "UPDATE plants SET sunlight = ? WHERE id = ?"
        const query = mysql.format(queryString, [sunlight, plant_id]);
        connection.query(query, (err, results, fields) => {
            if (err) throw err;
            res.send();
        })
     }
     if(tempMax) {
        const queryString = "UPDATE plants SET tempMax = ? WHERE id = ?"
        const query = mysql.format(queryString, [tempMax, plant_id]);
        connection.query(query, (err, results, fields) => {
            if (err) throw err;
            res.send();
        })
     }
     if(tempMin) {
        const queryString = "UPDATE plants SET tempMin = ? WHERE id = ?"
        const query = mysql.format(queryString, [tempMin, plant_id]);
        connection.query(query, (err, results, fields) => {
            if (err) throw err;
            res.send();
        })
     }
     if(humidityMax) {
        const queryString = "UPDATE plants SET humidityMax = ? WHERE id = ?"
        const query = mysql.format(queryString, [humidityMax, plant_id]);
        connection.query(query, (err, results, fields) => {
            if (err) throw err;
            res.send();
        })
     }
     if(humidityMin) {
        const queryString = "UPDATE plants SET humidityMin = ? WHERE id = ?"
        const query = mysql.format(queryString, [humidityMin, plant_id]);
        connection.query(query, (err, results, fields) => {
            if (err) throw err;
            res.send();
        })
     }
     if(phMax) {
        const queryString = "UPDATE plants SET phMax = ? WHERE id = ?"
        const query = mysql.format(queryString, [phMax, plant_id]);
        connection.query(query, (err, results, fields) => {
            if (err) throw err;
            res.send();
        })
     }
     if(phMin) {
        const queryString = "UPDATE plants SET phMin = ? WHERE id = ?"
        const query = mysql.format(queryString, [phMin, plant_id]);
        connection.query(query, (err, results, fields) => {
            if (err) throw err;
            res.send();
        })
    }
}


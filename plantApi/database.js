import mysql from "mysql";

//MYSQL Connection
export const connection = mysql.createConnection({
  host: "smart-gardening-db.cjsjim1qtdlq.us-west-2.rds.amazonaws.com",
  user: "admin",
  password: "4LOPP3LD9MNfsOHbho8D",
  database: "plantdb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database!");
});

export default connection;

/*

CREATE TABLE plants (
	commonName VARCHAR(128), 
    scientificName VARCHAR(128), 
    growingSeason VARCHAR(128), 
    weeksBeforeLastFrost VARCHAR(128), 
    sunlight VARCHAR(128), 
    tempMax TINYINT , 
    tempMin TINYINT, 
    humidityMax TINYINT, 
    humidityMin TINYINT, 
    phMax TINYINT, 
    phMin TINYINT, 
    id VARCHAR(128)
);

INSERT INTO plants( INSERT INTO plants( commonName, scientificName, growingSeason, weeksBeforeLastFrost, sunlight, tempMax, tempMin, humidityMax, humidityMin, phMax, phMin, id) 
VALUES (" ", " ", " ", " ", " ", , , , , , , " ");

*/

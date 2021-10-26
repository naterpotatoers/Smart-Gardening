import mysql from 'mysql';

//MYSQL Connection
export const connection = mysql.createConnection ({
    host: 'rds-database-1.cabzoyqkdqpv.us-west-1.rds.amazonaws.com',
    user: 'masterUsername',
    password: 'Fall2021',
    database: 'plantdb'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database!');
});

export default connection;
// get the client
import mysql from 'mysql2/promise';

// create the connection to database
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'canbo'
});

// simple query


export default connection;
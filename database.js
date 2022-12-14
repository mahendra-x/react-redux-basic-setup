const mysql = require("mysql");
const dbConfig = require("../config/dbconfig");

const dotenv= require("dotenv").config()

const DB_HOST = process.env.HOST

// const connectDatabase = () => {
  // Create a connection to the database
  const connection = mysql.createConnection({
    host: DB_HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
  });

  // open the MySQL connection
  connection.connect((error) => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
// };

module.exports = connection;

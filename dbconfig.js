const dotenv= require("dotenv").config()

const DB_HOST = process.env.HOST


module.exports = {
    HOST: DB_HOST,
    USER: "root",
    PASSWORD: "",
    DB: "test"
  };
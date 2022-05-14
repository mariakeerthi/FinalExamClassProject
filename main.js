const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { request } = require("express");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");

require("dotenv").config({ path: path.resolve(__dirname, '.env') }) 

const userName = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;

const databaseAndCollection = {db: process.env.MONGO_DB_NAME, collection: process.env.MONGO_COLLECTION};

process.stdin.setEncoding("utf8");
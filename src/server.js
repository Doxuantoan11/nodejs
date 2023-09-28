
import express from "express";
import configViewEngine from "./configs/viewEngine";
const bodyParser = require('body-parser');
import initWebRoute from './route/web';
// import connection from "./configs/connectDB";
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
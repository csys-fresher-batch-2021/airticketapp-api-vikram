const express = require('express')
const cors = require("cors");

const FlightController = require('./controllers/FlightController.js');
require("dotenv").config();

const app = express()
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => console.log('Quintessa trip welcomes you !'));

app.get('/api/flights', FlightController.getAllFlights);

app.post('/api/flights/addflight', FlightController.addNewFlight);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
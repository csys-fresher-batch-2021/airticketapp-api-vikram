const express = require('express')
const cors = require("cors");

const FlightController = require('./controllers/FlightController.js');
const TicketController = require('./controllers/TicketController.js');
require("dotenv").config();

const app = express()
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => console.log('Quintessa trip welcomes you !'));

// Routes for flights.
app.get('/api/flights', FlightController.getAllFlights);

app.get('/api/flights/:id', FlightController.getFlightById);

app.post('/api/flights/addflight', FlightController.addNewFlight);

app.put('/api/flights/updateflight/:id', FlightController.updateFlight);

app.delete('/api/flights/deleteflight/:id', FlightController.deleteFlight);

// Routes for tickets.
app.get('/api/tickets', TicketController.displayTickets);

app.post('/api/tickets/bookticket', TicketController.storeFlightTicket);

app.delete('/api/tickets/cancelTicket/:id', TicketController.cancelTicket);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
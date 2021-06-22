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
app.get('/api/v1/flights', FlightController.getAllFlights);

app.get('/api/v1/flights/:id', FlightController.getFlightById);

app.post('/api/v1/flights/search', FlightController.getByFlightsByFilter);

app.post('/api/v1/flights', FlightController.addNewFlight);

app.put('/api/v1/flights/:id', FlightController.updateFlight);

app.delete('/api/v1/flights/:id', FlightController.deleteFlight);

// Routes for tickets.
app.get('/api/v1/tickets', TicketController.displayTickets);

// app.get('/api/v1/tickets', TicketController.getTicketsByEmail);

app.post('/api/v1/tickets', TicketController.storeFlightTicket);

app.patch('/api/v1/tickets/:id/cancel', TicketController.cancelTicket);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
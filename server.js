const express = require('express');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = "secret";
const cors = require("cors");

const FlightController = require('./controllers/FlightController.js');
const TicketController = require('./controllers/TicketController.js');
const PaymentController = require('./controllers/PaymentController.js');
const UserController = require('./controllers/UserController.js');
const AdminController = require('./controllers/AdminController.js');
const { TransactController } = require('./controllers/TransactController.js');
const Authentication = require('./middlewares/Authentication.js');

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const transactController = new TransactController();
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

app.post('/api/v1/tickets', Authentication.authenticateToken, TicketController.storeFlightTicket);

app.patch('/api/v1/tickets/:id/cancel', TicketController.cancelTicket);

// Routes for payment.
app.get('/api/v1/card', PaymentController.getAllCardDetails);

app.post('/api/v1/card', PaymentController.storeCardDetails);

// User Routes.
app.post('/api/v1/login', UserController.authenticateUser);

app.post('/api/v1/signup', UserController.storeUser);

// Admin Routes.
app.post('/api/v1/admin', AdminController.authenticate);

// Transaction Routes.
app.post('/api/v1/transactions', transactController.save);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
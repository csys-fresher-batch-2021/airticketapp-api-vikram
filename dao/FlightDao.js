const pool = require('../dao/connection.js');

class FlightDao {

    /**
     * Function to display all flights from the database
     */
    static async showAllFlights() {
        let flightQuery = 'SELECT * FROM flights';
        try {
            const client = await pool.connect();
            const result = await client.query(flightQuery);
            client.release();
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Function to return flights data based on filter.
     * @param {*} flights 
     */
    static async getAllFlightsByFilter(flights){
        let params = [flights.date, flights.origin, flights.destiny];
        let flightQuery = 'select * from flights where flight_date = $1 AND origin = $2 AND destiny = $3';
        try {
            const client = await pool.connect();
            const result = await client.query(flightQuery, params);
            client.release();
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Function to retrieve specific row from the flights database.
     * @param {*} id 
     */
    static async getFlight(id){
        let params = [id];
        let getFlight = 'SELECT * FROM flights WHERE id = $1';
        try {
            const client = await pool.connect();
            const result = await client.query(getFlight, params);
            client.release();
            return result;
        } catch (err) {
            console.log(err);
        }
    }
    
    /**
     * Function to add a flight to the database.
     * @param {*} flight 
     */
    static async addNewFlight(flight) {
        let flightData = [flight.no, flight.airline, flight.date, flight.origin, flight.destiny, flight.departTime, flight.arrivalTime, flight.economy, flight.business, flight.economyPrice, flight.businessPrice];
        let addFlightQuery = 'INSERT INTO flights ( flight_no, airline, flight_date, origin, destiny, depart_time, arrival_time, economy, business, economy_price, business_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
        try {
            const client = await pool.connect();
            const result = await client.query(addFlightQuery, flightData);
            client.release();
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Function to update flight.
     * @param {*} updatedFlight 
     */
    static async updateFlight(id, updatedFlight){
        let params = [updatedFlight.no, updatedFlight.airline, updatedFlight.date, updatedFlight.origin, updatedFlight.destiny, updatedFlight.departTime, updatedFlight.arrivalTime, updatedFlight.economy, updatedFlight.business, updatedFlight.economyPrice, updatedFlight.businessPrice, id];
        let updateQuery = 'UPDATE flights SET flight_no = $1, airline = $2, flight_date = $3, origin = $4, destiny = $5, depart_time = $6, arrival_time = $7, economy = $8, business = $9, economy_price = $10, business_price = $11 where id = $12';
        try {
            const client = await pool.connect();
            const result = await client.query(updateQuery, params);
            client.release();
            return result;
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * Function deletes the flight from the table.
     * @param {*} id 
     */
    static async deleteFlight(id){
        let params = [id];
        let deleteQuery = 'DELETE FROM flights WHERE id = $1';
        try {
            const client = await pool.connect();
            const result = await client.query(deleteQuery, params);
            client.release();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = FlightDao;
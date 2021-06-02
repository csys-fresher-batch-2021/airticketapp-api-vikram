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
            console.log(result);
            return result.rows;
        } catch (error) {
            console.log(error);
        }
    }

    // static async getFlight(id){
    //     let getFlight = 'SELECT * FROM flights WHERE id = $1';
    //     try {
    //         const client = await Pool.connect();
    //         const result = await client.query(getFlight);
    //         console.log(result);
    //         return result.rows;
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    
    /**
     * Function to add a flight to the database.
     * @param {*} flight 
     */
    static async addNewFlight(flight) {
        let addFlightQuery = 'INSERT INTO flights ( flight_no, airline, flight_date, origin, destiny, depart_time, arrival_time, economy, business, economy_price, business_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
        let result = await pool.query(addFlightQuery, flight);
        return result;
    }

    /**
     * Function to update flight.
     * @param {*} updatedFlight 
     */
    static async updateFlight(updatedFlight){
        let updateQuery = 'UPDATE flights SET flight_no = $1, airline = $2, flight_date = $3, origin = $4, destiny = $5, depart_time = $6, arrival_time = $7, economy = $8, business = $9, economy_price = $10, business_price = $11 where id = $12';
        try {
            const client = await pool.connect();
            client.query(updateQuery, updatedFlight);
            console.log("Flight updated successfully");
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * Function deletes the flight from the table.
     * @param {*} id 
     */
    static async deleteFlight(id){
        let deleteQuery = 'DELETE FROM flights WHERE id = $1';
        try {
            const client = await pool.connect();
            client.query(deleteQuery, id);
            console.log("Flight deleted successfully");
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = FlightDao;
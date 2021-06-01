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
    
    /**
     * Function to add a flight to the database.
     * @param {*} flight 
     */
    static async addNewFlight(flight) {
        let addFlightQuery = 'INSERT INTO flights ( flight_no, airline, flight_date, origin, destiny, depart_time, arrival_time, economy, business, economy_price, business_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
         pool.query(addFlightQuery, flight, (err, res) =>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Flight added successfully");
            }
         });
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
            console.log(err)
        }
    }
}

module.exports = FlightDao;
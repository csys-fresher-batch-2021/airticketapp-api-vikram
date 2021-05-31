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
}

module.exports = FlightDao;
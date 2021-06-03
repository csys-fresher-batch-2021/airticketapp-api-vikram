const pool = require('../dao/connection.js');

class TicketDao{
    
    /**
     * Function to display the tickets from the database.
     */
    static async showAllTickets(){
        let getQuery = 'SELECT * FROM ticket';
        try {
            const client = await pool.connect();
            const result = await client.query(getQuery);
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Function to store ticket data to the database.
     * @param {*} ticket 
     */
    static async storeTicket(ticket){
        let addQuery = 'insert into ticket (ticket_no, flight_no, email, origin, destiny, depart_time, arrival_time, price, status, booked_time) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, current_timestamp)';
        try {
            const client = await pool.connect();
            const result = await client.query(addQuery, ticket);
            return result;
        } catch (error) {
            console.error(error);
        } 
    }

    /**
     * Function to remove the ticket from the database.
     * @param {*} id 
     */
    static async cancelTicket(id){
        let deleteQuery = 'DELETE FROM ticket WHERE id = $1';
        try {
            const client = await pool.connect();
            client.query(deleteQuery, id);
            console.log("Ticket cancelled successfully");
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = TicketDao;
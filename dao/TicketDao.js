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
            client.release();
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Function to store ticket data to the database.
     * @param {*} ticket 
     */
    static async storeTicket(ticket){
        let ticketData = [ticket.no, ticket.flightId, ticket.email, ticket.origin, ticket.destiny, ticket.depart, ticket.arrival, ticket.price, ticket.status];
        let addQuery = 'insert into ticket (ticket_no, flight_no, email, origin, destiny, depart_time, arrival_time, price, status, booked_time) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, current_timestamp)';
        try {
            const client = await pool.connect();
            const result = await client.query(addQuery, ticketData);
            client.release();
            return result;
        } catch (error) {
            console.log(error);
        } 
    }

    /**
     * Function to retrieve booked ticket based on email.
     * @param {*} email 
     */
    static async getTicketByEmail(email){
        let params = [email];
        let selectQuery = 'SELECT * FROM ticket WHERE email = $1';
        try{
            const client = await pool.connect();
            const result = await client.query(selectQuery, params);
            client.release();
            return result;
        }catch(error){
            console.log(error);
        }
    }

    /**
     * Function to remove the ticket from the database.
     * @param {*} id 
     */
    static async cancelTicket(id){
        let params = [id];
        let deleteQuery = 'DELETE FROM ticket WHERE id = $1';
        try {
            const client = await pool.connect();
            const result = client.query(deleteQuery, params);
            client.release();
            return result;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = TicketDao;
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
}

module.exports = TicketDao;
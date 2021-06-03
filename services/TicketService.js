const TicketDao = require('../dao/TicketDao.js');

class TicketService{

    /**
     * Function to get all tickets from the database.
     */
    static getAllTickets(){
        return TicketDao.showAllTickets();
    }
}

module.exports = TicketService;
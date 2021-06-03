const TicketDao = require('../dao/TicketDao.js');

class TicketService{

    /**
     * Function to get all tickets from the database.
     */
    static getAllTickets(){
        return TicketDao.showAllTickets();
    }

    /**
     * Function to send ticket data from service to Dao.
     * @param {*} ticket 
     */
    static saveTicket(ticket){
        let ticketData = [ticket.no, ticket.flightId, ticket.email, ticket.origin, ticket.destiny, ticket.depart, ticket.arrival, ticket.price, ticket.status];
        return TicketDao.storeTicket(ticketData);
    }

    /**
     * Function to delete ticket from the database.
     * @param {*} id 
     */
    static deleteTicket(id){
        let params = [id];
        return TicketDao.cancelTicket(params);
    }
}

module.exports = TicketService;
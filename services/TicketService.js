const TicketDao = require('../dao/TicketDao.js');
const ticketValidator = require('../helpers/TicketValidator.js');

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
        const result = ticketValidator.ticketSchema().validate(ticket);
        if(result.error != null){
            throw new Error(result.error);
        }
        else{
            return TicketDao.storeTicket(ticket);
        }
    }

    /**
     * Function to get all tickets booked by user using email.
     * @param {*} email 
     */
    static getTicketsByEmail(email){
        return TicketDao.getTicketByEmail(email);
    }

    /**
     * Function to delete ticket from the database.
     * @param {*} id 
     */
    static deleteTicket(id){
        return TicketDao.cancelTicket(id);
    }
}

module.exports = TicketService;
const TicketService = require('../services/TicketService');

class TicketController{
    /**
     * Controller function to get all ticket from the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async displayTickets(req, res){
        let result = await TicketService.getAllTickets();
        res.send(result.rows);
    }
}

module.exports = TicketController;
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

    /**
     * Function stores the ticket to the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async storeFlightTicket(req, res){
        let result = await TicketService.saveTicket(req.body);
        if(result != null) {
            res.status(200).json({message:"success"});
            console.log('Ticket saved successfully');
        }
        else{
            res.status(400).json({errorMessage: err.message});
        }
    }

    /**
     * Function to delete ticket from the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async cancelTicket(req, res) {
        let id = req.params.id;
        let result = await TicketService.deleteTicket(id);
        if(result != null){
            res.status(200).json({message:"success"});
            console.log('Ticket cancelled successfully');
        }
        else{
            res.status(400).json({errorMessage: err.message});
        }
    }
}

module.exports = TicketController;
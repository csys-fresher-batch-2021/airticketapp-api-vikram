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
            console.log('Ticket booked successfully');
        }
        else{
            res.status(400).json({errorMessage: err.message});
        }
    }

    /**
     * Function to get all tickets booked by user using email.
     * @param {*} email 
     */
    static async getTicketsByEmail(req, res){
        let email = req.query.email;
        let result = await TicketService.getTicketsByEmail(email);
        if(result != null){
            res.status(200).json(result.rows);
        } else{
            res.status(400).json({message: "failed"});
        }
    }

    /**
     * Function to delete ticket from the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async cancelTicket(req, res) {
        let id = req.params.id;
        await TicketService.deleteTicket(id);
        res.send("Ticket Cancelled successfully");
    }
}

module.exports = TicketController;
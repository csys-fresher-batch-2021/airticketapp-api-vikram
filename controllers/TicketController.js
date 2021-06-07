const TicketService = require('../services/TicketService');

class TicketController {
    /**
     * Controller function to get all ticket from the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async displayTickets(req, res) {
        let result = await TicketService.getAllTickets();
        res.send(result.rows);
    }

    /**
     * Function stores the ticket to the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async storeFlightTicket(req, res) {
        try {
            let status = await TicketService.saveTicket(req.body);
            if (status != null) {
                console.log("Ticket booked successfully");
                res.status(200).json({ message: "success" });
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    /**
     * Function to get all tickets booked by user using email.
     * @param {*} email 
     */
    static async getTicketsByEmail(req, res) {
        let email = req.query.email;
        let result = await TicketService.getTicketsByEmail(email);
        if (result != null) {
            res.status(200).json(result.rows);
        } else {
            res.status(400).json({ message: "failed" });
        }
    }

    /**
     * Function to delete ticket from the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async cancelTicket(req, res) {
        let id = req.params.id;
        const status = await TicketService.deleteTicket(id);
        try {
            if(status != null){
                console.log("Ticket cancelled successfully");
                res.status(200).json({message: "success"});
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

module.exports = TicketController;
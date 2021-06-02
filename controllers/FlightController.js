const FlightService = require('../services/FlightService');

class FlightController{
    // Function that retreives all flights from the database
    static async getAllFlights(req, res){
        let result = await FlightService.getAllFlights();
        res.send(result);
    }

    /**
     * Function to add flight to the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async addNewFlight(req, res){
        let result = await FlightService.addNewFlight(req.body);
        res.send(result);
    }

    /**
     * Function to update flight.
     * @param {*} req 
     * @param {*} res 
     */
    static async updateFlight(req, res){
        let id = req.params.id;
        await FlightService.updateFlight(id, req.body);
    }
}

module.exports = FlightController;
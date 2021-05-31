const FlightService = require('../services/FlightService');

class FlightController{
    // Function that retreives all flights from the database
    static async getAllFlights(req, res){
        let result = await FlightService.getAllFlights();
        res.send(result);
    }
}

module.exports = FlightController;
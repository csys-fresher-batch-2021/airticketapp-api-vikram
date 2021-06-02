const FlightService = require('../services/FlightService');

class FlightController {

    // Function that retreives all flights from the database
    static async getAllFlights(req, res) {
        let result = await FlightService.getAllFlights();
        res.send(result);
    }

    /**
     * Function to add flight to the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async addNewFlight(req, res) {
        try {
            let status = await FlightService.addNewFlight(req.body);
            if (status != null) {
                res.status(200).json({ message: "success" });
                console.log("Flight added successfully");
            }
        }
        catch (error) {
            res.status(400).json({ errorMessage: err.message });
        }
    }

    /**
     * Function to update flight.
     * @param {*} req 
     * @param {*} res 
     */
    static async updateFlight(req, res) {
        let id = req.params.id;
        await FlightService.updateFlight(id, req.body);
    }

    /**
     * Controller function to delete flight.
     * @param {*} req 
     * @param {*} res 
     */
    static async deleteFlight(req, res) {
        let id = req.params.id;
        await FlightService.deleteFlight(id);
    }

}

module.exports = FlightController;
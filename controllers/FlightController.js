const FlightService = require('../services/FlightService');

class FlightController {

    // Function that retreives all flights from the database
    static async getAllFlights(req, res) {
        let result = await FlightService.getAllFlights();
        res.status(200).send(result.rows);
    }

    /**
     * Funtion to retrieve the flight from the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async getFlightById(req, res) {
        let result = await FlightService.getFlightDetail(req.params.id);
        res.send(result.rows[0]);
    }

    /**
     * Function to retreive flight by search filter.
     * @param {*} req 
     * @param {*} res 
     */
    static async getByFlightsByFilter(req, res) {
        let result = await FlightService.getFlightsByFilter(req.body);
        res.send(result.rows);
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
                console.log("Flight added successfully");
                res.status(200).json({ message: "success" });
            }
        }
        catch (error) {
            res.status(400).send(error.message);
        }
    }

    /**
     * Function to update flight.
     * @param {*} req 
     * @param {*} res 
     */
    static async updateFlight(req, res) {
        try {
            const id = req.params.id;
            let status = await FlightService.updateFlight(id, req.body);
            console.log(status);
            if (status != null) {
                console.log("Flight updated successfully");
                res.status(200).json({ message: "success" });
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    /**
     * Controller function to delete flight.
     * @param {*} req 
     * @param {*} res 
     */
    static async deleteFlight(req, res) {
        try {
            let id = req.params.id;
            const status = await FlightService.deleteFlight(id);
            if (status != null) {
                console.log("Deleted successfully");
                res.status(200).json({ message: "success" });
            }
        }
        catch (error) {
            res.status(400).send(error.message);
        }
    }
}

module.exports = FlightController;
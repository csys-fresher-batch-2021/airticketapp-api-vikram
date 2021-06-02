const FlightDao = require('../dao/FlightDao.js');

class FlightService{

    // Function calls show all flights method from the Dao.
    static getAllFlights(){
        return FlightDao.showAllFlights();
    }

    /**
     * Function to get a details from the Dao.
     * @param {*} id 
     */
    static getFlightDetail(id){
        let params = [id];
        return FlightDao.getFlight(params);
    }

    /**
     * Function adds the flight array to Flight Dao.
     * @param {*} flight 
     */
    static addNewFlight(flight){
        let flightData = [flight.no, flight.airline, flight.date, flight.origin, flight.destiny, flight.departTime, flight.arrivalTime, flight.economy, flight.business, flight.economyPrice, flight.businessPrice];
        FlightDao.addNewFlight(flightData);
    }

    /**
     * Function to send updated flight data to flight dao.
     * @param {*} id 
     * @param {*} updatedFlight 
     */
    static updateFlight(id, updatedFlight){
        let updatedData = [updatedFlight.no, updatedFlight.airline, updatedFlight.date, updatedFlight.origin, updatedFlight.destiny, updatedFlight.departTime, updatedFlight.arrivalTime, updatedFlight.economy, updatedFlight.business, updatedFlight.economyPrice, updatedFlight.businessPrice, id];
        FlightDao.updateFlight(updatedData);
    }

    /**
     * Function to delete the flight data from the database.
     * @param {*} id 
     */
    static deleteFlight(id){
        let params = [id];
        FlightDao.deleteFlight(params);
    }
}

module.exports = FlightService;
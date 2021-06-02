const FlightDao = require('../dao/FlightDao.js');

class FlightService{
    // Function calls show all flights method from the Dao.
    static getAllFlights(){
        return FlightDao.showAllFlights();
    }

    /**
     * Function adds the flight array to Flight Dao.
     * @param {*} flight 
     */
    static addNewFlight(flight){
        let flightData = [flight.no, flight.airline, flight.date, flight.origin, flight.destiny, flight.departTime, flight.arrivalTime, flight.economy, flight.business, flight.economyPrice, flight.businessPrice];
        FlightDao.addNewFlight(flightData);
    }
}

module.exports = FlightService;
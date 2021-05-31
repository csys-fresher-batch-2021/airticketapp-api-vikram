const FlightDao = require('../dao/FlightDao.js');

class FlightService{
    // Function calls show all flights method from the Dao.
    static getAllFlights(){
        return FlightDao.showAllFlights();
    }
}

module.exports = FlightService;
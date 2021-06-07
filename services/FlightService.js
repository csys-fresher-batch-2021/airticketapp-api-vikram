const Joi = require('joi');

const FlightDao = require('../dao/FlightDao.js');
const { schema } = require('../helpers/FlightValidator.js');


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
        return FlightDao.getFlight(id);
    }

    /**
     * Function adds the flight array to Flight Dao.
     * @param {*} flight 
     */
    static addNewFlight(flight){
        const result = schema.validate(flight);
        if(result.error != null){
            throw new Error(result.error);
        }
        else{
            return FlightDao.addNewFlight(flight);
        }
    }

    /**
     * Function to send updated flight data to flight dao.
     * @param {*} id 
     * @param {*} updatedFlight 
     */
    static updateFlight(id, updatedFlight){
        const result = schema.validate(updatedFlight);
        if(result.error != null){
            throw new Error(result.error);
        }
        else{
            return FlightDao.updateFlight(id, updatedFlight);
        }
    }

    /**
     * Function to delete the flight data from the database.
     * @param {*} id 
     */
    static deleteFlight(id){
        return FlightDao.deleteFlight(id);
    }
}

module.exports = FlightService;
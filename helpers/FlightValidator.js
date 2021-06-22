const Joi = require('joi');

class FlightValidator{
    static flightSchema(){
        const schema = Joi.object({
            no: Joi.number().min(100).max(999).required(),
            airline: Joi.string().min(2).max(10).required(),
            date: Joi.date().required(),
            origin: Joi.string().min(2).max(20).required(),
            destiny: Joi.string().min(2).max(20).required(),
            departTime: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})\:([0-9]{2})$/).required(),
            arrivalTime: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})\:([0-9]{2})$/).required(),
            economy: Joi.number().min(100).required(),
            business: Joi.number().min(10).required(),
            economyPrice: Joi.number().min(2000).required(),
            businessPrice: Joi.number().min(3000).required()
        });
        return schema;
    }
}

module.exports = FlightValidator;
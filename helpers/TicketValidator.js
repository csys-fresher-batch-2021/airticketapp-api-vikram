const Joi = require('joi');

class TicketValidator{
    static ticketSchema(){
        const schema = Joi.object({
            no: Joi.number().min(100).required(),
            flightId: Joi.number().min(100).required(),
            email: Joi.string().email().required(),
            origin: Joi.string().min(2).required(),
            destiny: Joi.string().min(2).required(),
            depart: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/).required(),
            arrival: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/).required(),
            price: Joi.number().min(1000).required(),
            status: Joi.string().min(5).required()
        });
        return schema;
    }
}   

module.exports = TicketValidator;
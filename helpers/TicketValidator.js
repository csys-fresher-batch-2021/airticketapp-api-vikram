const Joi = require('joi');

class TicketValidator{
    static ticketSchema(){
        const schema = Joi.object({
            no: Joi.number().min(100).max(999).required(),
            airline: Joi.string().min(2).max(10).required(),
            date: Joi.date().required(),
            origin: Joi.string().min(2).max(20).required(),
            destiny: Joi.string().min(2).max(20).required(),
            depart: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})\:([0-9]{2})$/).required(),
            arrival: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})\:([0-9]{2})$/).required(),
            seatType: Joi.string().min(2).max(10).required(),
            noOfTickets: Joi.number().max(10).required(),
            adult: Joi.number().max(10).required(),
            children: Joi.number().max(10).required(),
            infant: Joi.number().max(10).required(),
            price: Joi.number().min(1000).required()
        });
        return schema;
    }
}   

module.exports = TicketValidator;
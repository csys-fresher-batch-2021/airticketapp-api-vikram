const Joi = require('joi');

class CardValidator{
    /**
     * Schema for card to validate.
     */
    static cardSchema(){
        const schema = Joi.object({
            card_name: Joi.string().min(2).max(30).required(),
            card_no : Joi.number().min(111111111111).required(),
            expiry_month: Joi.number().min(1).max(12).required(),
            expiry_year: Joi.number().min(21).max(50).required()
        });
        return schema;
    }
}

module.exports = CardValidator;
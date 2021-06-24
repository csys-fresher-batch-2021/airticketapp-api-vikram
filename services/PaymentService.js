const PaymentDao = require('../dao/PaymentDao.js');
const cardValidator = require('../helpers/CardValidator.js');

class PaymentService{

    /**
     * Function to get all paid card details from the database.
     */
    static getAllCardDetails(){
        return PaymentDao.getAllCardDetails();
    }

    /**
     * Function to store card details to the database.
     * @param {*} cardData 
     */
    static storeCardDetails(cardData){
        const result = cardValidator.cardSchema().validate(cardData);
        if(result.error != null){
            throw new Error(result.error);
        }
        else{
            return PaymentDao.storeCardDetails(cardData);
        }
    }
}

module.exports = PaymentService;
const pool = require('../dao/connection.js');

class PaymentDao{

    /**
     * Function to get all paid card details from the database.
     */
    static async getAllCardDetails(){
        let getQuery = 'SELECT * FROM card_payment';
        try {
            const client = await pool.connect();
            const result = await client.query(getQuery);
            client.release();
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Function to store card details.
     * @param {*} cardData 
     */
    static async storeCardDetails(cardData){
        let params = [cardData.card_name, cardData.card_no, cardData.expiry_month, cardData.expiry_year];
        let addQuery = 'insert into card_payment(card_name, card_no, expiry_month, expiry_year, paid_time) values($1, $2, $3, $4, current_timestamp)';
        try {
            const client = await pool.connect();
            const result = await client.query(addQuery, params);
            client.release();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = PaymentDao;
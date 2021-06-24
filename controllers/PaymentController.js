const PaymentService = require('../services/PaymentService.js');

class PaymentController {

    /**
     * Function to get all paid card details from the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async getAllCardDetails(req, res) {
        let result = await PaymentService.getAllCardDetails();
        res.send(result.rows);
    }

    /**
     * Function to store card data to the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async storeCardDetails(req, res) {
        try {
            let status = await PaymentService.storeCardDetails(req.body);
            if (status != null) {
                console.log("Details added successfully");
                res.status(200).json({ message: "success" });
            }
        }
        catch (error) {
            res.status(400).send(error.message);
        }
    }
}

module.exports = PaymentController;
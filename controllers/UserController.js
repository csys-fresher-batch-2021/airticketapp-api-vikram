const UserService = require('../services/UserService.js');
const AuthToken = require('../middlewares/Authentication.js');

class UserController{
    /**
     * Function to save user.
     * @param {*} req 
     * @param {*} res 
     */
    static async storeUser(req, res){
        try {
            let status = await UserService.saveUser(req.body);
            if (status != null) {
                console.log("User added successfully");
                res.status(200).json({ message: "success" });
            }
        }
        catch (error) {
            res.status(400).send(error.message);
        }
    }

    /**
     * Function to authenticate user.
     * @param {*} req 
     * @param {*} res 
     */
    static async authenticateUser(req, res){
        let result = await UserService.authenticateUser(req.body);
        // console.log(result);
        if(result.rows.length > 0){
            // delete result[0].password;
            let token = AuthToken.generateToken(result.rows[0]);
            // console.log(token);
            result.rows[0].token = token;
            res.status(200).json(result.rows);
        } else{
            res.status(400).json({errorMessage: "Invalid Credentials"});
        }
    }
}

module.exports = UserController;
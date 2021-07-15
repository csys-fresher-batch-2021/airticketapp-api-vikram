let AdminService = require('../services/AdminService.js');
let AuthToken = require('../middlewares/Authentication.js');

class AdminController{
    /**
     * Function to authenticate admin.
     * @param {*} req 
     * @param {*} res 
     */
    static async authenticate(req, res){
        let result = await AdminService.authenticate(req.body);
        if(result.length > 0){
            delete result[0].password;
            let token = AuthToken.generateToken(result[0]);
            result[0].token = token;
            res.status(200).json(result[0]);
        } else{
            res.status(400).json({errorMessage: "Invalid Credentials"});
        }
    }
}

module.exports = AdminController;
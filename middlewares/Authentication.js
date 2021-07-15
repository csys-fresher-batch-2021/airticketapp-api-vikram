const jwt = require('jsonwebtoken');
const TOKEN_SECRET = "secret";

class Authentication {

    /**
    * Function to generate token.
    * @param {*} user 
    */
    static generateToken(user) {
        let token = jwt.sign(user, TOKEN_SECRET, { expiresIn: 86400 });
        return token;
    }

    /**
     * Function to authenticate token.
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    static authenticateToken(req, res, next) {
        let authHeader = req.headers.authorization;
        console.log(authHeader);
        let token = authHeader.split(' ')[1];
        console.log(token);
        jwt.verify(token, TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(401);
            req.user = user;
            next();
        });
    }
}

module.exports = Authentication;
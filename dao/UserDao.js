const pool = require('../dao/connection.js');

class UserDao{
    /**
     * Add new user.
     * @param {*} user 
     */
    static async storeUser(user){
        let userData = [user.name, user.email, user.mobileNo, user.username, user.password];
        let addQuery = 'INSERT INTO signup(name, email, mobileNo, username, password) values ($1, $2, $3, $4, $5)';
        try {
            const client = await pool.connect();
            const result = await client.query(addQuery, userData);
            client.release();
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Function to authenticate user.
     * @param {*} email 
     * @param {*} password 
     */
    static async authenticateUser(email, password){
        let selectQuery = "SELECT id, name, email, mobileno, username, password FROM signup WHERE email=$1 AND password=$2";
        let params = [email, password];
        try {
            const client = await pool.connect();
            const result = await client.query(selectQuery, params);
            client.release();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserDao;
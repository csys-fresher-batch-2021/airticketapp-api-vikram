const pool = require('../dao/connection.js');

class AdminDao{
    /**
     * Dao to authenticate admin.
     * @param {*} data 
     */
    static async authenticate(data){
        let authQuery = "SELECT * FROM admin WHERE EMAIL=$1 AND PASSWORD=$2";
        let params = [data.email, data.password];
        try{
            let client = await pool.connect();
            let result = await client.query(authQuery, params);
            client.release();
            return result.rows;
        } catch(err){
            console.log(err);
        }
    }
}

module.exports = AdminDao;
const AdminDao = require('../dao/AdminDao.js');

class AdminService{
    /**
     * Function to authenticate admin.
     * @param {*} data 
     */
    static async authenticate(data){
        return AdminDao.authenticate(data);
    }
}

module.exports = AdminService;
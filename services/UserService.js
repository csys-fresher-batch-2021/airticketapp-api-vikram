const UserDao = require('../dao/UserDao.js');

class UserService{
    /**
     * Store user.
     * @param {*} user 
     */
    static saveUser(user){
        return UserDao.storeUser(user);
    }

    /**
     * Function to authenticate user.
     * @param {*} email 
     * @param {*} password 
     */
    static authenticateUser(user){
        let email = user.email;
        let password = user.password;
        return UserDao.authenticateUser(email, password);
    }
}

module.exports = UserService;
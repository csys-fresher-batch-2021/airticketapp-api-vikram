const { TransactDao } = require('../dao/TransactDao.js');
const transactDao = new TransactDao();

class TransactService {
    async save(data) {
        try {
            let result = await transactDao.saveTransact(data);
            return result;
        } catch (err) {
            console.error(err.message);
            throw new Error(err.message);
        }
    }
}

exports.TransactService = TransactService;
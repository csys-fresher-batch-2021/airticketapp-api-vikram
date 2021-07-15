const { HttpClient } = require('../helpers/http-client.js');
const dotenv = require('dotenv');
dotenv.config();
const httpClient = new HttpClient();

class TransactDao {
    DB_URL = null;
    constructor() {
        this.DB_URL = process.env.DB_URL;
        console.log("DB_URL=", this.DB_URL);
    }

    handleErrorMessage(err) {
        console.error(err);
        let response = err.response.data;
        let errorMessage = err.response.data.error;
        console.log("errorMessage:" + errorMessage);
        if (response.error == "not_found" ) {
          if (response.reason == "Database does not exist."){
            throw new Error("Database not found");
          }
          else{
            throw new Error("Data not found");
          }
        } else {
          throw new Error(errorMessage);
        }
      }

    async saveTransact(data) {
        const url = this.DB_URL + "/transactions";
        try {
            let result = await httpClient.post(url, data);
            console.log(result);
            return result.data;
        } catch (err) {
            this.handleErrorMessage(err);
        }
    }
}

exports.TransactDao = TransactDao;
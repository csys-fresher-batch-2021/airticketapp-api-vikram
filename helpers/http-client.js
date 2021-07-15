const axios = require('axios');

class HttpClient{
    headers;
    constructor(){
        const apiKey = Buffer.from(process.env.DB_USERNAME + ':' + process.env.DB_PASS).toString('base64');
        console.log(apiKey);
        this.headers  =  {
            'Authorization': `Basic ${apiKey}`
        };
    }

    async post(url, data){
        console.log("URL:", url ,"data:", JSON.stringify(data));
        return axios.post(url,data, { headers: this.headers });
    }
}

exports.HttpClient = HttpClient;
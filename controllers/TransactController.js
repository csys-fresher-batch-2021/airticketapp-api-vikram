const { TransactService } = require('../services/TransactService.js');
const transactService = new TransactService();

class TransactController{
    save(req, res) {
        let transactData = req.body;
        transactService.save(transactData).then(result => {
            let data = result;            
            res.status(201).json(data);
        }).catch(err => {            
            console.error("Error", err.message);
            res.status(500).json({errorMessage: err.message});
        });
    }    
}

exports.TransactController = TransactController;
const paketrSrModels = require('../models/rab_paketsr');

const getSR = (req, res) => {
    paketrSrModels.getAllSr((err, results) => {
        if(err){
            console.log(err);
            res.status(500).json({error : 'Internal Server Error'})
        } else {
            res.json(results);
        }
    })
}

const getIdSr = (req, res) => {
    const id = req.params.id;
   paketrSrModels.getIdSr(id, ( err, result) => {
        if(err){
            console.log(err);
            res.status(500).json({error : 'Internal Server Error'})
        } else {
            if (result.length === 0) {
                res.status(404).json({ error: 'Data not found' });
            } else {
                res.json(result[0]); // Mengirimkan data tanpa objek berlapis
            }
        }
    })
}

module.exports = {
    getIdSr,
    getSR
}
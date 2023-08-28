const aksesorisModels = require('../models/rab_aksesoris');

const getAksesoris = (req, res) => {
    aksesorisModels.getAllAksesoris((err, results) => {
        if(err){
            console.log(err);
            res.status(500).json({error: 'Invalid Server Internal'});
        } else {
            res.json(results);
        }
    })
}

const getAksesorisById = (req, res) => {
    const id = req.params.id;
    aksesorisModels.getIdAksesoris(id, (err, results) => {
        if(err){
            console.log(err);
            res.status(500).json({error : 'Invalid Server Connection'})
        }else{
            if(results.length === 0){
                res.status(404).json({error : 'Data not found'})
            } else {
                res.json(results[0]);
            }
        }
    })
}

module.exports = {
    getAksesoris,
    getAksesorisById
}
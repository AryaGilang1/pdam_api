const jasaModel = require('../models/rab_jasa');

const getJasa = (req, res) => {
    jasaModel.getAllJasa((err, result) => {
        if(err){
            console.log(err)
            res.json({error: 'Internal Server Error'});
        } else {
            res.json(result)
        }
    })
}

const getIdJasa = (req, res) => {
    const id = req.params.id;
    jasaModel.getIdJasa(id, (err, results) => {
        if(err){
            console.log(err);
            res.status(500).json({err : 'Internal Server Error'})
        } else {
            if (results.length === 0) {
                res.status(404).json({ error: 'Data not found' });
            } else {
                res.json(results[0]); // Mengirimkan data tanpa objek berlapis
            }
        }
    })
}

module.exports = {
    getJasa,
    getIdJasa
}
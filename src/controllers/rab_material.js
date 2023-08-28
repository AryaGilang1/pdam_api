const materialModel = require('../models/rab_material');

const getMaterial = (req, res) => {
    materialModel.getAllMaterial((err, results) => {
        if(err){
            console.log(err);
            res.status(500).json({error : 'Internal Server Error'})
        } else {
            res.json(results);
        }
    })
}

const getIdMaterial = (req, res) => {
    const id = req.params.id;
    materialModel.getIdMaterial(id, ( err, result) => {
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
    getMaterial,
    getIdMaterial
}
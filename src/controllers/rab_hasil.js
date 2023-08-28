const hasilModel = require('../models/rab_hasil');

const getHasilRole3 = (req, res) => {
    hasilModel.getAllHasilRole3((err, results) => {
        if(err){
            console.log(err)
            res.status(500).json({error: 'Internal Server Error'})
        }else {
            res.json(results);
        }
    })
}

const getByIdHasilRole3 = (req, res) => {
    const id = req.params.id;
    hasilModel.getByIdHasilRole3(id, (err, results) => {
        if(err){
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        } else {
            if(results.length === 0){
                console.log(err);
                res.status(404).json({error: 'Not Found'});
            } else {
                res.json(results[0]);
            }
        }
    });
}

const postDataRole3 = (req, res) => {
    const data = req.body;
    hasilModel.postHasil(data, (err, results) => {
        if(err){
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
            return;
        } else {
            res.status(200).json({success: 'Data Saved Successfully'});
        }
    });
}

const deleteDataRole3 = (req, res) => {
    const id = req.params.id;
    hasilModel.deleteDataRole3(id, (err, result) => {
        if(err){
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }else{
            res.status(200).json({success: 'Data Deleted Successfully'});
        }
    })
}
const updateData = (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    hasilModel.updateDataRole3(id, updateData, (err, result) => {
        if (err) {
            console.error('Error updating item:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Item updated successfully' });
        }
    });
};


module.exports = {
    getHasilRole3,
    getByIdHasilRole3,
    postDataRole3,
    deleteDataRole3,
    updateData
}
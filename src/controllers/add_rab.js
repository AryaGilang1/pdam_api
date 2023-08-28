const rabModels = require('../models/add_rab');

const getAllRab = (req, res) => {
    rabModels.getAllRab((err, results) => {
        if(err){
            console.log(err);
            res.status(500).json({error : 'Invalid Connection'})
        } else {
            res.json(results);
        }
    })
}

const getRabById = (req, res) => {
    const id = req.params.id;
    rabModels.getIdRab(id, (err, result) => {
        if(err){
            console.log(err);
            res.status(500).json({error : 'Invalid Get Data'});
        } else {
            if(result.length === 0){
                res.status(404).json({error : 'Data not found'})
            } else {
                res.json(result[0]);
            }
        }
    })
}

const postRab = (req, res) => {
    const data = req.body; 
  rabModels.postDataRab(data, (err, result) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).json({ error: 'Error saving data.' });
      return;
    }
    res.status(200).json({ message: 'Data saved successfully.' });
  });
}

const deleteRab = (req, res) => {
    const id = req.params.id;
    rabModels.deleteDataRab(id, (err, result) => {
        if(err){
            console.log(err);
            res.status(500).json({ error: 'Error delete data.' });
        }
        res.status(200).json({message : 'Data delete successfully.'});
    })
}

const updateData = (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    rabModels.putDataRab(id, updateData, (err, result) => {
        if (err) {
            console.error('Error updating item:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Item updated successfully' });
        }
    });
};


module.exports = {postRab, getAllRab, getRabById, deleteRab, updateData}
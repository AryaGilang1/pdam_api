const addModel = require('../models/add_data_role2');

const getAllRoleDua = (req, res) => {
  addModel.getAllRoleDua((err, result) => {
    if(err){
      console.log(err);
      res.status(500).json({error : 'Invalid Server Connection'})
    }
    res.json(result);
  })
}

const getByIdRoleDua = (req, res) => {
  const id = req.params.id
  addModel.getByIdRoleDua(id, (err, result) => {
    if(err){
      console.log(err);
      res.status(500).json({error : 'Internal Server Connection'});
    } else{
      if(result.length === 0){
        res.status(404).json({error : 'Data not found'})
    } else {
        res.json(result[0]);
    }
    }
  })
}

const postData = (req, res) => {
    const data = req.body; 
  addModel.postDataRoleDua(data, (err, result) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).json({ error: 'Error saving data.' });
      return;
    }
    res.status(200).json({ message: 'Data saved successfully.' });
  });
}

const updateData = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  addModel.updateDataRole2(id, data, (err, result) => {
    if (err) {
      console.error('Error updating data:', err);
      res.status(500).json({ error: 'Error updating data.' });
      return;
    }
    res.status(200).json({ message: 'Data updated successfully.' });
  });
}

const deleteData = (req, res) => {
  const id = req.params.id;
  addModel.deleteDataRole2(id, (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      res.status(500).json({ error: 'Error deleting data.' });
      return;
    }
    res.status(200).json({ message: 'Data deleted successfully.' });
  });
}

module.exports = {
  getAllRoleDua,
  getByIdRoleDua,
  postData,
  updateData,
  deleteData
}
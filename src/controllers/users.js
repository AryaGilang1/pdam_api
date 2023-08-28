const userModel = require('../models/users')
const express = require('express')
const router = express.Router();
router.apiKeyMiddleware = require('../middleware/api-key-middleware');


const getUser = (req, res) => {
  userModel.getAllModel((err, result) => {
    if(err){
      console.log(err)
      res.status(500).json({error: 'Internal Server Error'})
    } else {
      res.json(result);
    }
  })
}

const usersLogin = (req, res) => {
  const {username, pass} = req.body;
  userModel.postUsersLogin(username, pass, (err, result) => {
    if (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    } else {
        if (result.length === 1) { // Periksa dengan === 1 bukan > 1
            const role = result[0].role; // Gunakan result bukan results
            res.json({ message: 'Success', role: role });
            console.log('sukses');
            console.log(role);
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
        console.log(result);
    }
});

}


module.exports = {
  getUser,
  usersLogin
}
const express = require('express')
let router = express.Router()
const AdminController = require('../Controller/AdminController')

router.get('/getStatus', AdminController.getStatus);

router.post('/restock', AdminController.restock);

router.post('/changePrice', AdminController.changePrice);

module.exports = router;
const express = require('express')
let router = express.Router()
const AdminController = require('../Controller/AdminController')

router.get('/getStatus', AdminController.getStatus);

router.post('/changeStock', AdminController.changeStock);

router.post('/changePrice', AdminController.changePrice);

router.post('/updateInventory', AdminController.updateInventory);

router.post('/deleteSoda', AdminController.deleteSoda);

module.exports = router;
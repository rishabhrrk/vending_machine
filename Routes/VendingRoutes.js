const express = require('express')
let router = express.Router()
const VendingController = require('../Controller/VendingController')

router.get('/getStatus', VendingController.getStatus);

router.post('/purchased', VendingController.purchased);

module.exports = router;
const express = require('express');
const router = express.Router();
const apis = require('./apis.js');

router.post("/createCase",apis.createCase);
router.post("/sendSensorData",apis.sendSensorData);
module.exports = router;

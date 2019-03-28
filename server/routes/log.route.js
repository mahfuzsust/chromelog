const express = require('express');
const router = express.Router();

const log_controller = require('../controllers/log.controller');

router.post('/insert', log_controller.log_insert);

module.exports = router;

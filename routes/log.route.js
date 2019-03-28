const express = require('express');
const router = express.Router();

const log_controller = require('../controllers/log.controller');

router.post('/insert', log_controller.log_insert);
router.get('/:email', log_controller.get_top_logs);

module.exports = router;

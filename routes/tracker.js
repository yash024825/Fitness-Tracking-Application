const express = require('express');
const router = express.Router();
const { saveActivity, getRecent } = require('../controllers/trackerController');
router.post('/save', saveActivity);
router.get('/recent/:userId', getRecent);
module.exports = router;
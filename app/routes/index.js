const express = require('express');
const router = express.Router();
const { getAllHousesController } = require('../controllers/housesController');

router.get('/houses', getAllHousesController);

module.exports = router;

const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');


router.get('/catalogo', catalogController.getCatalog);

module.exports = router;

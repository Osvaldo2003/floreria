const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

// Ruta para obtener todos los productos
router.get('/', catalogController.getProducts);

module.exports = router;

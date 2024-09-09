const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Ruta para obtener todos los pedidos
router.get('/', pedidoController.getPedidos);

// Ruta para crear un nuevo pedido
router.post('/', pedidoController.createPedido);

module.exports = router;

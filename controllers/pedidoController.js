const Pedido = require('../models/pedido');

// Obtener todos los pedidos
exports.getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();  // Busca todos los pedidos en la base de datos
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener pedidos', error });
  }
};

// Crear un nuevo pedido
exports.createPedido = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Validar que el producto y la cantidad sean correctos
    if (!productId || !quantity) {
      return res.status(400).json({ message: 'Producto y cantidad son requeridos' });
    }

    // Crear un nuevo pedido
    const nuevoPedido = await Pedido.create({ productId, quantity });
    res.status(201).json({ message: 'Pedido creado exitosamente', pedido: nuevoPedido });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear pedido', error });
  }
};

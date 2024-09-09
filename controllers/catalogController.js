const Product = require('../models/product');

// Obtener todos los productos disponibles
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();  // Busca todos los productos en la base de datos
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

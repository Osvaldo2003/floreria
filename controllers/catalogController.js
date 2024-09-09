const Product = require('../models/product');


exports.getCatalog = async (req, res) => {
  try {
    const products = await Product.find(); 
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el catálogo de productos' });
  }
};

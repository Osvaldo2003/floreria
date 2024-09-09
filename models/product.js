const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Definir el modelo de Producto
const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Product;

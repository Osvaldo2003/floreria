const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Definir el modelo de Pedido
const Pedido = sequelize.define('Pedido', {
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Pedido;

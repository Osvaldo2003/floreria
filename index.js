const express = require('express');
const app = express();
const catalogRoutes = require('./routes/catalogRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const db = require('./config/db');

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/catalogo', catalogRoutes);
app.use('/pedidos', pedidoRoutes);

// Conectar a la base de datos
db.authenticate()
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.log('Error al conectar a la base de datos:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

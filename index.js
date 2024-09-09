const express = require('express');
const connectDB = require('./config/db');
const catalogRoutes = require('./routes/catalogRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();

connectDB();


app.use(express.json());

app.use('/api', catalogRoutes);
app.use('/api', pedidoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));

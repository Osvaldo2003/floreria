exports.createPedido = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    if (product.stock < quantity) {
      return res.status(400).json({ message: 'Stock insuficiente' });
    }

    const newPedido = new Pedido({
      productId,
      quantity
    });

 
    product.stock -= quantity;
    await product.save();

    await newPedido.save();
    res.status(201).json(newPedido);
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    res.status(500).json({ message: 'Error al crear el pedido' });
  }
};

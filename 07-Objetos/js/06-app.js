const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
      medidas: {
        peso: "1kg",
        medida: "1metro",
      },
      fabricacion: {
        pais: "china",
      },
    },
  };
  
  console.log(producto.informacion.fabricacion.pais);

  const { informacion: {fabricacion: {pais}} } = producto;
  console.log(pais);
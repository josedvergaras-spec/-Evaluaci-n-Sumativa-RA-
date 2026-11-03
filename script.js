const productos = [
    { nombre: "Bolsa de tela reutilizable", categoria: "Hogar", precio: 4.50, descripcion: "Algodón orgánico, resistente y lavable.", imagen: "https://w-static-p.extui..." },
    { nombre: "Pajillas de acero inoxidable", categoria: "Hogar", precio: 5.00, descripcion: "Set de 4 con cepillo de limpieza.", imagen: "https://m.media-amazon.com/imag..." },
    { nombre: "Envoltorios de cera de abeja", categoria: "Hogar", precio: 8.00, descripcion: "Reemplazan al plástico film, reutilizables.", imagen: "https://www.ubu.es/si..." },
    { nombre: "Esponja de luffa natural", categoria: "Hogar", precio: 2.50, descripcion: "Para lavar platos, 100% compostable.", imagen: "https://www.fairzerowaste.com/cdn/shop..." },
    { nombre: "Detergente ecológico", categoria: "Hogar", precio: 6.75, descripcion: "Biodegradable, sin fosfatos.", imagen: "https://www.biodegradablesecuador.com/wp-conte..." },
    { nombre: "Frasco de almacenamiento", categoria: "Hogar", precio: 3.50, descripcion: "Ideal para almacenar granos y especias.", imagen: "https://www.boyaca.com/wp-content/t..." },
    { nombre: "Compostera de cocina", categoria: "Hogar", precio: 15.00, descripcion: "Recipiente con filtro para residuos orgánicos.", imagen: "https://encrypted-tbn0.gstat..." },
    { nombre: "Velas de soya", categoria: "Hogar", precio: 7.00, descripcion: "Aroma natural, cera vegetal.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tb..." },
    { nombre: "Cepillo de limpieza de bambú", categoria: "Hogar", precio: 3.25, descripcion: "Cerdas naturales para trastes y verduras.", imagen: "https://encrypted-tbn0.gstatic.co..." },
    { nombre: "Botella reutilizable", categoria: "Hogar", precio: 12.00, descripcion: "Acero inoxidable, mantiene la temperatura.", imagen: "https://media.revistavanityfair..." },
    { nombre: "Cepillo de dientes de bambú", categoria: "Cuidado personal", precio: 2.00, descripcion: "Biodegradable, cerdas suaves.", imagen: "https://m.media-amazon.com/images/..." },
    { nombre: "Shampoo sólido", categoria: "Cuidado personal", precio: 6.50, descripcion: "Sin plástico, con aceites naturales.", imagen: "https://tequieroverde.com.e..." },
    { nombre: "Jabón artesanal de avena", categoria: "Cuidado personal", precio: 3.00, descripcion: "Suave para pieles sensibles.", imagen: "https://artesanalsoapec.com/assets/..." },
    { nombre: "Desodorante natural", categoria: "Cuidado personal", precio: 5.50, descripcion: "Sin aluminio, aroma cítrico.", imagen: "https://tequieroverde.com.ec/wp-con..." },
    { nombre: "Discos desmaquillantes lavables", categoria: "Cuidado personal", precio: 4.00, descripcion: "Set de 7 de algodón reutilizables.", imagen: "https://encrypted-tbn0.gstati..." },
    { nombre: "Bálsamo labial de cacao", categoria: "Cuidado personal", precio: 2.75, descripcion: "Hidratante, empaque de cartón.", imagen: "https://pub-ed96616ad25d44d98cc37..." },
    { nombre: "Crema corporal de coco", categoria: "Cuidado personal", precio: 8.50, descripcion: "Hidratación profunda, ingredientes naturales.", imagen: "https://lasfraganc..." },
    { nombre: "Peine de madera", categoria: "Cuidado personal", precio: 4.25, descripcion: "Antiestático, hecho a mano.", imagen: "https://img.kwcdn.com/product/Fancy..." },
    { nombre: "Copa menstrual", categoria: "Cuidado personal", precio: 14.00, descripcion: "Silicona médica, reutilizable por años.", imagen: "https://sp-ao.shortpixel..." },
    { nombre: "Hilo dental biodegradable", categoria: "Cuidado personal", precio: 3.75, descripcion: "De seda natural, en frasco de vidrio.", imagen: "https://encrypted-tbn0.gst..." }
];
// 2. Referencias a los elementos del DOM
const inputBuscador = document.getElementById('buscador');
const contenedorCatalogo = document.getElementById('catalogo-productos');
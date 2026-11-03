const productos = [
  { nombre: "Bolsa de tela reutilizable", categoria: "Hogar", precio: 4.50,
    descripcion: "Algodón orgánico, resistente y lavable.", imagen: "https://w-static-p.extuid.com/174-large_default/bolsos-ecologicos-biodegradables-de-cambrela.jpg", alt: "Bolsa de tela beige reutilizable" },
  { nombre: "Pajillas de acero inoxidable", categoria: "Hogar", precio: 5.00,
    descripcion: "Set de 4 con cepillo de limpieza.", imagen: "https://m.media-amazon.com/images/I/71ueyIFJVeL._AC_UF350,350_QL80_.jpg", alt: "Set de pajillas de acero inoxidable" },
  { nombre: "Envoltorios de cera de abeja", categoria: "Hogar", precio: 8.00,
    descripcion: "Reemplazan al plástico film, reutilizables.", imagen: "https://www.ubu.es/sites/default/files/events/images/envoltorio-cera-de-abeja.jpg", alt: "Envoltorios de cera de abeja para alimentos" },
  { nombre: "Esponja de luffa natural", categoria: "Hogar", precio: 2.50,
    descripcion: "Para lavar platos, 100% compostable.", imagen: "https://www.fairzerowaste.com/cdn/shop/files/7_67623510-3e19-4908-bbbc-642672ff4ef3.jpg?v=1761140105&width=2048", alt: "Esponja de luffa natural" },
  { nombre: "Detergente ecológico", categoria: "Hogar", precio: 6.75,
    descripcion: "Biodegradable, sin fosfatos.", imagen: "https://www.biodegradablesecuador.com/wp-content/uploads/2021/05/ChatGPT-Image-12-ago-2025-15_32_20-3.jpg", alt: "Botella de detergente ecológico" },
  { nombre: "Frasco de vidrio con tapa", categoria: "Hogar", precio: 3.50,
    descripcion: "Ideal para almacenar granos y especias.", imagen: "https://www.boyaca.com/wp-content/themes/boyaca/vista/imagenes/graf_zoom/97909-1.jpg?v=1695158200", alt: "Frasco de vidrio con tapa hermética" },
  { nombre: "Compostera de cocina", categoria: "Hogar", precio: 15.00,
    descripcion: "Recipiente con filtro para residuos orgánicos.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhwj6r_LmydMB_iH2ulyiUDeg8bQ7FSkkjMdDlu9pS2OkAwx5UrbV_CM&s=10", alt: "Compostera pequeña para cocina" },
  { nombre: "Velas de soya", categoria: "Hogar", precio: 7.00,
    descripcion: "Aroma natural, cera vegetal.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsN1qOLPUkdurtAGOvvKNhDHO7hEiNeoRS7fw1YvXDre8jiD0naxA-PQs&s=10", alt: "Vela de soya en frasco" },
  { nombre: "Cepillo de limpieza de bambú", categoria: "Hogar", precio: 3.25,
    descripcion: "Cerdas naturales para trastes y verduras.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymsly9inqQ_hn7YxRTvDH9_di_6nXZyBCw0FZK_Dw42dBbMxBajNIJ8s&s=10", alt: "Cepillo de limpieza con mango de bambú" },
  { nombre: "Botella reutilizable", categoria: "Hogar", precio: 12.00,
    descripcion: "Acero inoxidable, mantiene la temperatura.", imagen: "https://media.revistavanityfair.es/photos/68480d270d54ae712dd2bea9/16:9/w_2560%2Cc_limit/GettyImages-1618713841.jpg", alt: "Botella de acero inoxidable reutilizable" },

  { nombre: "Cepillo de dientes de bambú", categoria: "Cuidado personal", precio: 2.00,
    descripcion: "Biodegradable, cerdas suaves.", imagen: "https://m.media-amazon.com/images/I/51rgormSEGL._AC_UF1000,1000_QL80_.jpg", alt: "Cepillo de dientes de bambú" },
  { nombre: "Shampoo sólido", categoria: "Cuidado personal", precio: 6.50,
    descripcion: "Sin plástico, con aceites naturales.", imagen: "https://tequieroverde.com.ec/wp-content/uploads/2023/04/3sh.jpg", alt: "Barra de shampoo sólido" },
  { nombre: "Jabón artesanal de avena", categoria: "Cuidado personal", precio: 3.00,
    descripcion: "Suave para pieles sensibles.", imagen: "https://artesanalsoapec.com/assets/img/optimized/story-artesanal-soap.webp", alt: "Jabón artesanal de avena" },
  { nombre: "Desodorante natural", categoria: "Cuidado personal", precio: 5.50,
    descripcion: "Sin aluminio, aroma cítrico.", imagen: "https://tequieroverde.com.ec/wp-content/uploads/2020/12/lule-deso-e1736352409894.jpeg", alt: "Desodorante natural en crema" },
  { nombre: "Discos desmaquillantes lavables", categoria: "Cuidado personal", precio: 4.00,
    descripcion: "Set de 7 de algodón reutilizables.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhsmzM96XCgDRCKuRgI88yvZ2aG2lgTSgzoCRDReHduRqGd0YuXg_OFyI&s=10", alt: "Discos desmaquillantes de tela" },
  { nombre: "Bálsamo labial de cacao", categoria: "Cuidado personal", precio: 2.75,
    descripcion: "Hidratante, empaque de cartón.", imagen: "https://pub-ed96616ad25d44d98cc375304ed6f73a.r2.dev/2025/06/7861223810912-1-2-1.png", alt: "Bálsamo labial de cacao" },
  { nombre: "Crema corporal de coco", categoria: "Cuidado personal", precio: 8.50,
    descripcion: "Hidratación profunda, ingredientes naturales.", imagen: "https://lasfragancias.vtexassets.com/arquivos/ids/159980/KAO-0583-Frontal.jpg?v=637988839754800000", alt: "Frasco de crema corporal de coco" },
  { nombre: "Peine de madera", categoria: "Cuidado personal", precio: 4.25,
    descripcion: "Antiestático, hecho a mano.", imagen: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c7e89af4786fa720220fb1223658a06a.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp", alt: "Peine de madera" },
  { nombre: "Copa menstrual", categoria: "Cuidado personal", precio: 14.00,
    descripcion: "Silicona médica, reutilizable por años.", imagen: "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://arnottginecologos.com/wp-content/uploads/bfi_thumb/copa-mentrual-como-usar-3bxagk2sqwb99kgyondkhs.jpg", alt: "Copa menstrual de silicona" },
  { nombre: "Hilo dental biodegradable", categoria: "Cuidado personal", precio: 3.75,
    descripcion: "De seda natural, en frasco de vidrio.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgMiLKjUN_IFgC0qMtmeBEkz_mdwHe6Sz3FXZhaTZllOM6jmEspuTaOg8&s=10", alt: "Hilo dental biodegradable en frasco" }
];
productos.forEach((p, i) => p.id = i + 1);

const contenedor = document.getElementById("productos");
const buscador = document.getElementById("buscador");
const filtro = document.getElementById("filtro");
const sinResultados = document.getElementById("sin-resultados");

function mostrarProductos(lista) {
  contenedor.innerHTML = "";
  sinResultados.classList.toggle("d-none", lista.length > 0);
  lista.forEach(p => {
    contenedor.insertAdjacentHTML("beforeend", `
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <img src="${p.imagen}" class="card-img-top img-producto" alt="${p.alt}" loading="lazy">
          <div class="card-body">
            <span class="badge text-bg-success mb-2">${p.categoria}</span>
            <h3 class="card-title h5">${p.nombre}</h3>
            <p class="card-text">${p.descripcion}</p>
            <p class="fw-bold">$${p.precio.toFixed(2)}</p>
          </div>
          <div class="card-footer bg-transparent border-0 pb-3">
            <button type="button" class="btn btn-success w-100 btn-agregar" data-id="${p.id}">
              🛒 Agregar al carrito
            </button>
          </div>
        </div>
      </div>`);
  });
}

function filtrarProductos() {
  const texto = buscador.value.toLowerCase().trim();
  const categoria = filtro.value;
  const resultado = productos.filter(p =>
    p.nombre.toLowerCase().includes(texto) &&
    (categoria === "todas" || p.categoria === categoria)
  );
  mostrarProductos(resultado);
}

buscador.addEventListener("input", filtrarProductos);
filtro.addEventListener("change", filtrarProductos);
mostrarProductos(productos);

contenedor.addEventListener("click", (e) => {
  const boton = e.target.closest(".btn-agregar");
  if (!boton) return;

  const producto = productos.find(p => p.id === Number(boton.dataset.id));
  if (!producto) return;

  window.agregarAlCarrito(producto.id, producto.nombre, producto.precio);

  boton.textContent = "✔ Agregado";
  boton.disabled = true;
  setTimeout(() => {
    boton.textContent = "🛒 Agregar al carrito";
    boton.disabled = false;
  }, 800);
});

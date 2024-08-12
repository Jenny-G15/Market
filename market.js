const contenedorProduct= document.getElementById("containerProductos")
const visualizarCarrito = document.getElementById ("visualizarCarrito")
const contenedorModal = document.getElementById("contenedorModal")

const productos = [
    { id: 1, nombre: "Gorra", price: 5000, img: "img/gorras.jpg"},
    { id: 2, nombre: "Sueter", price: 12000,img:"img/sueter.jpg"},
    { id: 3, nombre: "Llavero", price: 3000, img:"img/llavero.jpg"},
    { id: 4, nombre: "Peluche",price: 8000, img:"img/peluche.jpg"},
    { id: 5, nombre: "Crocs",price: 20000, img: "img/crocs.jpg"},
    {id: 6, nombre: "Vaso",price: 15000, img:"img/vasos.jpg"},
]

let carrito = []


document.addEventListener("DOMContentLoaded", () => {
  const storedCarrito = localStorage.getItem('carrito');
  if (storedCarrito) {
      carrito = JSON.parse(storedCarrito);
      console.log(carrito); 
   
  }
})

productos.forEach((producto) =>{
    let conten = document.createElement("div");
    conten.className = "tarjetas"
    conten.innerHTML = `
    <img src=${producto.img} alt="aqui va una imagen">
    <h3>${producto.nombre}</h3>
    <p>₡${producto.price}</p>
    `;
 
    contenedorProduct.append(conten);


    let Comprar = document.createElement("button")
    Comprar.innerText = "Añadir al carrito"
    Comprar.className = "Comprar"

     conten.append(Comprar);

     Comprar.addEventListener("click", () => {
        carrito.push({
            id: producto.id,
            img: producto.img,
            nombre: producto.nombre,
            price: producto.price,

        })
        localStorage.setItem('carrito', JSON.stringify(carrito)); 
        console.log(carrito);   
     })
});

visualizarCarrito.addEventListener("click" ,() => {
    contenedorModal.innerHTML = "";
    contenedorModal.style.display = "block";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal"
    modalHeader.innerHTML = `
         <h1>Mis Productos</h1>
    `;

    contenedorModal.append(modalHeader);

    const modalButton = document.createElement("h1")
    modalButton.innerText = "X";
    modalButton.className = "modal-button";

    modalButton.addEventListener("click", () =>{
      contenedorModal.style.display = "none";
    })

    modalHeader.append(modalButton);


    carrito.forEach((producto) => {
       let containerCarrito = document.createElement("div");
       let buttonEliminar = document.createElement("button")
       buttonEliminar.className = "buttonEliminar"
       buttonEliminar.innerHTML = "😒"
       containerCarrito.className = "containerCarrito";
       containerCarrito.innerHTML = `
         <img src=${producto.img} alt="aqui va una imagen">
         <h3>${producto.nombre}</h3>
         <p>₡${producto.price}</p>
       `;

       contenedorModal.append(buttonEliminar);
       contenedorModal.append(containerCarrito);
       
    })

     const total = carrito.reduce((acc, descrip) => acc + descrip.price, 0);
    
    const totalidad = document.createElement("div")
    totalidad.className = "totalPrecio";
    totalidad.innerHTML = `Su total es: ₡ ${total}`;
    contenedorModal.append(totalidad);
    
})

   








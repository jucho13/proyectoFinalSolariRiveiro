// const url = "https://harry-potter-api.onrender.com/personajes"

// fetch(url)
//     .then((res) => res.json())
//     .then((personajes) => {
//         console.log(personajes);
//         const container=document.querySelector("#container-items");
//         personajes.forEach((element) => {
//             const card = document.createElement("div");
//             card.innerHTML = `
//                 <div class="card col-4" style="width: 18rem;">
//                     <img src="${element.imagen}" class="card-img-top" alt="${element.apodo}">
//                     <div class="card-body">
//                         <h5 class="card-title">${element.personaje}</h5>
//                         <p class="card-text">${element.interpretado_por}</p>
//                     </div>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">Apodo: ${element.apodo}</li>
//                         <li class="list-group-item">${element.casaDeHogwarts}</li>
//                         <li class="list-group-item">Precio $1000</li>
//                     </ul>
//                     <div class="card-body">
//                         <button type="button" id="btnCompra" class="btn btn-primary">Comprar</button>
//                     </div>
//                 </div>
//             `;
//             const containerCards = document.querySelector("#cards");
//             containerCards.append(card);
//         });
//     })
// const btnCarrito=document.querySelector("#btnClickCarrito");
// console.log(btnCarrito);
// let total=0;
// const botonesCompra = document.querySelectorAll("#btnCompra");
// botonesCompra.forEach((boton) => {
//     boton.onclick = () => {
//         total++;
//         sumaStock();
//         sumaNumeros();
//         agregaCarrito(personajes);
//     };
// });

// let container=document.querySelector("#container-items");
// function mostrarTotal(total)
// {
//     container.innerText=``;
//    for (i=0;i<carrito.length;i++)
//    {
//         if(carrito[i].id==personajes.id)
//         {
//             const card = document.createElement("div");
//             card.innerHTML = `
//                 <div class="card col-4" style="width: 18rem;">
//                     <img src="${element.imagen}" class="card-img-top" alt="${element.apodo}">
//                     <div class="card-body">
//                         <h5 class="card-title">${element.personaje}</h5>
//                         <p class="card-text">${element.interpretado_por}</p>
//                     </div>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">Apodo: ${element.apodo}</li>
//                         <li class="list-group-item">${element.casaDeHogwarts}</li>
//                         <li class="list-group-item">Cantidad=${carrito.cantidad}</li>
//                         <li class="list-group-item">Subtotal= ${carrito.cantidad*1000}</li>
//                     </ul>
//                 </div>
//             `;
//             containerCards.append(card);

//         }
//    }
//    let totalCompra=document.createElement("h4");
//    container.innerText=`El TOTAL de su compra es de ${total*1000}`
// }

// btnCarrito.addEventListener("click", mostrarTotal(total));



// class ObjCarrito{
//     constructor(id, cant){
//         this.id = id; 
//         this.cantidad = cant;
//     }
//     sumaStock(){
//         this.cantidad = this.cantidad + 1 
//     }
// }
// function sumaNumeros()
// {
//     let botonCarrito1=document.querySelector("#carritoNavBar");
//     let botonCarrito2=document.querySelector("#btnClickCarrito");
//     console.log(botonCarrito1);
//     botonCarrito1.innerText=`${carrito.length}`;
//     botonCarrito2.innerText=`CARRITO[${carrito.length}]`;
// }
// //---------------------------------------------------------------------
// const carrito=[];
// function agregaCarrito(prod){
//     let existeEnCarrito = carrito.find(e => e.id == prod) // 
//  //Si el find devuelve un valor, el producto ya estaba en carrito --> Hay que sumar stock
//  //si el find devuelve undefined, es que no lo encontró --> hay que instanciarlo
//  if (existeEnCarrito != undefined){
//      //Si entra acá, es porque encontró el objeto en cuestión en el carrito
//      let posicion = carrito.findIndex(elem => elem.id == existeEnCarrito.id);
     
//  }else{
//      //Si entra acá, es porque el método find devolvió undefined por no haber encontrado coincidencia.
//      const alCarrito = new ObjCarrito(prod, 1)
//      carrito.push(carrito);
//      console.table(carrito);
//  }
// }
// const bodyContainer=document.getElementById("container-items");
// console.log(bodyContainer);
// function totalFuncion(total,bodyContainer){
//     const parrafo = document.createElement("div");
//     parrafo.innerText = `El total de su compra con IVA es ${total}`;
//     parrafo.className = "total";
//     bodyContainer.appendChild(parrafo);
// }

// btnCarrito.onclick = () => 
// {
//     let nombreProdCarrito;
//     let posicionProd;
//     let subTotal;
//     let total=0;
//     let subTotalProducto=[];
//     for(i=0;i<carrito.length;i++)
//     {
//         subTotal=0;
//         nombreProdCarrito=carrito[i].producto;
//         console.log(nombreProdCarrito);
//         posicionProd=productos.indexOf(nombreProdCarrito);
//         console.log(posicionProd);
//         console.log(carrito[i].cantidad);
//         for(j=0;j<carrito[i].cantidad;j++)
//         {
//             total=total + productos[posicionProd].sumaIva();
//             console.log(productos[posicionProd].sumaIva());
//         }
//         subTotalProducto.push(subTotal);
//     };
// bodyContainer.innerHTML=(``);
// carrito.forEach(producto=>
//     {
//         const div = document.createElement("div");
//         div.className="item";
//         div.innerHTML=`<h2> Nombre: ${productos.nombre}</h2>
//                         <h2> Cantidad: ${carrito.cantidad}</h2>
//                         <p class="price">$ ${productos.precio}</p>`;
//         bodyContainer.append(div);
//     });
// totalFuncion(total,bodyContainer);
// }
// const url = "https://harry-potter-api.onrender.com/personajes"

// fetch(url)
//     .then((res) => res.json())
//     .then((personajes) => {
//         console.log(personajes);
//         const container=document.querySelector("#container-items");
//         personajes.forEach((element) => {
//             const card = document.createElement("div");
//             card.innerHTML = `
//                 <div class="card col-4" style="width: 18rem;">
//                     <img src="${element.imagen}" class="card-img-top" alt="${element.apodo}">
//                     <div class="card-body">
//                         <h5 class="card-title">${element.personaje}</h5>
//                         <p class="card-text">${element.interpretado_por}</p>
//                     </div>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">Apodo: ${element.apodo}</li>
//                         <li class="list-group-item">${element.casaDeHogwarts}</li>
//                         <li class="list-group-item">Precio $1000</li>
//                     </ul>
//                     <div class="card-body">
//                         <button type="button" id="btnCompra" class="btn btn-primary">Comprar</button>
//                     </div>
//                 </div>
//             `;
//             const containerCards = document.querySelector("#cards");
//             containerCards.append(card);
//         });
//     })

// const btnCarrito=document.querySelector("#btnClickCarrito");
// console.log(btnCarrito);
// let total=0;
// const botonesCompra = document.querySelectorAll("#btnCompra");
// botonesCompra.forEach((boton) => {
//     boton.onclick = () => {
//         total++;
//         sumaStock();
//         sumaNumeros();
//         agregaCarrito(personajes);
//     };
// });

// let container=document.querySelector("#container-items");
// function mostrarTotal(total)
// {
//     container.innerText=``;
//    for (i=0;i<carrito.length;i++)
//    {
//         if(carrito[i].id==personajes.id)
//         {
//             const card = document.createElement("div");
//             card.innerHTML = `
//                 <div class="card col-4" style="width: 18rem;">
//                     <img src="${element.imagen}" class="card-img-top" alt="${element.apodo}">
//                     <div class="card-body">
//                         <h5 class="card-title">${element.personaje}</h5>
//                         <p class="card-text">${element.interpretado_por}</p>
//                     </div>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">Apodo: ${element.apodo}</li>
//                         <li class="list-group-item">${element.casaDeHogwarts}</li>
//                         <li class="list-group-item">Cantidad=${carrito.cantidad}</li>
//                         <li class="list-group-item">Subtotal= ${carrito.cantidad*1000}</li>
//                     </ul>
//                 </div>
//             `;
//             containerCards.append(card);

//         }
//    }
//    let totalCompra=document.createElement("h4");
//    container.innerText=`El TOTAL de su compra es de ${total*1000}`
// }

// btnCarrito.addEventListener("click", mostrarTotal(total));

// class ObjCarrito{
//     constructor(id, cant){
//         this.id = id; 
//         this.cantidad = cant;
//     }
//     sumaStock(){
//         this.cantidad = this.cantidad + 1 
//     }
// }

// Fetch the data from the API
const url = "https://harry-potter-api.onrender.com/personajes";
fetch(url)
  .then((res) => res.json())
  .then((personajes) => {
    // Once the data is fetched, loop through each character and create a card
    const containerCards = document.querySelector("#cards");
    personajes.forEach((element) => {
      const card = document.createElement("div");
      card.innerHTML = `
        <div class="card col-4" style="width: 18rem;">
          <img src="${element.imagen}" class="card-img-top" alt="${element.apodo}">
          <div class="card-body">
            <h5 class="card-title">${element.personaje}</h5>
            <p class="card-text">${element.interpretado_por}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Apodo: ${element.apodo}</li>
            <li class="list-group-item">${element.casaDeHogwarts}</li>
            <li class="list-group-item">Precio $1000</li>
          </ul>
          <div class="card-body">
            <button type="button" id="btnCompra${element.id}" class="btn btn-primary">Comprar</button>
          </div>
        </div>
      `;
      containerCards.append(card);

      // Add an event listener to each "Comprar" button
      const boton = document.querySelector(`#btnCompra${element.id}`);
      boton.onclick = () => {
        // When a button is clicked, add the character to the cart
        agregaCarrito(element);
      };
    });
  });

// Define a cart array to store the items added to the cart
const carrito = [];

// Define a function to add an item to the cart
function agregaCarrito(item) {
  // Check if the item is already in the cart
  const index = carrito.findIndex((x) => x.id === item.id);
  if (index !== -1) {
    // If the item is already in the cart, increment its quantity
    carrito[index].cantidad++;
  } else {
    // If the item is not in the cart, add it with a quantity of 1
    carrito.push(new ObjCarrito(item.id, 1));
  }

  // Update the cart summary in the UI
  mostrarTotal();
}

function mostrarTotal(total) {
    container.innerHTML = "";
    let subtotal = 0;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].cantidad > 0) {
            const card = document.createElement("div");
            card.innerHTML = `
                <div class="card col-4" style="width: 18rem;">
                    <img src="${carrito[i].imagen}" class="card-img-top" alt="${carrito[i].apodo}">
                    <div class="card-body">
                        <h5 class="card-title">${carrito[i].personaje}</h5>
                        <p class="card-text">${carrito[i].interpretado_por}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Apodo: ${carrito[i].apodo}</li>
                        <li class="list-group-item">${carrito[i].casaDeHogwarts}</li>
                        <li class="list-group-item">Cantidad = ${carrito[i].cantidad}</li>
                        <li class="list-group-item">Subtotal = ${carrito[i].cantidad *1000}</li>
                    </ul>
                </div>
            `;
            container.append(card);
            subtotal += carrito[i].cantidad * 1000;
        }
    }
    const totalCompra = document.createElement("h4");
    totalCompra.innerText = `El TOTAL de su compra es de ${subtotal}`;
    container.append(totalCompra);
}


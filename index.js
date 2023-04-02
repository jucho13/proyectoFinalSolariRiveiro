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
const url = "https://harry-potter-api.onrender.com/personajes"
const containerCards = document.querySelector("#cards");

for(let i=0; i<=22;i++) {
  fetch(url)
    .then((res) => res.json())
    .then(data => mostrarPersonajes(data,i));
}

function mostrarPersonajes(data,i) {
  const div=document.createElement("div");
  div.classList.add("personaje");
  div.innerHTML=`
  <div class="card col-4" style="width: 18rem;">
    <img src="${data[i].imagen}" class="card-img-top" alt="${data[i].apodo}">
    <div class="card-body">
      <h5 class="card-title">${data[i].personaje}</h5>
      <p class="card-text">${data[i].interpretado_por}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Apodo: ${data[i].apodo}</li>
      <li class="list-group-item">${data[i].casaDeHogwarts}</li>
      <li class="list-group-item">Precio $1000</li>
    </ul>
    <div class="card-body">
      <button type="button" id="btnCompra${data[i].id}" class="btn-primary">Comprar</button>
    </div>
  </div>
  `;
  containerCards.append(div);

  // Agrega el evento click al botón dentro de cada elemento creado
  const boton = document.querySelector(`#btnCompra${data[i].id}`);
  boton.addEventListener("click", () => {
    agregaCarrito(data[i]);
  });
}

const carrito = [];

class ObjCarrito {
  constructor(id, cant) {
    this.id = id;
    this.cantidad = cant;
  }

  sumaStock() {
    this.cantidad = this.cantidad + 1;
  }
}

function agregaCarrito(item) {
  let existeEnCarrito = carrito.find((x) => x.id == item.id);
  console.log(existeEnCarrito);
  const index = carrito.findIndex((x) => x.id == item.id);
  if (existeEnCarrito != undefined) {
    carrito[index].sumaStock();
  } else {
    carrito.push(new ObjCarrito(item.id, 1));
  }
  console.table(carrito);
}function calcularTotalCarrito() {
  let total = 0;
  carrito.forEach(item => {
    total += item.cantidad * 1000;
  });
  return total;
}
const btnCarrito = document.querySelector("#btnClickCarrito");
const container = document.querySelector("#container-items");

btnCarrito.addEventListener("click", () => {
  mostrarCarrito();
});

function mostrarCarrito() {
  const total = calcularTotalCarrito();
  container.innerHTML = "";
  carrito.forEach((item) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="card col-4" style="width: 18rem;">
        <img src="${item.imagen}" class="card-img-top" alt="${item.apodo}">
        <div class="card-body">
          <h5 class="card-title">${item.personaje}</h5>
          <p class="card-text">${item.interpretado_por}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Apodo: ${item.apodo}</li>
          <li class="list-group-item">${item.casaDeHogwarts}</li>
          <li class="list-group-item">Cantidad = ${item.cantidad}</li>
          <li class="list-group-item">Subtotal = ${item.cantidad * 1000}</li>
        </ul>
      </div>
    `;
    container.append(card);
  });
  const totalCompra = document.createElement("h2");
  totalCompra.innerText = `El TOTAL de su compra es de ${total}`;
  container.append(totalCompra);
}

function calcularTotalCarrito() {
  let total = 0;
  carrito.forEach((item) => {
    total += item.cantidad * 1000;
  });
  return total;
}


// let container=document.querySelector("#container-items");
// btnCarrito=document.querySelector("#btnClickCarrito");
// // console.log(container);
// btnCarrito.addEventListener("click", () => {
//   let total=calcularTotalCarrito();
//   container.innerHTML="";
//   for (let i = 0; i < carrito.length; i++) {
//       const card = document.createElement("div");
//       card.innerHTML = `
//           <div class="card col-4" style="width: 18rem;">
//              <img src="${carrito[i].imagen}" class="card-img-top" alt="${carrito[i].apodo}">
//             <div class="card-body">
//               <h5 class="card-title">${carrito[i].personaje}</h5>
//               <p class="card-text">${carrito[i].interpretado_por}</p>
//             </div>
//             <ul class="list-group list-group-flush">
//               <li class="list-group-item">Apodo: ${carrito[i].apodo}</li>
//               <li class="list-group-item">${carrito[i].casaDeHogwarts}</li>
//               <li class="list-group-item">Cantidad = ${carrito[i].cantidad}</li>
//               <li class="list-group-item">Subtotal = ${carrito[i].cantidad *1000}</li>
//             </ul>
//           </div>
//         `;
//         container.append(card);
//     }
//     const totalCompra = document.createElement("h2");
//     totalCompra.innerText = `El TOTAL de su compra es de ${total}`;
//     container.append(totalCompra);
//   }
// );

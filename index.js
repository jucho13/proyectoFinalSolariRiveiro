
const url = "https://harry-potter-api.onrender.com/personajes"
const containerCards = document.querySelector("#cards");

for(let i=0; i<=22;i++) {
  fetch(url)
    .then((res) => res.json())
    .then(data => mostrarPersonajes(data,i));
}
function mostrarPersonajes(data,i) {
  const divPadre=document.createElement("div");
  const div=document.createElement("div");
  div.classList.add("card");
  div.innerHTML=`
  <div class="card col-4" style="width: 18rem;">
    <img src="${data[i].imagen}" class="card-img-top" alt="${data[i].apodo}">
    <div class="card-body">
      <h5 class="card-title">#${data[i].id} ${data[i].personaje}</h5>
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
  containerCards.append(divPadre);
  containerCards.appendChild(div);

  const boton = document.querySelector(`#btnCompra${data[i].id}`);

  boton.addEventListener("click", () => {
    Toastify({
      text: "Agregado al carrito",
      duration: 6000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
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
const carritoNavBar=document.querySelector("#carritoNavBar");
const btnClickCarrito=document.querySelector("#btnClickCarrito");
function agregaCarrito(item) {
  let producto=JSON.stringify(item);
  let existeEnCarrito = carrito.find((x) => x.id == item.id);
  console.log(existeEnCarrito);
  const index = carrito.findIndex((x) => x.id == item.id);
  if (existeEnCarrito != undefined) {
    carrito[index].sumaStock();
    carritoNavBar.innerHTML=carrito.length;
    btnClickCarrito.innerHTML=`CARRITO[${carrito.length}]`;
  } else {
    carrito.push(new ObjCarrito(item.id, 1));
    localStorage.setItem("producto",producto);
    carritoNavBar.innerHTML=carrito.length;
    btnClickCarrito.innerHTML=`CARRITO[${carrito.length}]`;
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
        <div class="card-body">
          <h5 class="card-title">ID=${item.id}</h5>
        </div>
        <ul class="list-group list-group-flush">
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


const carrito = document.querySelector(".carrito")
let idCarrito = document.querySelector("#carrito")
let eliminar = document.querySelectorAll(".eliminar")
let agregar = document.querySelectorAll(".agregar")
const totalcarrito = document.querySelector("#tot-carrito")
let elementosCarrito = document.querySelector("#elementos_carrito")

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };// FUNCION PARA GUARDAR DATOS EN LOCALSTORAGE 

const cargarProductos = (array,para) => { 
    let tabla = ""
    if (array.length > 0 ) {
        array.forEach((produc) => {
            tabla += armarTabla(produc)
        })
    }
    para.innerHTML = tabla
    agregar = document.querySelectorAll(".agregar")
    agregar.forEach(el => {
        el.addEventListener("click", (e) => {
            agregarACarrito(e.target.id)
        });
    })
}

const cargarCarrito = (array,para) => {
    let tabla = ""
    if (array.length > 0 ) {
        array.forEach((produc) => {
            tabla += armarCarrito(produc)
        })
    }
    para.innerHTML = tabla
    eliminar = document.querySelectorAll(".eliminar")
    eliminar.forEach(el => {
        el.addEventListener("click", (e) => {
            eliminarDeCarrito(e.target.id)
        });
    })
}

function eliminarDeCarrito(id){ //FUNCION PARA ELIMINAR PRODUCTOS AL CARRITO
    let productoEncontrado = carritoJS.find(prod => prod.id === parseInt(id))
    carritoJS = carritoJS.filter((item) => item !== productoEncontrado)
    if (carritoJS.length > 0) {
        cargarCarrito(carritoJS,elementosCarrito)
        guardarLocal("listaProductos", JSON.stringify(carritoJS));
        totalcarrito.innerText = totalCarrito(carritoJS)
    }else {
        ocul = document.querySelector(".ocultarTot").style.display = "none"
        cargarCarrito(carritoJS,elementosCarrito)
        guardarLocal("listaProductos", JSON.stringify(carritoJS));
        let carritoVacio = document.createElement(`h2`)
        carritoVacio.innerHTML = 
        `<p class="centrar">El carrito de compras está vacío.</p>`
        idCarrito.appendChild(carritoVacio)
        ocu = document.querySelector(".scrols").style.display = "none"
    }
}

function totalCarrito (array) { // FUNCION TOTAL DE CARRITO
    let total = 0
    for (const producto of array) {
        total += producto.precio;
    }
    return total
}

carritoJS = JSON.parse(localStorage.getItem("listaProductos"))//DATOS DE LOCALSTORAGE
if (carritoJS.length > 0) {
    cargarCarrito(carritoJS,elementosCarrito)
    totalCarrito(carritoJS)
    totalcarrito.innerText = totalCarrito(carritoJS)
    let comprar = document.querySelector(".ocultarTot")
    const div1 = document.createElement("div");
    div1.innerHTML = '<a class="btn btn-dark" href="./formulario_compra.html" role="button">COMPRAR</a>'
    comprar.append(div1)

}else {
    ocul = document.querySelector(".ocultarTot").style.display = "none"
    let carritoVacio = document.createElement(`h2`)
    carritoVacio.innerHTML = 
    `<p class="centrar">El carrito de compras está vacío.</p>`
    idCarrito.appendChild(carritoVacio)
    ocu = document.querySelector(".scrol").style.display = "none"
}
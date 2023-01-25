
                                //VARIABLES//
let filt = document.querySelector("#filtro")
const inputSearch = document.querySelector(".busqueda")
const buscar = document.querySelector("#buscar")
let agregar = document.querySelectorAll(".agregar")
const carrito = document.querySelector(".carrito")
const contenedorMujer = document.querySelector("#contenedor_mujer")
const contenedorHombre = document.querySelector("#contenedor_hombre")
const contenedorAccesorios = document.querySelector("#contenedor_accesorios")
const contenedorDeportes = document.querySelector("#contenedor_deportes")
const contenedorCalzado = document.querySelector("#contenedor_calzado")
const cant_prod = document.querySelector("#cant_prod")
let eliminar = document.querySelectorAll(".eliminar")
let productos1 = []
let carritoJS = []


const pedirPosts = async () => {
    const resp = await fetch("./js/data.json")
    const data = await resp.json()
   
    let productosMujer = data.filter(produc => produc.categoria === "MUJER")
    productosMujer.forEach((produc) => {
        const div = document.createElement("div");
        div.setAttribute("class","contenedor");
        div.innerHTML = 
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
          </svg></button>
            <img src="${produc.img}" >
            <a href="#" class="nombre_producto">${produc.nombre}</a>
            <a href="#" class="precio"><br>$${produc.precio}</a>`
        contenedorMujer.append(div) 
    });
    let productosHombre = data.filter(produc => produc.categoria === "HOMBRE")
    productosHombre.forEach((produc) => {
        const div = document.createElement("div");
        div.setAttribute("class","contenedor");
        div.innerHTML = 
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
          </svg></button>
            <img src="${produc.img}" >
            <a href="#" class="nombre_producto">${produc.nombre}</a>
            <a href="#" class="precio"><br>$${produc.precio}</a>`
        contenedorHombre.append(div) 
        });
    let productosAccesorios = data.filter(produc => produc.categoria === "ACCESORIOS")
    productosAccesorios.forEach((produc) => {
        const div = document.createElement("div");
        div.setAttribute("class","contenedor");
        div.innerHTML = 
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
          </svg></button>
            <img src="${produc.img}" >
            <a href="#" class="nombre_producto">${produc.nombre}</a>
            <a href="#" class="precio"><br>$${produc.precio}</a>`
        contenedorAccesorios.append(div) 
        });
    let productosCalzado = data.filter(produc => produc.categoria ==="CALZADO")
    productosCalzado.forEach((produc) => {
        const div = document.createElement("div");
        div.setAttribute("class","contenedor");
        div.innerHTML = 
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
          </svg></button>
            <img src="${produc.img}" >
            <a href="#" class="nombre_producto">${produc.nombre}</a>
            <a href="#" class="precio"><br>$${produc.precio}</a>`
        contenedorCalzado.append(div) 
        });
    let productosDeportes = data.filter(produc => produc.categoria === "DEPORTES")
    productosDeportes.forEach((produc) => {
        const div = document.createElement("div");
        div.setAttribute("class","contenedor");
        div.innerHTML = 
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
          </svg></button>
            <img src="${produc.img}" >
            <a href="#" class="nombre_producto">${produc.nombre}</a>
            <a href="#" class="precio"><br>$${produc.precio}</a>`
        contenedorDeportes.append(div) 
        });
    let agregar1 = document.querySelectorAll(".agregar")
    agregar1.forEach(el => {
        el.addEventListener("click", (e) => {
            agregarACarrito(e.target.id)
        });
    })
}
pedirPosts()

const armarTabla = (prod) => {
    return `<div class="contenedor" id="espacio">
                <button type="button" id="${prod.id}" class="agregar btn btn-dark btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
              </svg></button>
                <img src="${prod.img}" >
                <a href="#" class="nombre_producto">${prod.nombre}</a>
                <a href="#" class="precio"><br>$${prod.precio}</a>
            </div>`
}

const armarCarrito = (prod) => {
    return `<div class="contenedor" id="espacio">
                <button type="button" id="${prod.id}" class="eliminar btn btn-danger btn-sm">eliminar</button>
                <img src="${prod.img}" >
                <a href="#" class="nombre_producto">${prod.nombre}</a>
                <a href="#" class="precio"><br>$${prod.precio}</a>
            </div>`
}

if (carritoJS && carritoJS.length > 0) {
    cant_prod.innerText = carritoJS.length
}else {
    cant_prod.innerText = 0
}

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };// FUNCION PARA GUARDAR DATOS EN LOCALSTORAGE 

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

const filtrado = (parametro) => { //FUNCION DE FILTRADO DE PRODUCTOS 
    let resultados =  []
    if (parametro != "" ) {
        fetch("./js/data.json")
            .then((res) => res.json())
            .then((data) => {
                resultados = data.filter(produ => produ.nombre.includes(parametro) || produ.color.includes(parametro))
                if (resultados.length > 0) {
                    cargarProductos(resultados,filt)
                }
            }); 
    } 
}

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


let productosCarrito = []
function agregarACarrito(id){ //FUNCION PARA AGREGAR PRODUCTOS AL CARRITO
    fetch("./js/data.json")
        .then((res) => res.json())
        .then((data) => {
            let productoEncontrado = data.find(prod => prod.id === parseInt(id))
            if ((productosCarrito.some((el) => el.id == productoEncontrado.id)) || (carritoJS && carritoJS.some((el) => el.id == productoEncontrado.id))){
                productosCarrito.map(el => el.cantidad += 1)
            }else {
                productosCarrito.push(productoEncontrado)
            }
            if (carritoJS) {
                guardarLocal("listaProductos",JSON.stringify(productosCarrito.concat(carritoJS)));
            }else {
                guardarLocal("listaProductos",JSON.stringify(productosCarrito))
            }
            
        }); 
        
}


buscar.addEventListener("click",(e) => {
    e.preventDefault()
    let parametro = inputSearch.value.trim().toUpperCase()
    const ocultar = document.querySelector(".ocultar").style.display = "none";
    filtrado (parametro)
})

function totalCarrito (array) { // FUNCION TOTAL DE CARRITO
    let total = 0
    for (const producto of array) {
        total += producto.precio;
    }
    return total
}

carritoJS = JSON.parse(localStorage.getItem("listaProductos"))//DATOS DE LOCALSTORAGE


const ShowSelected = () =>
{
    let resultados =  []
    let resultados1 = []
    fetch("./js/data.json")
        .then((res) => res.json())
        .then((data) => {
            let categ = document.getElementsByClassName("categ")[0].id
            let filtr = document.querySelector(".categ")
            let selected = filtr.options[filtr.selectedIndex].text.toUpperCase()
            resultados = data.filter(produ => produ.categoria === categ )
            resultados1 = resultados.filter(produ =>produ.nombre.includes(selected))
            if (resultados1.length > 0) {
                const ocultar = document.querySelector(".ocultar").style.display = "none";
                cargarProductos(resultados1,filt)
            }
        }); 
}

let filtr = document.querySelector(".categ")
filtr.addEventListener("change", () => {
    ShowSelected()
});

const ShowOrd = () =>
{   
    let ord = document.querySelector(".ordenamiento").value
    switch(ord) {
        case "1":
            fetch("./js/data.json")
                .then((res) => res.json())
                .then((data) => {
                    let categ = document.getElementsByClassName("ordenamiento")[0].id
                    resultados = data.filter(produ => produ.categoria === categ )
                    resultados1 = resultados.sort((a, b) => a.precio - b.precio);  
                    if (resultados1.length > 0) {
                        const ocultar = document.querySelector(".ocultar").style.display = "none";
                        cargarProductos(resultados1,filt)
                    }
            })
            break;
        case "2":
            fetch("./js/data.json")
                .then((res) => res.json())
                .then((data) => {
                    let categ = document.getElementsByClassName("ordenamiento")[0].id
                    resultados = data.filter(produ => produ.categoria === categ )
                    resultados1 = resultados.sort((a, b) => b.precio - a.precio  );  
                    if (resultados1.length > 0) {
                        const ocultar = document.querySelector(".ocultar").style.display = "none";
                        cargarProductos(resultados1,filt)
                    }
            })
            break;
        case "3":
            fetch("./js/data.json")
                .then((res) => res.json())
                .then((data) => {
                    let categ = document.getElementsByClassName("ordenamiento")[0].id
                    resultados = data.filter(produ => produ.categoria === categ )
                    resultados1 = resultados.sort((a, b) => a.nombre < b.nombre);  
                    if (resultados1.length > 0) {
                        const ocultar = document.querySelector(".ocultar").style.display = "none";
                        cargarProductos(resultados1,filt)
                    }
            })
            break;
        case "4":
            fetch("./js/data.json")
                .then((res) => res.json())
                .then((data) => {
                    let categ = document.getElementsByClassName("ordenamiento")[0].id
                    resultados = data.filter(produ => produ.categoria === categ )
                    resultados1 = resultados.sort((a, b) => b.nombre < a.nombre  );  
                    if (resultados1.length > 0) {
                        const ocultar = document.querySelector(".ocultar").style.display = "none";
                        cargarProductos(resultados1,filt)
                    }
            })
            break;
        default:
            break;
    }
}

let orden = document.querySelector(".ordenamiento")
orden.addEventListener("change", () => {
    ShowOrd()
});
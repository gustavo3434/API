
                                //VARIABLES//
let filt = document.querySelector("#filtro")
const inputSearch = document.querySelector(".busqueda")
const buscar = document.querySelector("#buscar")
let agregar = document.querySelectorAll(".agregar")
const carrito = document.querySelector(".carrito")
let idCarrito = document.querySelector("#carrito")
const totalcarrito = document.querySelector("#tot-carrito")
let elementosCarrito = document.querySelector("#elementos_carrito")
const contenedorMujer = document.querySelector("#contenedor_mujer")
const contenedorHombre = document.querySelector("#contenedor_hombre")
const contenedorAccesorios = document.querySelector("#contenedor_accesorios")
const contenedorDeportes = document.querySelector("#contenedor_deportes")
const contenedorCalzado = document.querySelector("#contenedor_calzado")
let eliminar = document.querySelectorAll(".eliminar")
let carritoJS = []
let productos1 = []

  fetch("./js/data.json")
  .then((res) => res.json())
  .then((data) => {
    let productosMujer = data.filter(produc => produc.categoria === "MUJER")
    productosMujer.forEach((produc) => {
        const div = document.createElement("div");
        div.setAttribute("class","contenedor");
        div.innerHTML = 
        
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">+</button>
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
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">+</button>
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
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">+</button>
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
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">+</button>
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
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">+</button>
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
  }); 
  /*fetch("./js/data.json")
  .then((res) => res.json())
  .then((data) => {
    let productosHombre = data.filter(produc => produc.categoria === "HOMBRE")
    productosHombre.forEach((produc) => {
        const div = document.createElement("div");
        div.setAttribute("class","contenedor");
        div.innerHTML = 
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">+</button>
            <img src="${produc.img}" >
            <a href="#" class="nombre_producto">${produc.nombre}</a>
            <a href="#" class="precio"><br>$${produc.precio}</a>`
        contenedorHombre.append(div) 
    });
    let agregar2 = document.querySelectorAll(".agregar")
    agregar2.forEach(el => {
        el.addEventListener("click", (e) => {
            agregarACarrito(e.target.id)
        });
    })
  }); 

  fetch("./js/data.json")
  .then((res) => res.json())
  .then((data) => {
    let productosAccesorios = data.filter(produc => produc.categoria === "ACCESORIOS")
    productosAccesorios.forEach((produc) => {
        const div = document.createElement("div");
        div.setAttribute("class","contenedor");
        div.innerHTML = 
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">+</button>
            <img src="${produc.img}" >
            <a href="#" class="nombre_producto">${produc.nombre}</a>
            <a href="#" class="precio"><br>$${produc.precio}</a>`
        contenedorAccesorios.append(div) 
    });
    let agregar3 = document.querySelectorAll(".agregar")
    agregar3.forEach(el => {
        el.addEventListener("click", (e) => {
            agregarACarrito(e.target.id)
        });
    })
  }); 

  fetch("./js/data.json")
  .then((res) => res.json())
  .then((data) => {
    let productosCalzado = data.filter(produc => produc.categoria === "CALZADO")
    productosCalzado.forEach((produc) => {
        const div = document.createElement("div");
        div.setAttribute("class","contenedor");
        div.innerHTML = 
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">+</button>
            <img src="${produc.img}" >
            <a href="#" class="nombre_producto">${produc.nombre}</a>
            <a href="#" class="precio"><br>$${produc.precio}</a>`
        contenedorCalzado.append(div) 
    });
    let agregar4 = document.querySelectorAll(".agregar")
    agregar4.forEach(el => {
        el.addEventListener("click", (e) => {
            agregarACarrito(e.target.id)
        });
    })
  }); 
  
  fetch("./js/data.json")
  .then((res) => res.json())
  .then((data) => {
    let productosDeportes = data.filter(produc => produc.categoria === "DEPORTES")
    productosDeportes.forEach((produc) => {
        const div = document.createElement("div");
        div.setAttribute("class","contenedor");
        div.innerHTML = 
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">+</button>
            <img src="${produc.img}" >
            <a href="#" class="nombre_producto">${produc.nombre}</a>
            <a href="#" class="precio"><br>$${produc.precio}</a>`
        contenedorDeportes.append(div) 
    });
    let agregar5 = document.querySelectorAll(".agregar")
    agregar5.forEach(el => {
        el.addEventListener("click", (e) => {
            agregarACarrito(e.target.id)
        });
    })
  });*/

const armarTabla = (prod) => {
    return `<div class="contenedor" id="espacio">
                <button type="button" id="${prod.id}" class="agregar btn btn-dark btn-sm">+</button>
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

const filtrado = () => { //FUNCION DE FILTRADO DE PRODUCTOS 
    let parametro = inputSearch.value.trim().toUpperCase()
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

/*agregar.forEach(el => {
    el.addEventListener("click", (e) => {
        agregarACarrito(e.target.id)
    });
})*/

let productosCarrito = []
function agregarACarrito(id){ //FUNCION PARA AGREGAR PRODUCTOS AL CARRITO
    fetch("./js/data.json")
        .then((res) => res.json())
        .then((data) => {
            let productoEncontrado = data.find(prod => prod.id === parseInt(id))
        if(carritoJS.some((el) => el.id == productoEncontrado.id)){
            productosCarrito.map(el => el.cantidad += 1)
        } else{
            productosCarrito.push(productoEncontrado)
        }
        guardarLocal("listaProductos",JSON.stringify(productosCarrito.concat(carritoJS)));
        }); 
        
        
}


buscar.addEventListener("click",(e) => {
    e.preventDefault()
    const ocultar = document.querySelector(".ocultar").style.display = "none";
    filtrado ()
})

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
}else {
    ocul = document.querySelector(".ocultarTot").style.display = "none"
    let carritoVacio = document.createElement(`h2`)
    carritoVacio.innerHTML = 
    `<p class="centrar">El carrito de compras está vacío.</p>`
    idCarrito.appendChild(carritoVacio)
    ocu = document.querySelector(".scrol").style.display = "none"
}

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
const cantidad = document.querySelector("#cant_prod")
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
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">Agregar</button>
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
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">Agregar</button>
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
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">Agregar</button>
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
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">Agregar</button>
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
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">Agregar</button>
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
    if (carritoJS && carritoJS.length > 0) {
        cantidad.innerText = carritoJS.length
    }else {
       cantidad.innerText = productosCarrito.length
    }
    
}
pedirPosts()

const armarTabla = (prod) => {
    return `<div class="contenedor" id="espacio">
                <button type="button" id="${prod.id}" class="agregar btn btn-dark btn-sm">Agregar</button>
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
        `<p class="centrar">El carrito de compras est?? vac??o.</p>`
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
                cantidad.innerText = carritoJS.length
            }else {
                guardarLocal("listaProductos",JSON.stringify(productosCarrito))
                cantidad.innerText = productosCarrito.length
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
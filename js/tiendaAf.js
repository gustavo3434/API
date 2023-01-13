                            //ARRAY DE PRODUCTOS//
const productos = [{id: 1,nombre:"GORRA ELEMENT WOLFEBORO",color: "NEGRO", precio: 11999, img:"./multimedia/accsesorios/gorra_element.jpg"},
{id: 2,nombre:"MOCHILA ZIMITH BOMBIT", color: "ROSA",precio: 15000, img: "./multimedia/accsesorios/mochila_zimith.jpg"},
{id: 3,nombre:"GORRO C1RCA WALTER", color: "ROJO",precio: 10000, img: "./multimedia/accsesorios/gorro_c1rca.jpg" },
{id: 4,nombre:"RELOJ CAPTAIN FIN HURRICANE", color: "VERDE",precio: 31500, img:"./multimedia/accsesorios/reloj_captainFin.jpg"  },
{id: 5,nombre:"GORRO BILLABONG ARCADE", color: "NEGRO",precio: 6500, img:"./multimedia/accsesorios/gorro_billabong.jpg"  },
{id: 6,nombre:"CINTO ZIMITH CUERO MARS", color: "MARRON",precio: 3500, img:"./multimedia/accsesorios/cinto_zimith.jpg"},
{id: 7,nombre:"MOCHILA ZIMITH MAXIC", color: "AZUL",precio: 13500, img:"./multimedia/accsesorios/MOCHILA_ZIMITH_MAXIC.jpg" },
{id: 8,nombre:"GORRA ZIMITH FOMU", color: "GRIS",precio: 7500, img:"./multimedia/accsesorios/GORRA_ZIMITH_FOMU.jpg"  },
{id: 9,nombre:"ZAPATILLAS NIKE SB JANOSKI", color: "NEGRO",precio: 21999, img:"./multimedia/calzado/nike_janoski_negra.jpg" },
{id: 10,nombre:"ZAPATILLAS ADIDAS CONTINEN", color: "BLANCO",precio: 29999, img:"./multimedia/calzado/adidas_blancas.jpg" },
{id: 11,nombre:"ZAPATILLAS VANS BMX SLIP-ON", color: "GRIS",precio: 24499, img:"./multimedia/calzado/vans_bmx.jpg" },
{id: 12,nombre:"ZAPATILLAS NEW BALANCE 574", color: "CREMA",precio: 36399, img:"./multimedia/calzado/newBalance_mujer.jpg" },
{id: 13,nombre:"ZAPATILLAS RUSTY ANDREUSS", color: "NEGRO",precio: 17999, img:"./multimedia/calzado/rusty_negras.jpg" },
{id: 14,nombre:"ZAPATILLAS LACOSTE T-POINT", color: "BLANCO",precio: 40300, img:"./multimedia/calzado/lacoste_blanca_hombre.jpg" },
{id: 15,nombre:"ZAPATILLAS VANS ULTRA RANGE", color: "NEGRO",precio: 29000, img: "./multimedia/calzado/ZAPATILLAS_VANS_ULTRA_RANGE.jpg"},
{id: 16,nombre:"ZAPATILLAS RUSTY FAIRFAX", color: "NEGRO",precio: 19000, img:"./multimedia/calzado/ZAPATILLAS_RUSTY_FAIRFAX.jpg"},
{id: 17,nombre:"MONOPATIN COBRA", color: "GRIS",precio: 39000, img:"./multimedia/deportes/monopatin_cobra.jpg" },
{id: 18,nombre:"BICICLETA BMX", color: "BLANCO",precio: 199000, img:"./multimedia/deportes/bicicleta_bmx.jpg" },
{id: 19,nombre:"SKATE FREE VIBE", color: "VIOLETA",precio: 59000, img:"./multimedia/deportes/skate_freeVibe.jpg" },
{id: 20,nombre:"TABLA CAPTAIN FIN", color: "ROSA",precio: 49000, img:"./multimedia/deportes/tabla_captainFin_rosa.jpg" },
{id: 21,nombre:"ROLLERS START", color: "GRIS",precio: 39000, img:"./multimedia/deportes/rollers_start.jpg" },
{id: 22,nombre:"SKATE PROGRESSIVE", color: "AMARILLO",precio: 69000, img:"./multimedia/deportes/skate_progressive.jpg" },
{id: 23,nombre:"PATINES ARTISTICOS STARK", color: "BLANCO",precio: 35000, img:"./multimedia/deportes/PATINES_ARTISTICOS_STARK.jpg" },
{id: 24,nombre:"TABLA SKATE REE VIBE", color: "ROSA",precio: 45000, img:"./multimedia/deportes/TABLA_SKATE_FREE_VIBE.jpg" },
{id: 25,nombre:"REMERA ONEILL MONTREAL", color: "BLANCO",precio: 5000, img:"./multimedia/hombre/remera_oneil.jpg" },
{id: 26,nombre:"BUZO VULK", color: "negro",precio: 15000, img:"./multimedia/hombre/buzo_vulk.jpg" },
{id: 27,nombre:"CAMPERA ELEMENT SENDA", color: "VERDE",precio: 17000, img:"./multimedia/hombre/campera_element.jpg" },
{id: 28,nombre:"REMERA C1RCA OUTLINE", color: "BLANCO",precio: 7000, img:"./multimedia/hombre/remera_blanca.jpg" },
{id: 29,nombre:"PANTALON CHAMPION", color: "NARANJA",precio: 15000, img:"./multimedia/hombre/pantalon_champions.jpg" },
{id: 30,nombre:"PANTALON JOGGER CAPTAIN FIN", color: "NEGRO",precio: 13000, img:"./multimedia/hombre/pantalonJogger_captainFin.jpg"  },
{id: 31,nombre:"REMERA VANS CORE BASIC", color: "BLANCO",precio: 8000, img:"./multimedia/hombre/REMERA_VANS_CORE_BASIC.jpg" },
{id: 32,nombre:"JOGGING RUSTY CLASSIC", color: "AZUL",precio: 16000, img:"./multimedia/hombre/JOGGING_RUSTY_CLASSIC.jpg" },
{id: 33,nombre:"CAMPERA CONVERSE INDIC", categoria:"MUJER" ,color: "BLANCO",precio: 16000, img:"./multimedia/mujer/campera_converse_blanca.jpg" },
{id: 34,nombre:"BUZO VANS CLASSIC", categoria:"MUJER" ,color: "GRIS",precio: 18000, img:"./multimedia/mujer/buzo_vans_gris.jpg" },
{id: 35,nombre:"BUZO ONEILL JACK",categoria:"MUJER" , color: "AMARILLO",precio: 14500, img:"./multimedia/mujer/buzo_oneill_amarillo.jpg" },
{id: 36,nombre:"JEAN BLANCO RIFLE ANCHO",categoria:"MUJER" , color: "AZUL",precio: 11000, img:"./multimedia/mujer/jean_rifle_ancho.jpg" },
{id: 37,nombre:"CAMPERA ELEMENT KIOTO",categoria:"MUJER" , color: "NEGRO",precio: 21000, img:"./multimedia/mujer/campera_element.jpg" },
{id: 38,nombre:"JOGGIN RUSTY FLOREADO", color: "AZUL",precio: 12000, img:"./multimedia/mujer/joggin_rusty_floreado.jpg" },
{id: 39,nombre:"TOP CHECKS/CUADRILLE", categoria:"MUJER" ,color: "VERDE",precio: 9000, img:"./multimedia/mujer/TOP_CHECKS_CUADRILLE.jpg"},
{id: 40,nombre:"SHORT RUSTY HEARTBREAKER",categoria:"MUJER" ,color: "MARRON",precio: 10500, img:"./multimedia/mujer/SHORT_RUSTY_HEARTBREAKER.jpg"},
]
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
let productosMujer = productos.filter(produc => produc.categoria === "MUJER")
let eliminar = document.querySelectorAll(".eliminar")
let carritoJS = []
let productos1 = []


fetch("./js/data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((produc) => {
        const div = document.createElement("div");
        div.setAttribute("class","contenedor");
        div.innerHTML = 
            `<button type="button" id="${produc.id}" class="agregar btn        btn-dark btn-sm">+</button>
            <img src="${produc.img}" >
            <a href="#" class="nombre_producto">${produc.nombre}</a>
            <a href="#" class="precio"><br>$${produc.precio}</a>`;
        contenedorMujer.append(div);
    });
    agregar = document.querySelectorAll(".agregar")
        agregar.forEach(el => {
            el.addEventListener("click", (e) => {
                agregarACarrito(e.target.id) 
            });
        })
    
  }); 

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




let productosCarrito = []
function agregarACarrito(id){ //FUNCION PARA AGREGAR PRODUCTOS AL CARRITO
    fetch("./js/data.json")
        .then((res) => res.json())
        .then((data) => {
            let producs = data.results;
            let productoEncontrado = producs.find(prod => prod.id === parseInt(id))
        if(productosCarrito.some((el) => el.id == productoEncontrado.id)){
            productosCarrito.map(el => el.cantidad += 1)
        } else{
            productosCarrito.push(productoEncontrado)
            }
        }); 
        guardarLocal("listaProductos",JSON.stringify(productosCarrito.concat(carritoJS)));
        
}

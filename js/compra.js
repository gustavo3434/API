let confirmar = document.querySelector(".confirmar")
const nombre = document.querySelector(".nombre")
const apellido = document.querySelector(".apellido")

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };// FUNCION PARA GUARDAR DATOS EN LOCALSTORAGE 

confirmar.addEventListener("click",(e) => {
    swal({
        title: "Tieanda AF",
        text: nombre.value.trim()+ " "+apellido.value.trim()+" desea finalizar la compra?",
        buttons: true,
        dangerMode: true,
      })
      .then((will) => {
        function redireccionar(){window.location="./index.html";}
        if (will) {
          swal("La compra fue finalizada con exito, !GRACIAS POR ELEGIR TIENDA AF!", {
            icon: "success",
          })
          carritoJS = []
          guardarLocal("listaProductos", JSON.stringify(carritoJS));
          setTimeout (redireccionar, 1400);
        } else {
          swal("La compra fue cancelada");
          setTimeout (redireccionar, 1400);
        }
      });
      
})
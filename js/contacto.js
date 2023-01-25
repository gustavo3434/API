let enviar = document.querySelector(".enviar")
const nombre = document.querySelector(".nombre")
const apellido = document.querySelector(".apellido")

enviar.addEventListener("click",(e) => {
  e.preventDefault()
  swal({
    title: "Tieanda AF",
    text: nombre.value.trim().toUpperCase()+ " "+apellido.value.trim().toUpperCase()+" se envio con exito su Reclamo/Opinion, nos pondremos en contacto mediante el mail indicado",
  })
    function redireccionar(){window.location="./index.html";}
    setTimeout (redireccionar, 2900);
      
      
})



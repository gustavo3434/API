let enviar = document.querySelector(".enviar")
const nombre = document.querySelector(".nombre")
const apellido = document.querySelector(".apellido")
let motivo = document.querySelector(".motivo")
let selected = motivo.options[motivo.selectedIndex].text.

enviar.addEventListener("click",(e) => {
  e.preventDefault()
  swal({
    title: "Tieanda AF",
    text: nombre.value.trim()+ " "+apellido.value.trim()+" su "+selected+" se envio con exito, nos pondremos en contacto mediante el mail indicado",
    buttons: true,
    dangerMode: true,
  })
      
})



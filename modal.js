const modalAbrir = document.getElementById('modal-abrir')
const modalCerrar = document.getElementById('modal-cerrar')
const modalContainer = document.getElementsByClassName('modal-container')[0]
const modal = document.getElementsByClassName('modalcito')[0]
console.log("ModalCerrar", modalCerrar)
modalAbrir.addEventListener("click", () => {
    console.log("1")

    modalContainer.classList.add('modal-active')
     
})

modalCerrar.addEventListener("click", () => {
    console.log("laksd")
    modalContainer.classList.remove('modal-active')
})

modalContainer.addEventListener("click", () =>{
    modalContainer.classList.toggle('modal-active')

})

modal.addEventListener("click", (e) =>{
    e.stopPropagation() //HACE QUE EL MODAL NO SE CIERRE SI TOCA DENTRO DEL MODAL. SOLO SI TOCA FUERA.
})

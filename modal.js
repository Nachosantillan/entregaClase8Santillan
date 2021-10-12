const modalAbrir = document.getElementById('modal-abrir')
const modalCerrar = document.getElementById('modal-cerrar')
const modalContainer = document.getElementsByClassName('modal-container')[0]
const modal = document.getElementsByClassName('modal')[0]

modalAbrir.addEventListener("click", () => {
    modalContainer.classList.add('modal-active')
     
})

modalCerrar.addEventListener("click", () => {
    modalContainer.classList.remove('modal-active')
})

modalContainer.addEventListener("click", () =>{
    modalContainer.classList.toggle('modal-active')

})

modal.addEventListener("click", (e) =>{
    e.stopPropagation() //HACE QUE EL MODAL NO SE CIERRE SI TOCA DENTRO DEL MODAL. SOLO SI TOCA FUERA.
})
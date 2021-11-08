/* <div class="modal-container">
<div class="modal-abrir modalcito">
    <div><img class="imagenModal1" src="./IMAGENES/kita.png" alt=""></div>
    <div>VENI A DISFRUTAR A KITA</div>
    <div class="carritoCompras"><button class="buttonImagenModalcito" id="carrito-compras"><img src="./IMAGENES/carrito.jpg" alt=""></button></div>
    <div><button class="buttonModalcito" id="modal-cerrar">CERRAR</button></div>
</div>
</div> 

___________________________esto de arriba iria en el html_____________________________ */



const modalAbrir = document.getElementById('modal-abrir ')
const modalCerrar = document.getElementById('modal-cerrar')
const modalContainer = document.getElementsByClassName('modal-container')[0]
const modal = document.getElementsByClassName('modal')[0]

modalAbrir.addEventListener('click', () => {
    modalContainer.classList.add('modal-active')
    // modalContainer.classList.toggle('modal-active')
})

modalCerrar.addEventListener('click', () => {
    modalContainer.classList.remove('modal-active')
    // modalContainer.classList.toggle('modal-active')
})



modal.addEventListener('click', (e) =>{
    e.stopPropagation() 
})








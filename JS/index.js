
const arrayProductos=[
    {img: "../IMAGENES/CHAMPIONSLEAGUE.PNG",  nombre: "CHAMPIONS LEAGUE", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!", botonCerrarModal: "CERRAR"},
    {img: "../IMAGENES/CHE_DARLING.PNG",  nombre: "CHE DARLING", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!", botonCerrarModal: "CERRAR"},
    {img: "../IMAGENES/DONALD.PNG",  nombre: "DONAL'D", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!", botonCerrarModal: "CERRAR"},
    {img: "../IMAGENES/KITACLUB.PNG",  nombre: "KITA CLUB", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!", botonCerrarModal: "CERRAR"},
    {img: "../IMAGENES/RICKY_FORT.PNG",  nombre: "RICKY FORT", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!", botonCerrarModal: "CERRAR"},
    {img: "../IMAGENES/KRYPTONITA_C_B.PNG",  nombre: "KRYPTONIYA CON C&B", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!", botonCerrarModal: "CERRAR"},
    {img: "../IMAGENES/KRYPTONITA_PROVO.PNG",  nombre: "KRYPTONITA CON PROVO", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!", botonCerrarModal: "CERRAR"},
    {img: "../IMAGENES/LV.PNG",  nombre: "LAS VEGAS", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!", botonCerrarModal: "CERRAR"},
    {img: "../IMAGENES/LV_RELLENA.PNG",  nombre: "LAS VEGAS RELLENA", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!", botonCerrarModal: "CERRAR"},
    {img: "../IMAGENES/RED_HOT.PNG",  nombre: "RED HOT", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!", botonCerrarModal: "CERRAR"},
    {img: "../IMAGENES/TOM_CHERRY.PNG",  nombre: "TOM & CHERRY", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!", botonCerrarModal: "CERRAR"},
    {img: "../IMAGENES/VEGGIE.PNG",  nombre: "CONVERTÍ EN VEGGIE", precioSimple: 650, precioDoble: 740, botonComprar: "¡LA QUIERO!", botonCerrarModal: "CERRAR"},

]

const contenedorProductos = document.getElementById("productos")

arrayProductos.forEach((producto)=>{
    
    const div = document.createElement("div")
    div.className = "card-body styleCard mb-2 text-center"
    div.style = "max-width: 240px; max-height: 340px"

        
    div.innerHTML = `

                
                    <div>
                        <img src=${producto.img} class="card-img-top" style="border-color: white" alt="imagenHamburguesa">
                        <h5 class="card-title styleTitleCard">${producto.nombre}</h5>
                        <p class="card-text styleSubtitleCard">Precio simple: $ ${producto.precioSimple}</p>
                        <p class="card-text styleSubtitleCard"">Precio doble: $ ${producto.precioDoble}</p>
                        <button id="modal-abrir" class="buttonModalcito">${producto.botonComprar}</button>
                            <div class="modal-container">
                                    <div class="modal-active modalcito">
                                        <div><img class="imagenModal1" src="../IMAGENES/kita.png" alt=""></div>
                                        <div>VENI A DISFRUTAR A KITA</div>
                                        <div class="carritoCompras"><button class="buttonImagenModalcito" id="carrito-compras"><img src="../IMAGENES/carrito.jpg" alt=""></button></div>
                                        <div><button class="buttonModalcito" id="modal-cerrar">${producto.botonCerrarModal}</button></div>
                                    </div>
                            </div>
                            
                    </div>
                `


contenedorProductos.appendChild(div)

})







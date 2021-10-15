
const arrayProductos=[
    {img: "IMAGENES/CHAMPIONSLEAGUE.PNG",  nombre: "CHAMPIONS LEAGUE", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/CHE_DARLING.PNG",  nombre: "CHE DARLING", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/DONALD.PNG",  nombre: "DONAL'D", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/KITACLUB.PNG",  nombre: "KITA CLUB", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/RICKY_FORT.PNG",  nombre: "RICKY FORT", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/KRYPTONITA_C_B.PNG",  nombre: "KRYPTONIYA CON C&B", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/KRYPTONITA_PROVO.PNG",  nombre: "KRYPTONITA CON PROVO", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/LV.PNG",  nombre: "LAS VEGAS", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/LV_RELLENA.PNG",  nombre: "LAS VEGAS RELLENA", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/RED_HOT.PNG",  nombre: "RED HOT", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/TOM_CHERRY.PNG",  nombre: "TOM & CHERRY", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/VEGGIE.PNG",  nombre: "CONVERTÍ EN VEGGIE", precioSimple: 650, precioDoble: 740},

]


const contenedorProductos = document.getElementById("productos")



arrayProductos.forEach((producto)=>{
    
    const div = document.createElement("div")
    div.className = "cad-image-top"
    div.style = "min-width: 150px; max-width: 240px; min-height: 300px"
    
    div.innerHTML = `

                
                    <div class="card-body styleCard mb-2 text-center" style="text-align: center" >
                        <img src=${producto.img} class="card-img-top" style="border-color: white"| alt="...">
                        <h5 class="card-title styleTitleCard">${producto.nombre}</h5>
                        <p class="card-text styleSubtitleCard">Precio simple: $ ${producto.precioSimple}</p>
                        <p class="card-text styleSubtitleCard"">Precio doble: $ ${producto.precioDoble}</p>
                        
                        
                        
                        <button id="modal-abrir">Abrir modal</button>
                        <div class="modal-container ">
                            <div class="modalcito modal-active">
                                <div><img class="imagenModal1" src="kita.png" alt=""></div>
                                <div>VENI A DISFRUTAR A KITA</div>
                                <div class="carritoCompras"><button class="buttonImagenModalcito"><img src="carrito.jpg" alt=""></button></div>
                                <div><button class="buttonModalcito" id="modal-cerrar">Cerrar</button></div>

                            </div>
                        </div>


                    </div>
                `


contenedorProductos.appendChild(div)

})








const arrayProductos=[
    {img: "./IMAGENES/CHAMPIONSLEAGUE.PNG",  nombre: "CHAMPIONS LEAGUE", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/CHE_DARLING.PNG",  nombre: "CHE DARLING", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/DONALD.PNG",  nombre: "DONAL'D", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/KITACLUB.PNG",  nombre: "KITA CLUB", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/RICKY_FORT.PNG",  nombre: "RICKY FORT", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/KRYPTONITA_C_B.PNG",  nombre: "KRYPTONIYA CON C&B", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/KRYPTONITA_PROVO.PNG",  nombre: "KRYPTONITA CON PROVO", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/LV.PNG",  nombre: "LAS VEGAS", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/LV_RELLENA.PNG",  nombre: "LAS VEGAS RELLENA", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/RED_HOT.PNG",  nombre: "RED HOT", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/TOM_CHERRY.PNG",  nombre: "TOM & CHERRY", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/VEGGIE.PNG",  nombre: "CONVERTÍ EN VEGGIE", precioSimple: 650, precioDoble: 740, botonComprar: "¡LA QUIERO!"},

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
                            
                            
                    </div>
                `


contenedorProductos.appendChild(div)

})







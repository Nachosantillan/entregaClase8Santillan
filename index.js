
const arrayProductos=[
    {img: "IMAGENES/CHAMPIONSLEAGUE.PNG",  nombre: "CHAMPIONS LEAGUE", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/CHE_DARLING.PNG",  nombre: "CHE DARLING", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/DONALD.PNG",  nombre: "DONAL'D", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/KITACLUB.PNG",  nombre: "KITA CLUB", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/RICKY_FORT.PNG",  nombre: "RICKY FORT", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/KRYPTONITA_C_B.PNG",  nombre: "KRYPTONIYA CON C&B", precioSimple: 600, precioDoble: 690},
    {img: "IMAGENES/KRYPTONITA_PROVO.PNG",  nombre: "KRYPTONITA CON PROVOLETA", precioSimple: 600, precioDoble: 690},
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
    div.style = "width: 18rem"
    
    div.innerHTML = `
            <img src=${producto.img} class="card-img-top" style="border-color: white"| alt="...">
                <div class="card-body styleCard" style="border: 18px; align-items: center" >
                    <h5 class="card-title styleTitleCard">${producto.nombre}</h5>
                    <p class="card-text styleSubtitleCard">Precio simple: $ ${producto.precioSimple}</p>
                    <p class="card-text styleSubtitleCard"">Precio doble: $ ${producto.precioDoble}</p>
                    <a href="#" class="btn btn-light styleButtonCard">¡Quiero comprarla!</a>
                 </div>`
    
    contenedorProductos.appendChild(div)
    
})

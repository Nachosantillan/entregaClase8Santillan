
// arrayHamburguesas_________________________________________________________

const arrayHamburguesas=[
    {img: "./IMAGENES/CHAMPIONSLEAGUE.PNG", id:0,  nombre: "CHAMPIONS LEAGUE", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/CHE_DARLING.PNG", id:1,  nombre: "CHE DARLING", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/DONALD.PNG", id:2,  nombre: "DONALD", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/KITACLUB.PNG", id:3,  nombre: "KITA CLUB", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/RICKY_FORT.PNG", id:4,  nombre: "RICKY FORT", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/KRYPTONITA_C_B.PNG", id:5,  nombre: "KRYPTONIYA CON C&B", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/KRYPTONITA_PROVO.PNG", id:6,  nombre: "KRYPTONITA CON PROVO", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/LV.PNG", id:7,  nombre: "LAS VEGAS", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/LV_RELLENA.PNG", id:8,  nombre: "LAS VEGAS RELLENA", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/RED_HOT.PNG", id:9,  nombre: "RED HOT", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/TOM_CHERRY.PNG", id:10,  nombre: "TOM & CHERRY", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/VEGGIE.PNG", id:11,  nombre: "CONVERTÍ EN VEGGIE", precioSimple: 650, precioDoble: 740, botonComprar: "¡LA QUIERO!"},

]

const contenedorHamburguesas = document.getElementById("productos")

arrayHamburguesas.forEach((producto)=>{
    
    const div = document.createElement("div")
    div.className = "card-body styleCard mb-2 text-center"
    div.style = "max-width: 240px; max-height: 340px"

        
    div.innerHTML = `
    
    
    <div>
                        <img src=${producto.img} class="card-img-top" style="border-color: white" alt="imagenHamburguesa">
                        <h5 class="card-title styleTitleCard">${producto.nombre}</h5>
                        <p class="card-text styleSubtitleCard">Precio: $ ${producto.precioSimple}</p>
                        <div id="buttonCarrito${producto.id}"><button id="modal-abrir laQuieroHamburguesa" value=${producto.nombre} class="buttonModalcito">LA QUIERO</button></div>
                            
                            
                    </div>
                `

                
contenedorHamburguesas.appendChild(div)

})

// arrayPicadas_________________________________________________________


const arrayPicadas=[
    {img: "./IMAGENES/papasFritas.png", id:12, nombre: "PAPAS CON CHEDDAR, BACON Y VERDEO", precioSimple: 470, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/papasFritas2.png", id:13,  nombre: "PAPAS CON CEBOLLA A LA CREMA", precioSimple: 470, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/arosDeCebolla.png", id:14,  nombre: "AROS DE CEBOLLA CON BARBACOA", precioSimple: 450, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/nuggetsYPapas.png", id:15,  nombre: "NUGGETS CON PAPAS FRITAS", precioSimple: 550, botonComprar: "¡LA QUIERO!"},

]

const contenedorPicadas = document.getElementById("productosPicadas")

arrayPicadas.forEach((producto)=>{
    
    const div = document.createElement("div")
    div.className = "card-body styleCard mb-2 text-center"
    div.style = "max-width: 240px; max-height: 340px"

        
    div.innerHTML = `
    
    
    <div>
                        <img src=${producto.img} class="card-img-top" style="border-color: white" alt="imagenHamburguesa">
                        <h5 class="card-title styleTitleCard">${producto.nombre}</h5>
                        <p class="card-text styleSubtitleCard">Precio: $ ${producto.precioSimple}</p>
                        <div id="buttonCarrito${producto.id}"><button id="modal-abrir laQuieroHamburguesa" value=${producto.nombre} class="buttonModalcito">LA QUIERO</button></div>
                            
                            
                    </div>
                `

                
contenedorPicadas.appendChild(div)

})


// arrayPizzas_________________________________________________________



const arrayPizzas=[
    {img: "./IMAGENES/muzza.png", id:16,  nombre: "MUZZA", precioSimple: 450, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/napolitana.png",id:17,  nombre: "NAPOLITANA", precioSimple: 480, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/rucula.png", id:18,  nombre: "RUCULA Y CRUDO", precioSimple: 480, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/cebollaycrema.png", id:19,  nombre: "CEBOLLA A LA CREMA", precioSimple: 480, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/RUCULA.png", id:20,  nombre: "CHEDDAR", precioSimple: 480, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/4quesos.png", id:21, nombre: "CUATRO QUESOS", precioSimple: 480, botonComprar: "¡LA QUIERO!"},

]

const contenedorPizzas = document.getElementById("productosPizzas")

arrayPizzas.forEach((producto)=>{
    
    const div = document.createElement("div")
    div.className = "card-body styleCard mb-2 text-center"
    div.style = "max-width: 240px; max-height: 340px"

        
    div.innerHTML = `
    
    
    <div>
                        <img src=${producto.img} class="card-img-top" style="border-color: white" alt="imagenHamburguesa">
                        <h5 class="card-title styleTitleCard">${producto.nombre}</h5>
                        <p class="card-text styleSubtitleCard">Precio: $ ${producto.precioSimple}</p>
                        <div id="buttonCarrito${producto.id}"><button id="modal-abrir laQuieroHamburguesa" value=${producto.nombre} class="buttonModalcito">LA QUIERO</button></div>
                            
                            
                    </div>
                `

                
contenedorPizzas.appendChild(div)

})


// arrayWraps_________________________________________________________



const arrayWraps=[
    {img: "./IMAGENES/wrapParmesano.png",id:22,  nombre: "PARMESANO", precioSimple: 440, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/wrapMediterraneo.png",id:23,  nombre: "MEDITERRANEO", precioSimple: 440, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/wrapGriego.png", id: 24,  nombre: "GRIEGO", precioSimple: 440, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/wrapJamonYMuza.png", id:25,  nombre: "JAMON Y MUZZA", precioSimple: 440, botonComprar: "¡LA QUIERO!"},

]

const contenedorWraps = document.getElementById("productosWraps")

arrayWraps.forEach((producto)=>{
    
    const div = document.createElement("div")
    div.className = "card-body styleCard mb-2 text-center"
    div.style = "max-width: 240px; max-height: 340px"

        
    div.innerHTML = `
    
    
    <div>
                        <img src=${producto.img} class="card-img-top" style="border-color: white" alt="imagenHamburguesa">
                        <h5 class="card-title styleTitleCard">${producto.nombre}</h5>
                        <p class="card-text styleSubtitleCard">Precio: $ ${producto.precioSimple}</p>
                        <div id="buttonCarrito${producto.id}"><button id="modal-abrir laQuieroHamburguesa" value=${producto.nombre} class="buttonModalcito">LA QUIERO</button></div>
                            
                            
                    </div>
                `

                
contenedorWraps.appendChild(div)

})




// MODAL CARRITO

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const botonSeguirAgregandoAlCarrito = document.getElementById('seguirAgregandoAlCarrito')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]
const productosTablaCarrito = document.getElementById('productosTablaCarrito')
const totalPedido = document.getElementById('totalPedido')
const confirmarPedido = document.getElementById('confirmarPedido')
const vaciarCarrito = document.getElementById('vaciarCarrito')

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonSeguirAgregandoAlCarrito.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click()
})
modalCarrito.addEventListener('click', (event)=>{
    event.stopPropagation()
})


confirmarPedido.addEventListener('click', ()=>{
    if(localStorage.length < 1) return null
    console.log("HOLAAA")
    return window.location = "confirmarPedido.html"
})



const arrayProductos = arrayHamburguesas.concat(arrayPicadas, arrayPizzas, arrayWraps)








//FOR______________________________________________________________________________________________________________________________________

let itemsCarrito2 = 0

if(localStorage.length == 0){
    itemsCarrito2 = 0
}else{
    for(let i = 0 ; i<localStorage.length ; i++){
        let key = localStorage.key(i) 
        let value = localStorage.getItem(key)
        itemsCarrito2 = itemsCarrito2+parseInt(value)
        
}
}


for(let i=0 ; i<arrayProductos.length ; i++){
    const hamburguesaCarrito = document.getElementById(`buttonCarrito${i}`)

    hamburguesaCarrito.addEventListener('click', (event)=>{
        let itemLocalStorage = localStorage.getItem(arrayProductos[i].nombre) 
        if(itemLocalStorage) {
            let newQuatity = parseInt(itemLocalStorage)+1
            localStorage.setItem(arrayProductos[i].nombre, newQuatity)
        } else {
            localStorage.setItem(arrayProductos[i].nombre, 1)
        }
        itemsCarrito2=itemsCarrito2+1
        itemsCarrito.innerHTML=`
            <span>
                ${itemsCarrito2}
            </span>
        `

        let str = ``
        for(let i = 0 ; i<localStorage.length ; i++){
            let key = localStorage.key(i) 
            let value = localStorage.getItem(key)
            let precio = 0
            
            for(let j = 0 ; j<arrayProductos.length ; j++){
                if(arrayProductos[j].nombre === key) {
                    precio = arrayProductos[j].precioSimple  
                } 
            }
    
            let precioTotal = precio*parseInt(value)
            subtotalBurger = subtotalBurger + precioTotal
    
            str = str.concat(`
                    <tr>
                        <td>${key}</td>
                            <td class="text-center">
                                
                                    ${value} 
                                
                            </td>
                        <td class="text-center">$ ${precio}</td>
                        <td class="text-center">$ ${precioTotal}</td>
                    </tr>
                `
            )

            productosTablaCarrito.innerHTML=`
                ${str}
            `

            totalPedido.innerHTML=`
                <h6>SUBTOTAL: $${subtotalBurger}</h6>
            `
        }
    })
}


localStorage.getItem('hamburguesa')

const itemsCarrito = document.getElementById('itemsCarrito')
let subtotalBurger = 0

if(itemsCarrito2==0){
    itemsCarrito.innerHTML=`
    <span>
        0
    </span>
`
}else{
    itemsCarrito.innerHTML=`
    <span>
        ${itemsCarrito2}
    </span>
`
}

//MODAL CARRITO SUMANDO PRODUCTOS

if(localStorage.length == 0){
    productosTablaCarrito.innerHTML=`
    <span>
        El carrito está vacío
    </span>
`
    
}else{
    let str = ``
    for(let i = 0 ; i<localStorage.length ; i++){
        let key = localStorage.key(i) 
        let value = localStorage.getItem(key)
        let precio = 0
        
        for(let j = 0 ; j<arrayProductos.length ; j++){
            if(arrayProductos[j].nombre === key) {
                precio = arrayProductos[j].precioSimple  
            } 
        }

        let precioTotal = precio*parseInt(value)
        subtotalBurger = subtotalBurger + precioTotal

        str = str.concat(`
                <tr>
                    <td>${key}</td>
                        <td class="text-center">
                            
                                ${value} 
                            
                        </td>
                    <td class="text-center">$ ${precio}</td>
                    <td class="text-center">$ ${precioTotal}</td>
                </tr>
            `
        )
    }

                    // <button class='botonRestarProducto${key} style='background-color: transparent; color: white'>
                    //                             <i class='bx bx-minus-circle'></i>
                    //                         </button> 
                    // <button class='botonSumarProducto${key} style='background-color: transparent; color: white'>
                    //                             <i class='bx bx-plus-circle'></i>
                    //                         </button>

    productosTablaCarrito.innerHTML=`
        ${str}
        
        `
        totalPedido.innerHTML=`
                <h6>SUBTOTAL: $${subtotalBurger}</h6>
                
            `
}
vaciarCarrito.addEventListener('click', () =>{
    localStorage.clear()

    productosTablaCarrito.innerHTML=`
        <span>
            El carrito está vacío
        </span>
    `

    itemsCarrito.innerHTML=`
        <span>
            0
        </span>
    `

    totalPedido.innerHTML=`
        <h6>SUBTOTAL: NO HAS SELECCIONADO NINGÚN ITEM</h6>
    `

    itemsCarrito2=0
    subtotalBurger=0
})
var actualizarCantidades=function(){
    console.log("llegue a la fn")
    let str = ``
    for(let i = 0 ; i<localStorage.length ; i++){
        let key = localStorage.key(i) 
        let value = localStorage.getItem(key)
        let precio = 0
        
        for(let j = 0 ; j<arrayProductos.length ; j++){
            if(arrayProductos[j].nombre === key) {
                precio = arrayProductos[j].precioSimple  
            } 
        }

        let precioTotal = precio*parseInt(value)
        subtotalBurger = subtotalBurger + precioTotal

        str = str.concat(`
                <tr>
                    <td>${key}</td>
                        <td class="text-center">
                            <button class='botonRestarProducto${key} style='background-color: transparent; color: white'>
                                <i class='bx bx-minus-circle'></i>
                            </button> 
                                ${value} 
                            <button class='botonSumarProducto${key} style='background-color: transparent; color: white'>
                                <i class='bx bx-plus-circle'></i>
                            </button>
                        </td>
                    <td class="text-center">$ ${precio}</td>
                    <td class="text-center">$ ${precioTotal}</td>
                </tr>
            `
        )
    }

    productosTablaCarrito.innerHTML=`
        ${str}
        
    `
    totalPedido.innerHTML=`
        <h6>SUBTOTAL: $${subtotalBurger}</h6>
    `
}

for(let i=0; i<localStorage.length ; i++){
    let key = localStorage.key(i) 
    const botonRestar = document.getElementsByClassName(`botonRestarProducto${key}`)[0]
    const botonSumar = document.getElementsByClassName(`botonSumarProducto${key}`)[0]
    
    botonRestar.addEventListener('click', (e) =>{
        let value = localStorage.getItem(key)
        value=parseInt(value)-1
        if(value >= 0) {
            localStorage.setItem(key, value)
        }
        actualizarCantidades()
    })

    botonSumar.addEventListener('click', () =>{
        let value = localStorage.getItem(key)
        value=parseInt(value)+1
        localStorage.setItem(key, value)
        // actualizarCantidades()
    })
    
}


// CONFIRMAR PEDIDO __________________________________________________________________________________________-


async function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          const resp = JSON.parse(this.responseText)
          const date = resp.datetime.slice(0, 10)
          const time = resp.datetime.slice(11, 19)
          let str = date.split("-")
          let final = str[2] + "/" + str[1] + "/" + str[0] 
        document.getElementById("demo").innerHTML = time + "<br/>" + "el día " + "<br>" + final;
      }
    };
    xhttp.open("GET", "https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires", true);
    xhttp.send();
  }















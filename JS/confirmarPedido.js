const arrayProductos2 = [
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
    {img: "./IMAGENES/papasFritas.png", id:12, nombre: "PAPAS CON CHEDDAR, BACON Y VERDEO", precioSimple: 470, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/papasFritas2.png", id:13,  nombre: "PAPAS CON CEBOLLA A LA CREMA", precioSimple: 470, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/arosDeCebolla.png", id:14,  nombre: "AROS DE CEBOLLA CON BARBACOA", precioSimple: 450, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/nuggetsYPapas.png", id:15,  nombre: "NUGGETS CON PAPAS FRITAS", precioSimple: 550, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/muzza.png", id:16,  nombre: "MUZZA", precioSimple: 450, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/napolitana.png",id:17,  nombre: "NAPOLITANA", precioSimple: 480, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/rucula.png", id:18,  nombre: "RUCULA Y CRUDO", precioSimple: 480, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/cebollaycrema.png", id:19,  nombre: "CEBOLLA A LA CREMA", precioSimple: 480, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/RUCULA.png", id:20,  nombre: "CHEDDAR", precioSimple: 480, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/4quesos.png", id:21, nombre: "CUATRO QUESOS", precioSimple: 480, botonComprar: "¡LA QUIERO!"},
]

let subtotalBurger2 = 0

const resumenPedido = document.getElementsByClassName('resumenPedido')

let str = ``
    for(let i = 0 ; i<localStorage.length ; i++){
        let key = localStorage.key(i) 
        let value = localStorage.getItem(key)
        let precio = 0
        
        for(let j = 0 ; j<arrayProductos2.length ; j++){
            if(arrayProductos2[j].nombre === key) {
                precio = arrayProductos2[j].precioSimple  
            } 
        }

        let precioTotal = precio*parseInt(value)
        subtotalBurger2 = subtotalBurger2 + precioTotal

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

                    resumenPedido.innerHTML=`
        ${str}
        
        `
        // totalPedido.innerHTML=`
        //         <h6>SUBTOTAL: $${subtotalBurger}</h6>
                
        //     `
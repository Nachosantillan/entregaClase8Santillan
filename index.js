let eligeQueHacer = prompt("¿Quieres crear tu hamburguesa o elegir una de nuestras opciones? Escribe CREAR o ELEGIR");

if(eligeQueHacer.toUpperCase()==="CREAR"){
        let cantidadHamburguesas = 225
        let cantidadQuesoCheddar = 35
        let cantidadHojaLechuga = 15
        let salsaRelish = 50
        let cantidadBaconUnidad = 45
        let cantidadTomate = 15
        let cantidadHuevoFrito = 45


        const multiplicar = (a, b, c, d, e, f, g) => a + b + c + d + e + f + g 


        //FUNCION NUMERO 1_________________________________________________________________________________


        function cotizacionBurger() {

            alert(`Hola! Personaliza tu hamburguesa como más quieras.`)
            let burger = parseInt(prompt("¿Cuantos patys queres en tu combo? La unidad cuesta: $225"))
            let cheese = parseInt(prompt("¿Cuantas fetas de cheddar queres? La unidad cuesta: $35"))
            let lettuce = parseInt(prompt("¿Cuantas hojas de lechuga queres? La unidad cuesta: $15"))
            let sauce = parseInt(prompt("¿Cuantas medidas de salsa Relish queres? La unidad cuesta: $50"))
            let bacon = parseInt(prompt("¿Cuantas medidas de bacon queres? La unidad cuesta: $40"))
            let tomato = parseInt(prompt("¿Cuantas rodajas de tomate queres? La unidad cuesta: $15"))
            let egg = parseInt(prompt("¿Cuantas huevos fritos queres? La unidad cuesta: $45"))
            let precioFinalHamburguesa = multiplicar(  
                                            (cantidadHamburguesas * burger) , 
                                            (cantidadQuesoCheddar * cheese) , 
                                            (cantidadHojaLechuga * lettuce) , 
                                            (salsaRelish * sauce) , 
                                            (cantidadBaconUnidad * bacon) , 
                                            (cantidadTomate * tomato) , 
                                            (cantidadHuevoFrito * egg));
            alert(`Según los datos ingresados, tu hamburguesa cuesta: $${precioFinalHamburguesa}.`)
            
            console.log("Tu hamburguesa cuesta $ " + precioFinalHamburguesa)
            
            return precioFinalHamburguesa
        }

        precioFinalHamburguesa = cotizacionBurger() 


        //FUNCION NUMERO 2___________________________________________________________________________________


        function consultarConCuantoAbona() {
            let calculoVuelto = parseInt(prompt(`¿Con cuanto desea abonar?`))

            console.log("Usted va a abonar con: $ " + calculoVuelto)

            return calculoVuelto
        }

        calculoVuelto = consultarConCuantoAbona()


        //FUNCION NUMERO 3___________________________________________________________________________________


        function calcularVuelto(precioFinalHamburguesa, calculoVuelto) {

        if(calculoVuelto < precioFinalHamburguesa){
                alert(`Usted ha ingresado un número inferior al precio final de la hamburguesa.`)

            }else{
                alert(`Tu vuelto es: $${(calculoVuelto-precioFinalHamburguesa)}`)
        }
        }
        calcularVuelto(precioFinalHamburguesa, calculoVuelto)

        console.log(`Tu vuelto es: $${(calculoVuelto-precioFinalHamburguesa)}`)
        
}else{

        class HamburguesasFunction{
            //constructor para las propiedades
            constructor (Nombre, Medallon, Queso, Verduras, Cebolla, Bacon, Huevo, Salsa, Acompañamiento) {
                this.Nombre = Nombre
                this.Medallon = Medallon
                this.Queso = Queso
                this.Verduras = Verduras
                this.Cebolla = Cebolla
                this.Bacon = Bacon
                this.Huevo = Huevo
                this.Salsa = Salsa
                this.Acompañamiento = Acompañamiento
            }
        
            //metodos
        
            agregarMedallon(){
                this.Medallon++
            }
        
        }
        
        const hamburguesas = []
        
        hamburguesas.push(new HamburguesasFunction("CHE DARLING", "140gr", "cheddar", "sin verduras adicionales", "tipo caramelizada", true, false, "BBQ", "papas fritas o batatas"))
        hamburguesas.push(new HamburguesasFunction("DONALD", "140gr", "dambo", "tomate, lechuga y pepinillos", "morada", false, false, "BIG MAC", "papas fritas o batatas"))
        hamburguesas.push(new HamburguesasFunction("RED HOT", "140gr", "cheddar", "morrón salteado", "cebolla común", true, false, "PICANTE", "papas fritas o batatas"))
        hamburguesas.push(new HamburguesasFunction("RICKY FORT", "140 gr", "azul", "rúcula y tomates confitados", false, false, false, "MAYO DE VERDEO", "papas fritas o batatas"))
        hamburguesas.push(new HamburguesasFunction("CHAMPIONS LEAGUE", "140 gr", "dambo", "rúcula y champignones", false, true, false, "PICANTE", "papas fritas o batatas"))
        hamburguesas.push(new HamburguesasFunction("KITA CLUB", "140 gr", "doble cheddar", false, "aros de cebolla", true, false, "SALSA KITA", "papas fritas o batatas"))
        hamburguesas.push(new HamburguesasFunction("TOM & CHERRY", "140 gr", "dambo", "tomate cherry confitado", "a la crema", "en cubos", false, "ALIOLI", "papas fritas o batatas"))
        
        
        
        console.log(hamburguesas)


        // hamburguesas.push(crearHamburguesa())


        // function crearHamburguesa(){
        //     let Nombre = "HAMBURGUESA PERSONALIZADA"
        //     let Medallon = prompt("Cuantos medallones de carne queres?")
        //     let Queso = prompt("Que queso queres?")
        //     let Verduras = prompt("Que verduras queres en tu hamburguesa?")
        //     let Cebolla = prompt("Que tipo de cebolla queres en tu hamburguesa?")
        //     let Bacon = prompt("Queres bacon en tu hamburguesa?")
        //     let Huevo = prompt("Queres huevo en tu hamburguesa?")
        //     let Salsa = prompt("Que salsa queres en tu hamburguesa?")
        //     let Acompañamiento = prompt("Con que queres acompañar? Papas fritas o batatas?")
        
        //     return new HamburguesasFunction(Nombre, Medallon, Queso, Verduras, Cebolla, Bacon, Huevo, Salsa, Acompañamiento)
        // }

}



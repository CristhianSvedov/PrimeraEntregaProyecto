alert("¡BIENVENIDOS A LA TIENDA DE VENTAS DE ROPA DEPORTIVA NUMERO 1 EN EL PAIS! STORECRIS")
let totalCompra = 0
let seguirComprando = true
alert("A continuacion le mostraremos un listado de articulos y precio SIN inpuestos incluidos para ROPA DEPORTIVA, ingrese codigo de articulo que desea comprar")
let productoSeleccionado = parseInt(prompt("Precio SIN Inpuestos incluidos 1-Remera = Costo Total $450, 2-Short = Costo Total $400, 3-Buzos = Costo Total $500, 4-Medias = Costo Total $100"))
let producto = []
let carrito = []
const remera = {
    id:1,
    nombre:'remera',
    precio:450
}
producto.push(remera)
const short = {
    id:2,
    nombre:'short',
    precio:400
}
producto.push(short)
const buzos = {
    id:3,
    nombre:'buzos',
    precio:500
}
producto.push(buzos)
const medias = {
    id:4,
    nombre:'medias',
    precio:100
}
producto.push(medias)

while(seguirComprando===true){
    //if(productoSeleccionado===1){
    //    carrito.push(producto[0])
    //}else if(productoSeleccionado===2){
    //    carrito.push(producto[1])
    //}else if(productoSeleccionado===3){
    //    carrito.push(producto[2])
    //}else if(productoSeleccionado===4){
    //   carrito.push(producto[3])
    const productoComprado = producto.find(prod=>prod.id===productoSeleccionado)
    if(productoComprado){
        totalCompra = totalCompra + productoComprado.precio
    
    }else{
        productoSeleccionado = parseInt(prompt("SELECCIONE CODIGO CORRECTO: Precio SIN Inpuestos incluidos 1-Remera = Costo Total $450, 2-Short = Costo Total $400, 3-Buzos = Costo Total $500, 4-Medias = Costo Total $100"))
        continue
    }
    let decision = parseInt(prompt("Desea seguir comprado articulos 1-SI 2-NO"))
    if(decision===1){
        productoSeleccionado = parseInt(prompt("Precio SIN Inpuestos incluidos 1-Remera = Costo Total $450, 2-Short = Costo Total $400, 3-Buzos = Costo Total $500, 4-Medias = Costo Total $100"))
    }else if(decision===2){
        seguirComprando=false
    }
}

for (const elemento of carrito) {
    totalCompra = totalCompra + elemento.precio
}

function calcularDescuento(valor){
    let descuento = 10
    let valorDescuento = valor * (descuento/100)
    valor = valor - valorDescuento
    return valor
}
function calcularValorCuota(valor){
    let valorCuota = 0
    valorCuota = totalCompra/valor
    return valorCuota
}
function calcularImpuestos(valor){
    let impuestos = valor * (22/100)
    return valor + impuestos
}
alert("Total de compra de ROPA DEPORTIVA SIN IMPUESTOS ES "+totalCompra) 
let modoPago = parseInt(prompt("QUE FORMA DE PAGO DECEA 1-CONTADO tiene un descuento del 10%, 2-TARJETA CREDITO")) 
if(modoPago===1){
    let valorDescuento = calcularDescuento(totalCompra)
    alert("El total con descuentos incluidos es de "+ valorDescuento)
    totalCompra = valorDescuento
}else if(modoPago===2){
    let cantidadCuotas =parseInt(prompt("En cauntas cuotas desea hacer el pago?, El maximo de cuotas es 6"))
    if(cantidadCuotas > 0 && cantidadCuotas <=6){
        let totalCuota = calcularValorCuota(cantidadCuotas)
        alert("El pago se realizara en "+ cantidadCuotas + " cuotas de " + totalCuota + " Sin inpuestos incluidos")
    }
} 
let totalFinal = calcularImpuestos(totalCompra)
alert("El total de la compra con impuestos incluidos es de"+ totalFinal)
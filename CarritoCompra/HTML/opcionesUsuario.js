window.onload = function(){
//Alt + Mayus + .
    //////////////////////////////////////////////////////////////////////////////////////////////
    //Seccion Control CSS Market, User

    //Lateral Mercado
    let listaMercado = document.getElementById("market");
    //Abrir Carrito (IMG)
    let carrito = document.getElementById("opcionMarket");
    //Flecha Atras (IMG)
    let atras = document.getElementById("atrasMarket");
    //Abrir opciones usuario (IMG)
    let user = document.getElementById("opcionUser");
    //Opciones de usuario
    let opcionesUser = document.getElementById("opcionesUser")
    //CerrarSesion
    let cerrar_sesion = document.getElementById("cerrar_sesion");

    carrito.addEventListener("click",function(){

        listaMercado.style.display = "block";

    })
    atras.addEventListener("click",function(){

        listaMercado.style.display = "none";

    })
    user.addEventListener("mouseenter",function(){

        opcionesUser.style.display = "block";

    })
    opcionesUser.addEventListener("mouseenter",function(){

        opcionesUser.style.display = "block";

    })
    user.addEventListener("mouseleave",function(){

        opcionesUser.style.display = "none";

    })
    opcionesUser.addEventListener("mouseleave",function(){

        opcionesUser.style.display = "none";

    })
    cerrar_sesion.addEventListener("click",function(){

        localStorage.clear()

    })
    //////////////////////////////////////////////////////////////////////////////////////////////


    //Tratamiento base de datos

    //Caja Grid donde se listaran todos los productos
    let listaProductos = document.getElementById("productos")
    //Caja donde se listaran todos los productos seleccionados
    let listado = document.getElementById("listados")

    //Carrito

    //El numero encima del carrito que indica cuantos productos hay en la cesta
    let numeroProductosid = document.getElementById("numeroProductos")
    //La caja del carrito donde se generaran los productos y sus especificaciones
    let productosCarrito = document.getElementById("productosDelCarrito2")
    //Boton para ir a los productos del carrito
    let botonIrCarrito = document.getElementById("EditarCarrito")

    //Se utilizara para contabilizar el numero de productos que hayan
    let number = 0;
    //Se utilizara para guardar los datos del carrito
    productosCarritoArray = []
    //Array auxiliar
    arrayAuxiliar = []

    //Se llama al archivo Jsons y se le pide como argumento una clave listar con valor todosProductos
    fetch('Jsons.php?listar=todosProductos')
        .then(response => response.json())
        .then (data =>{
            // console.log(data)
            if(window.location.href.includes("index.php")){
                //Listamos base de datos de productos
                let cuerpo = "";
                for(let x=0;x<data.length;x++){

                    cuerpo += "<div id=\"producto\">\n" +
                        "        <div>\n" +
                        "            <img src='"+ data[x].imagenProducto +"' alt=''>\n" +
                        "            <div>\n" +
                        "                <h1 class=\"nombreProducto\">"+ data[x].nombre +"</h1>\n" +
                        "                <button id=\"boton\">\n" +
                        "                    <p>Agregar a cesta</p>\n" +
                        "                </button>\n" +
                        "            </div>\n" +
                        "        </div>\n" +
                        "    </div>";
                }

                // Se agrega la cadena de cajas a el cuerpo de la pagina
                listaProductos.innerHTML += cuerpo;
            }

            //Intento de obtener los localStorage de la pagina
            //Local Storage del json hecho de elementos del carrito
            let productosObtenidos = localStorage.getItem("productosCarrito")
            //Si existe se utilizara esta informacion vuelta en una variable para su facil representacion
            let products = JSON.parse(productosObtenidos);
            //Local Storage del numero de productos del carrito
            let cantidadProductosObtenidos = localStorage.getItem("cantidadProductos")

            //Al lanzar la pagina te lista los local storage
            if(products != null){

                // console.log(products)
                // console.log(cantidadProductosObtenidos)

            }

            //Se intenta acceder a la informacion del local storage si esta existe
            if(window.location.href.includes("index.php") && productosObtenidos!= null ){

                numeroProductosid.innerHTML = products.length

                //Se recorre todos los productos
                for (let i = 0; i < products.length; i++) {

                    //console.log("nombre seleccionado = "+ products)
                    //console.log("nombre seleccionado = "+ products[i].nombre)
                    productosCarritoArray[i] = products[i]

                    //Para la comparacion es necesario hacer nesting ya que se tienen que tratar con diferentes tamaños
                    for(let x=0 ; x<data.length ; x++){
                        if(data[x].nombre  == products[i].nombre ){

                            //console.log("Producto Detectado = " + products[i].nombre)

                            productosCarrito.innerHTML += '<div id="listaProductosUsuario">' +
                                '<div id="contenedorImgBoton">' +
                                '<div id="cajaImagenProducto">' +
                                '<img src="' + products[i].imagenProducto + '" alt="">' +
                                '</div>' +
                                '<div id="botonesMarket">' +
                                '</div>' +
                                '</div>' +
                                '<div id="cajaInfoProducto">' +
                                '<h2>' + products[i].nombre + '</h2>' +
                                '<p>Cantidad <p id="cantidad' + products[i].id + '"> ' + products[i].cantidad + '</p></p>' +
                                '<p>Precio </p><h3>' + products[i].precio + ' </h3>' +
                                '<p>' + products[i].descripcion + '</p>' +
                                '</div>' +
                                '</div><br>';


                        }
                    }


                }

            }

            //Boton que le pertenece a cada producto que se genera
            //Se utiliza un querySelectorAll para seleccionar todos los botones con la misma id
            //y asi poder utilizar la NodeList
            let botones = document.querySelectorAll("#boton")
            //Parceamos el numero de productos obtenidos del local storage
            let cantidadProducts = parseInt(cantidadProductosObtenidos)
            //Bolleano para controlar la generacion nueva de productos
            let pasar1 = true
            //Bolleano para controlar la generacion nueva de productos
            let pasar2 = true
            //Array auxiliar
            let arrAux = []
            //Variable auxiliar posiciones
            let positionAux = 0;
            //Se inicia un forEach para recorrer todos los botones
            botones.forEach(function(boton, id) {

                //Se le pondra esta funcion a todos los botones que hayan con el id seleccionado
                boton.addEventListener("click", function() {

                    //Confirmacion de que el boton ha sido clicado
                    console.log("Boton ha sido clickeado en = " + id)

                    //Se hará la comprobación de que producto se esta seleccionando con el nombre dado que es equivalente al
                    //que se le ha dado en la base de datos
                    let nombreProducto = boton.parentElement.querySelector(".nombreProducto").textContent;

                    //Si hay local Storage disponible significa que se tiene que actualizar el carrito en base a lo que ya se ha recogido
                    if(productosObtenidos!= null){

                        //console.log("Hay local storage que se puede utilizar, por lo que se procedera a utilizar esa info")

                        for (let i = 0; i < products.length; i++) {

                            console.log("El nombre del producto que ha sido leido es " + nombreProducto + " en la posicion " + id)
                            console.log("El nombre del producto que se ha leido de la localStorage es " + products[i].nombre + " en la posicion " + id)

                            for(let x = 0 ; x<data.length ; x++){

                                  console.log("El nombre del producto que ha sido leido es " + data[x].nombre + " en la posicion " + id)

                                if(nombreProducto == products[i].nombre){

                                    if(pasar1){
                                        console.log("El nombre del producto " + nombreProducto + " es igual a " + products[i].nombre)
                                        products[i].cantidad++;

                                        document.getElementById("cantidad" + products[i].id).innerHTML = products[i].cantidad
                                        pasar1 = false
                                        pasar2 = false
                                    }

                                }else{
                                    if(pasar2 && nombreProducto == data[x].nombre && data.length != products.length && data[x].cantidad == 0){
                                        console.log("Se detecto un nuevo producto = " + nombreProducto)
                                        pasar2 = false
                                        cantidadProducts++;
                                        number = cantidadProducts
                                        numeroProductosid.innerHTML = number

                                        let y = true
                                        let a = 1
                                        while(y){
                                            a++
                                            for(let m=0;m<a;m++){
                                                if(products[m] == null){

                                                    //console.log(products[m] + " es numero = " + m)
                                                    productosCarritoArray[m] = data[x]
                                                    products[m] = productosCarritoArray[m]
                                                    arrAux[positionAux] = productosCarritoArray[m]
                                                    y= false

                                                }
                                            }
                                        }

                                        productosCarrito.innerHTML += '<div id="listaProductosUsuario">' +
                                            '<div id="contenedorImgBoton">' +
                                            '<div id="cajaImagenProducto">' +
                                            '<img src="' + data[x].imagenProducto + '" alt="">' +
                                            '</div>' +
                                            '<div id="botonesMarket">' +
                                            '</div>' +
                                            '</div>' +
                                            '<div id="cajaInfoProducto">' +
                                            '<h2>' + data[x].nombre + '</h2>' +
                                            '<p>Cantidad <p id="cantidad' + data[x].id + '"> ' + data[x].cantidad + '</p></p>' +
                                            '<p>Precio </p><h3>' + data[x].precio + ' </h3>' +
                                            '<p>' + data[x].descripcion + '</p>' +
                                            '</div>' +
                                            '</div><br>';

                                    }

                                }
                            }
                        }
                        pasar2 = true
                        pasar1 = true

                    }
                    //Si no hay local Storage disponible significa que se procedera a agregar directamente para generar informacion nueva
                    else{
                        for (let x = 0; x < data.length; x++) {

                            if (nombreProducto == data[x].nombre && data[x].cantidad > 0) {

                                data[x].cantidad++;
                                console.log(" esta actualizado a " + data[x].cantidad)
                                document.getElementById("cantidad" + data[x].id).innerHTML = data[x].cantidad

                            } else if (nombreProducto == data[x].nombre) {

                                //console.log("El producto " + nombreProducto + "o tambien " + data[x].nombre + " tiene de precio " + data[x].precio)

                                data[x].cantidad++;

                                productosCarritoArray[x] = data[x];

                                console.log("Se ha guardado en el array de productos = " + productosCarritoArray[x])

                                console.log("El array actual se ve de la siguiente manera =  " + productosCarritoArray )

                                productosCarrito.innerHTML += '<div id="listaProductosUsuario">' +
                                    '<div id="contenedorImgBoton">' +
                                    '<div id="cajaImagenProducto">' +
                                    '<img src="' + data[x].imagenProducto + '" alt="">' +
                                    '</div>' +
                                    '<div id="botonesMarket">' +
                                    '</div>' +
                                    '</div>' +
                                    '<div id="cajaInfoProducto">' +
                                    '<h2>' + data[x].nombre + '</h2>' +
                                    '<p>Cantidad <p id="cantidad' + data[x].id + '"> ' + data[x].cantidad + '</p></p>' +
                                    '<p>Precio </p><h3>' + data[x].precio + ' </h3>' +
                                    '<p>' + data[x].descripcion + '</p>' +
                                    '</div>' +
                                    '</div><br>';
                                number++;
                                numeroProductosid.innerHTML = number;

                            }
                        }

                    }

                });

            });

        })
    //////////////////////////////////////////////////////////////////////////////////////////////


    //Tratamiento de localStorage


    //Al oprimir el boton de ir al carrito se ejecutará esta funcion
    botonIrCarrito.addEventListener("click",function(){

        if(localStorage.getItem("productosCarrito") == null){

            console.log("Se procede a crear los localStorage respectivamente")

            //Local Storage de la cantidad de productos
            let cantidadDeProductosStorage = localStorage.setItem("cantidadProductos",  JSON.stringify(number));
            console.log("la cantidad de productos guardados fue = " + cantidadDeProductosStorage)

            let arrayFinal = cleanArray(productosCarritoArray)

            //Local Storage de los productos
            let productosStorage = localStorage.setItem("productosCarrito", JSON.stringify(arrayFinal));
            console.log("los productos guardados fueron = " + productosStorage)

        }else if(localStorage.getItem("productosCarrito") != null){

            for(let x=0;x<productosCarritoArray.length;x++){

                arrayAuxiliar[x] = productosCarritoArray[x]

            }
            localStorage.setItem("cantidadAux", JSON.stringify(number));
            localStorage.setItem("arrayAux", JSON.stringify(arrayAuxiliar));

        }
    })
    //////////////////////////////////////////////////////////////////////////////////////////////


    //Listamiento de lista de productos correspondiente al usuario
    if(window.location.href.includes("ListaCompra.php") && localStorage.getItem("productosCarrito") != null){

        //Local Storage del json hecho de elementos del carrito
        let productosObtenidos = localStorage.getItem("productosCarrito")
        //Si existe se utilizara esta informacion vuelta en una variable para su facil representacion
        let products = JSON.parse(productosObtenidos);
        //Local Storage del numero de productos del carrito
        let cantidadProductosObtenidos = localStorage.getItem("cantidadProductos")

        let arrayAuxiliar = localStorage.getItem("arrayAux")
        let cantidadAuxiliar = localStorage.getItem("cantidadAux")
        console.log(arrayAuxiliar)

        if(arrayAuxiliar != null){

            products = JSON.parse(arrayAuxiliar);
            cantidadProductosObtenidos = cantidadAuxiliar
            localStorage.setItem("productosCarrito", arrayAuxiliar);
            localStorage.setItem("cantidadProductos", cantidadAuxiliar);

        }

        //Rectificar la cantidad de productos con las que se esta tratando
        console.log("Cantidad = " + cantidadProductosObtenidos)
        //Rectificar los productos con los que esta tratando la app
        console.log("Productos = " + products)
        //Actualizar numero de productos en la pagina actual
        numeroProductosid.innerHTML = products.length;
        //Datos con los que se va a tratar
        console.log("datos = " + products)

        for (let i = 0; i < products.length; i++) {

            let producto = products[i]

            if(producto != null){
                listado.innerHTML += '<div id="listadosListos">\n' +
                    '            <img src="'+producto.imagenProducto+'" alt="">\n' +
                    '            <h1>'+ producto.nombre+ '</h1><br>\n' +
                    '            <h1>'+producto.precio+'</h1><br>\n' +
                    '            <h1>Cantidad = '+producto.cantidad+'</h1><br>\n' +
                    '            <h1>'+producto.descripcion+'</h1><br>\n' +
                    '        </div>';
                productosCarrito.innerHTML +='<div id="listaProductosUsuario">'+
                    '<div id="contenedorImgBoton">'+
                    '<div id="cajaImagenProducto">'+
                    '<img src="'+ producto.imagenProducto +'" alt="">'+
                    '</div>'+
                    '<div id="botonesMarket">'+
                    '</div>'+
                    '</div>'+
                    '<div id="cajaInfoProducto">'+
                    '<h2>'+ producto.nombre  + '</h2>'+
                    '<p>Cantidad <p id="cantidad'+producto.id+'"> '+ producto.cantidad + '</p></p>'+
                    '<p>Precio </p><h3>'+ producto.precio +' </h3>'+
                    '<p>' + producto.descripcion + '</p>'+
                    '</div>'+
                    '</div><br>';
            }
        }

    }
}
function cleanArray( array ){
    var newArray = new Array();
    for( var i = 0, j = array.length; i < j; i++ ){
        if ( array[ i ] ){
            newArray.push( array[i]);
        }
    }
    return newArray;
}
window.onload = function(){

    let cerrar_sesion = document.getElementById("cerrar_sesion");

    cerrar_sesion.addEventListener("click",function(){

        localStorage.clear()

    })
    let productosObtenidos = localStorage.getItem("productosCarrito")
    let cantidadProductosObtenidos = localStorage.getItem("cantidadProductos")
    let numeroProductosid = document.getElementById("numeroProductos")
    //delete productosCarritoObjeto[idAEliminar];
    let productosCarrito = document.getElementById("productosDelCarrito2")
    let products = JSON.parse(productosObtenidos);
    if(window.location.href.includes("index.php") && productosObtenidos!= null ){

        console.log("cumple")
        let cantidadProducts = parseInt(cantidadProductosObtenidos)
        numeroProductosid.innerHTML = cantidadProducts;
        for (let i = 0; i < products.length; i++) {
            let producto = products[i];
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

    let listaMercado = document.getElementById("market");
    let carrito = document.getElementById("opcionMarket");
    let atras = document.getElementById("atrasMarket");

    carrito.addEventListener("click",function(){

        listaMercado.style.display = "block";

    })
    atras.addEventListener("click",function(){

        listaMercado.style.display = "none";

    })

    let user = document.getElementById("opcionUser");
    let opcionesUser = document.getElementById("opcionesUser")

    user.addEventListener("mouseenter",function(){

        opcionesUser.style.display = "block";

    })
    opcionesUser.addEventListener("mouseenter",function(){

        opcionesUser.style.display = "block";

    })
    user.addEventListener("mouseleave",function(){

        opcionesUser.style.display = "block";

    })
    opcionesUser.addEventListener("mouseleave",function(){

        opcionesUser.style.display = "none";

    })

    productosReales = []
    productosCarritoArray = []
    let Number=0;
    let objeto;
   fetch('Jsons.php?listar=todosProductos')
       .then(response => response.json())
       .then (data =>{

           console.log(data)
           let listaProductos = document.getElementById("productos")

           let cuerpo = "";
           for(let x=0;x<data.length;x++){

               cuerpo += "<div id=\"producto\">\n" +
                   "        <div>\n" +
                   "            <img src='"+ data[x].imagenProducto +"'>\n" +
                   "            <div>\n" +
                   "                <h1 class=\"nombreProducto\">"+ data[x].nombre +"</h1>\n" +
                   "                <button id=\"boton\">\n" +
                   "                    <p>Agregar a cesta</p>\n" +
                   "                </button>\n" +
                   "            </div>\n" +
                   "        </div>\n" +
                   "    </div>";
           }

           listaProductos.innerHTML += cuerpo;

           for(let x=0; x<data.length ; x++){

               productosReales[x] = data[x];

           }

            console.log(productosReales)

           let botones = document.querySelectorAll("#boton")
           botones.forEach(function(boton) {

               boton.addEventListener("click", function() {

                   let nombreProducto = boton.parentElement.querySelector(".nombreProducto").textContent;
                   if (window.location.href.includes("index.php") && productosObtenidos!= null && cantidadProductosObtenidos!= null ) {

                       console.log("amsmasmma")
                       for (let i = 0; i < products.length; i++) {

                           let producto = products[i];
                           console.log("ESTO SE ESTA EJECUTANDO")
                           console.log(nombreProducto)
                           console.log(producto.nombre)
                           if(nombreProducto == producto.nombre){
                               let numero = producto.cantidad;
                               numero++;
                               producto.cantidad = numero
                               document.getElementById("cantidad" + producto.id).innerHTML = producto.cantidad
                           }else if(nombreProducto == data[x].nombre){

                               console.log("Se detecto un nuevo producto = " + nombreProducto)
                               let cantidadProducts = parseInt(cantidadProductosObtenidos)
                               cantidadProducts++;
                               numeroProductosid.innerHTML = cantidadProducts;
                               productosCarrito.innerHTML += '<div id="listaProductosUsuario">' +
                                   '<div id="contenedorImgBoton">' +
                                   '<div id="cajaImagenProducto">' +
                                   '<img src="' + productosReales[x].imagenProducto + '" alt="">' +
                                   '</div>' +
                                   '<div id="botonesMarket">' +
                                   '</div>' +
                                   '</div>' +
                                   '<div id="cajaInfoProducto">' +
                                   '<h2>' + productosReales[x].nombre + '</h2>' +
                                   '<p>Cantidad <p id="cantidad' + productosReales[x].id + '"> ' + productosReales[x].cantidad + '</p></p>' +
                                   '<p>Precio </p><h3>' + productosReales[x].precio + ' </h3>' +
                                   '<p>' + productosReales[x].descripcion + '</p>' +
                                   '</div>' +
                                   '</div><br>';

                           }

                       }

                   }
                   else{
                       for (let x = 0; x < productosReales.length; x++) {

                           let variable;
                           var amount = parseInt(variable, 10);

                           if (nombreProducto == data[x].nombre && productosReales[x].cantidad > 0) {

                               productosReales[x].cantidad++;
                               console.log(productosReales[x].cantidad)
                               document.getElementById("cantidad" + productosReales[x].id).innerHTML = productosReales[x].cantidad

                           } else if (nombreProducto == data[x].nombre) {

                               console.log("El producto " + nombreProducto + "o tambien " + productosReales[x].nombre +
                                   " tiene de precio " + productosReales[x].precio)

                               productosReales[x].cantidad++;

                               productosCarritoArray[x] = productosReales[x];
                               console.log(productosCarritoArray[x])
                               console.log(productosCarritoArray)

                               productosCarrito.innerHTML += '<div id="listaProductosUsuario">' +
                                   '<div id="contenedorImgBoton">' +
                                   '<div id="cajaImagenProducto">' +
                                   '<img src="' + productosReales[x].imagenProducto + '" alt="">' +
                                   '</div>' +
                                   '<div id="botonesMarket">' +
                                   '</div>' +
                                   '</div>' +
                                   '<div id="cajaInfoProducto">' +
                                   '<h2>' + productosReales[x].nombre + '</h2>' +
                                   '<p>Cantidad <p id="cantidad' + productosReales[x].id + '"> ' + productosReales[x].cantidad + '</p></p>' +
                                   '<p>Precio </p><h3>' + productosReales[x].precio + ' </h3>' +
                                   '<p>' + productosReales[x].descripcion + '</p>' +
                                   '</div>' +
                                   '</div><br>';
                               Number++;
                               numeroProductosid.innerHTML = Number;
                               variable = document.getElementById("cantidad" + productosReales[x].id).innerHTML

                           }
                       }
                   }
               });

           });

       })

    let botonIrCarrito = document.getElementById("EditarCarrito")

    botonIrCarrito.addEventListener("click",function(){

        let comprobacion = localStorage.getItem("productosCarrito")

            if(comprobacion != null){

                console.log(comprobacion)
                if(parseInt(localStorage.getItem("cantidadProductos")) != num) {

                    let cantidadDiferente = false;
                    localStorage.removeItem("cantidadProductos");
                    localStorage.setItem("cantidadProductos", JSON.stringify(Number));
                    let Cantidad= []
                    for (let i = 0; i < products.length; i++) {

                        let producto = products[i];

                        Cantidad[i] = producto.cantidad

                    }
                    for (let i = 0; i < products.length; i++) {


                        if( Cantidad[i] != productosCarritoArray[i].cantidad ){

                            console.log(Cantidad[i] + "es diferente a " + productosCarritoArray[i].cantidad)
                            cantidadDiferente = true;

                        }else{

                            console.log(Cantidad[i] + "es igual a " + productosCarritoArray[i].cantidad)

                        }

                    }

                    if(cantidadDiferente){
                        for (let i = 0; i < products.length; i++) {

                            localStorage.removeItem("productosCarrito");
                            localStorage.setItem("productosCarrito",JSON.stringify(productosCarritoArray));

                        }
                    }

                }

            }else{
                console.log("existen productos")
                let num = JSON.stringify(Number)
                let d = JSON.stringify(productosCarritoArray)
                localStorage.setItem("cantidadProductos", num);
                localStorage.setItem("productosCarrito", d);
            }


    })


    // console.log(productosObtenidos)

    var cantidadProducts = parseInt(cantidadProductosObtenidos)

   console.log(products)
    console.log("Cantidad ="+ cantidadProducts)
    if(window.location.href.includes("ListaCompra.php")){
        numeroProductosid.innerHTML = cantidadProducts;
        let listado = document.getElementById("listados")

        for (var i = 0; i < products.length; i++) {

            var producto = products[i];

            listado.innerHTML += '<div id="listadosListos">\n' +
                '            <h1>'+producto.nombre+'</h1>\n' +
                '            <h1>'+producto.precio+'</h1>\n' +
                '            <img src="'+producto.imagenProducto+'">\n' +
                '            <h1>Cantidad = '+producto.cantidad+'</h1>\n' +
                '            <h1>'+producto.descripcion+'</h1>\n' +
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
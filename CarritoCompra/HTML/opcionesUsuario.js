window.onload = function(){

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

    let numeroProducotsid = document.getElementById("numeroProductos")
    let productosCarrito = document.getElementById("productosDelCarrito2")
    let numeroProductos = 0;
    let cantidadVolatil = 0;
    let menosActivado = false


    productosReales = []
    productosSeleccionados = []
    productosReales.push({ id:1 ,nombre: 'Producto 1', precio: 10, cantidad: 0 });
    productosReales.push({ id:2 ,nombre: 'Producto 2', precio: 15, cantidad: 0 });
    productosReales.push({ id:3 ,nombre: 'Producto 3', precio: 90, cantidad: 0 });

    let botones = document.querySelectorAll("#boton")
    botones.forEach(function(boton) {

        boton.addEventListener("click", function() {

            menosActivado = true;
            console.log(menosActivado)
            numeroProductos++;
            numeroProducotsid.innerHTML = numeroProductos;
            let nombreProducto = boton.parentElement.querySelector(".nombreProducto").textContent;

            for(let x = 0 ; x<productosReales.length; x++){

                if(nombreProducto == productosReales[x].nombre && productosReales[x].cantidad == 0 ){

                    console.log("1. Cantidad antigua de " + productosReales[x].nombre + " es igual a =" +productosReales[x].cantidad)

                    productosReales[x].cantidad ++;

                    productosSeleccionados[x] = productosReales[x]

                    console.log("El producto " + nombreProducto + "o tambien " + productosReales[x].nombre +
                        " tiene de precio " + productosReales[x].precio + "cantidad" + productosReales[x].cantidad )

                        productosCarrito.innerHTML +='<div id="listaProductosUsuario">'+
                            '<div id="contenedorImgBoton">'+
                            '<div id="cajaImagenProducto">'+
                            '<img src="../FnacImagenes/flecha.png" alt="">'+
                            '</div>'+
                            '<div id="botonesMarket">'+
                            '</div>'+
                            '</div>'+
                            '<div id="cajaInfoProducto">'+
                            '<h2>'+ productosReales[x].nombre  + '</h2>'+
                            '<p>Cantidad <p id="cantidad'+productosReales[x].id+'"> '+ productosReales[x].cantidad + '</p></p>'+
                            '<p>Precio </p><h3>'+ productosReales[x].precio +' </h3>'+
                            '<p>Informacion del producto</p>'+
                            '</div>'+
                            '</div><br>';
                        cantidadVolatil = productosReales[x].cantidad;

                    }else if(nombreProducto == productosReales[x].nombre && productosReales[x].cantidad > 0 ){

                    console.log("2. Cantidad antigua de " + productosReales[x].nombre + " es igual a =" +productosReales[x].cantidad)
                    productosReales[x].cantidad ++;
                    console.log("El producto " + nombreProducto + "o tambien " + productosReales[x].nombre +
                        " tiene de precio " + productosReales[x].precio + "cantidad" + productosReales[x].cantidad )

                    let cantidad = document.getElementById("cantidad"+productosReales[x].id);

                    let cantidadNumero =  productosReales[x].cantidad;

                    cantidad.innerHTML = cantidadNumero;

                    cantidadVolatil = productosReales[x].cantidad;
                }
            }
            console.log(nombreProducto);
            console.log(cantidadVolatil)

        });

    });
    let lista = document.getElementById("listados")

    for(let x=0; x<productosSeleccionados.length;x++){

        lista.innerHTML += " id producto = "+ productosSeleccionados[x].id + " nombre producto " + productosSeleccionados[x].nombre

    }
}
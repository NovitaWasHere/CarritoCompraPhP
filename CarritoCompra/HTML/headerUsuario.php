<header id="headerSesion">
    <div id="barraConSesion">
        <div id="logo">
            <a href="index.php"><img src="../FnacImagenes/Fnac_Logo.svg.png"></a>
        </div>
        <div id="botones">
            <div><a href="index.php"><h2>Articulos</h2></a></div>
            <div><a href="index.php"><h2>Ubicación</h2></a></div>
            <div><a href="index.php"><h2>Sobre Nosotros</h2></a></div>
        </div>
        <div id="busqueda">
            <div id="imagenLupa">
                <img src="../FnacImagenes/lupa.png" id="lupa">
            </div>
            <input type="search" id="busquedaFnac" placeholder="buscar...">
        </div>
        <?php
        if ($_SESSION["Invitado"] && !isset($_SESSION["Usuario"])) {
            echo '<div id="opcionesSinIniciar"><div><a href="IniciarSesion.php"><p>Iniciar Sesión</p></a></div><div><a href="registrar.php"><p>Registrarse</p></a></div></div>';
        } else if(isset($_SESSION["Usuario"])){
            echo '<div id="opcionesIniciado"> <div id="opcionUser"><a href="index.php" ><img src="../FnacImagenes/user.png"></a></div>
                <div id="opcionMarket"><img src="../FnacImagenes/market.png"><div id="circuloCarrito"><p id="numeroProductos">0</p></div></div></div>
                <div id="opcionesUser"><form method="post" action="../Controlador/cerrarSesion.php"><input id="cerrar_sesion"type="submit" name="cerrar_sesion" value="Cerrar Sesión"></form></div>
                <div id="market">
                    <div id="atrasMarket">
                        <img src="../FnacImagenes/flecha.png">             
                    </div>
                    <div id="EditarCarrito">
                        <a href="ListaCompra.php"><h2>Editar Carrito</h2></a>
                    </div> 
                    <div id="tituloMarket">
                        <h1>Lista de productos</h1>
                    </div>
                    <div id="productosDelCarrito">
                      <div id="productosDelCarrito2">
                                 
                      </div>             
                    </div>  
                </div>';
        }
        ?>
    </div>
</header>
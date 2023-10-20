<?php
session_start();
if (!isset($_SESSION["Invitado"])) {
    $_SESSION["Invitado"] = true;
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="../FnacImagenes/Fnac_Logo.svg.png">
    <link rel="stylesheet" href="estilosPrueba.css">
    <script src="opcionesUsuario.js"></script>
    <title>Fnac</title>
</head>
<body>
<?php
include ("headerUsuario.php");
?>
<div id="productos">
    <div id="producto">
        <div>
            <img src="../FnacImagenes/user.png">
            <div>
                <h1 class="nombreProducto">Producto 1</h1>
                <button id="boton">
                    <p>Agregar a cesta </p>
                </button>
            </div>
        </div>
    </div>
    <div id="producto">
        <div>
            <img src="../FnacImagenes/lupa.png">
            <div>
                <h1 class="nombreProducto">Producto 2</h1>
                <button id="boton">
                    <p>Agregar a cesta </p>
                </button>
            </div>
        </div>
    </div>
    <div id="producto">
        <div>
            <img src="../FnacImagenes/market.png">
            <div>
                <h1 class="nombreProducto">Producto 3</h1>
                <button id="boton">
                    <p>Agregar a cesta</p>
                </button>
            </div>
        </div>
    </div>
</div>
</body>
</html>

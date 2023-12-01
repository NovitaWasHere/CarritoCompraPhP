<?php
session_start();
if (!isset($_SESSION["Usuario"])) {
    header("index.php");
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
<div>
    <h1>Productos Seleccionados</h1>
    <div id="listados">

    </div>
</div>
</body>
</html>

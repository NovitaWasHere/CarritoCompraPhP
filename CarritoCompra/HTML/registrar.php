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
    <title>Fnac</title>
</head>
<body>
<?php
    include ("headerUsuario.php");
?>
<form method="post" id="formularioRegistro">
    <p>Regístro</p>
    <div id="formularioGrid">
        <div><label for="correo"><h2>Correo electrónico</h2></label><br>
            <input type="email" name="email" id="correo" value="" placeholder="Correo electrónico..." required></div>
        <div><label for="nombre"><h2>Nombre del usuario</h2></label><br>
            <input type="text" name="nombre" id="nombre" value="" placeholder="Nombre del usuario..." maxlength="20" required></div>
        <div><label for="contrasena"><h2>Contraseña del usuario</h2></label><br>
            <input type="password" name="contrasena" id="contra1" value="" placeholder="Contraseña del usuario..." maxlength="20" required>
        </div>
            <button type="submit" id="registrar">Registrarse</button><br>
            <a href="IniciarSesion.php"><h4>¿Ya tienes cuenta?</h4></a>
    </div>
</form>
</body>
</html>
<?php
    require_once '../Modelo/UserModelo.php';
    require_once '../Controlador/userControlador.php';
    $login = new userControlador();
    $login -> registrarUsuarioControlador();
?>


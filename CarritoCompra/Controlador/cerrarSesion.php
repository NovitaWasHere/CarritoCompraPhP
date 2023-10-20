<?php

session_start();

    if (isset($_POST['cerrar_sesion'])) {
        // Destruye la sesión
        session_destroy();
        header("Location: ../HTML/index.php");
        exit;

}
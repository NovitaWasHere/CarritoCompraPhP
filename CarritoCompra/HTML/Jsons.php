<?php
//Modelo
require_once "../Modelo/ProductModelo.php";
//Controlador
require_once "../Controlador/productControlador.php";
require_once "../Controlador/userControlador.php";

$usuario = new userControlador();
$producto = new productControlador();

switch ($_GET["listar"]){

    case "todosProductos":{

        $producto ->listarProductos();
        break;

    }
    case "todosUsuarios":{

        $usuario -> listarUsuarios();
        break;

    }

}
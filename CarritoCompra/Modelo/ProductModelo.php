<?php

namespace Modelo;

use PDOException;
require_once "ConexionBD.php";

class productModelo
{
    static public function listarProductosModelo($tablaBD)
    {
        //Nos conectamos a la base de datos y preparamos al sentencia de seleccionar los datos
        $pdo = ConexionBD::conectarse()->prepare("SELECT id, nombre, precio , descripcion, imagenProducto, cantidad FROM $tablaBD");
        //Si la sentencia sale bien, devolvemos todos los datos que se han encontrado
        try {
            $pdo->execute();
            return $pdo->fetchAll();
        } catch (PDOException $e) {
            echo "ERROR: $e";
        } finally {
            //Cerramos conexión
            $pdo = null;
        }
    }
}
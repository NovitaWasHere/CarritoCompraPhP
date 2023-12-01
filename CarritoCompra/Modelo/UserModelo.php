<?php

namespace Modelo;

use PDOException;
use PDO;
require_once "ConexionBD.php";
class UserModelo extends ConexionBD
{
    static public function listarUsuariosModelo($tablaBD)
    {
        //Nos conectamos a la base de datos y preparamos al sentencia de seleccionar los datos
        $pdo = ConexionBD::conectarse()->prepare("SELECT id, nombre, correo , contraseña, admin FROM $tablaBD");
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
    static public function IniciarSesionModelo($tablaBD)
    {
        //Nos conectamos a la base de datos y preparamos al sentencia de seleccionar los datos
        $pdo = ConexionBD::conectarse()->prepare("SELECT id, nombre, correo , contraseña, admin FROM $tablaBD");
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
    static public function registrarUsuarioModelo($datos,$tablaBD)
    {
        $pdo = ConexionBD::conectarse()->prepare("INSERT INTO $tablaBD (nombre, correo, contraseña,admin) VALUES (:nombre,:email,:contrasena,0)");

        $pdo->bindParam(":nombre", $datos["nombre"], PDO::PARAM_STR);
        $pdo->bindParam(":email", $datos["email"], PDO::PARAM_STR);
        $pdo->bindParam(":contrasena", $datos["contrasena"], PDO::PARAM_STR);

        try {
            if ($pdo->execute()) {
                return "Registro realizado correctamente";
            } else {
                return "Hubo un error en el proceso del registro";
            }
        } catch (PDOException $e) {
            echo "ERROR: " . $e->getMessage();
        } finally {
            //Cerramos conexión
            $pdo = null;
        }
    }
    static public function ingresoModelo($datosControlador, $tablaBD)
    {
        $pdo = ConexionBD::conectarse()->prepare("SELECT * FROM $tablaBD WHERE nombre = :nombre");

        $pdo->bindParam(":nombre", $datosControlador["nombre"], PDO::PARAM_STR);
        try {
            $pdo->execute();
            return $pdo->fetch();
        } catch (PDOException $e) {
            echo "ERROR: $e";
        } finally {
            $pdo = null;
        }

    }
}
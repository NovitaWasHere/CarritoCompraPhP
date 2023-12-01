<?php
require_once '../Modelo/UserModelo.php';
use Modelo\UserModelo;
class userControlador
{
    public function registrarUsuarioControlador()
    {
        if (isset($_POST["email"])) {
            $datosControlador = array("nombre" => $_POST["nombre"],"email" => $_POST["email"],
                "contrasena" => $_POST["contrasena"]);
            $tablaBD = "Usuario";
            $respuesta = UserModelo::registrarUsuarioModelo($datosControlador, $tablaBD);

            if ($respuesta == "Registro realizado correctamente") {
                header("index.php");
            } else {
                echo "Hubo un error en el proceso del registro";
            }
        }

    }
    public function listarUsuarios()
    {
        //Eligimos tabla
        $tablaBD = "Usuario";
        //llamamos a la función de listar todos
        $respuesta = UserModelo::listarUsuariosModelo($tablaBD);

        //Con la que devuelva esta función, haremos con un foreach toda
        //la maquetación de la página por cada registro que devuelva la función
        echo json_encode($respuesta);
    }
    public function IniciarSesionControlador()
    {
        //Eligimos tabla
        $tablaBD = "Usuario";
        //llamamos a la función de listar todos
        $respuesta = UserModelo::IniciarSesionModelo($tablaBD);

        //Con la que devuelva esta función, haremos con un foreach toda
        //la maquetación de la página por cada registro que devuelva la función
        echo json_encode($respuesta);
    }
    public function ingresoControlador()
    {
        if (isset($_POST["nombre"])) {

            $datosControlador = array("nombre" => $_POST["nombre"],
                "contrasena" => $_POST["contrasena"]);
            $tablaBD = "Usuario";
            //$datos = implode("+", $datosControlador);

            $respuesta = UserModelo::ingresoModelo($datosControlador, $tablaBD);

            if ($respuesta["nombre"] == $_POST["nombre"] && $respuesta["contraseña"] == $_POST["contrasena"]) {

                echo "todo correcto";
                $_SESSION["Usuario"] = true;
                header("location:index.php");

            }else {
                //Si no existe el usuario, error
                echo "???????????????????";
                header("location:IniciarSesion.php");

            }

        }

    }

}

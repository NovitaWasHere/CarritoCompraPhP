<?php
class userControlador
{
    public function registrarUsuarioControlador()
    {
        if(isset($_POST["email"])){
            $_SESSION["Usuario"] = true;

            if (!isset($_COOKIE['UsuarioIniciado'])) {
                $UsuarioIniciado = session_id(); // Obtén el ID de sesión actual
                setcookie('sesion_id', $UsuarioIniciado); // Crea la cookie con el ID de sesión y una duración de 1 hora (puedes ajustar el tiempo)
                echo "<h1>sesionGuardada</h1>";

            }

            header("Location: index.php");
        }

        /*
        if (isset($_POST["email"])) {
            //Crearemos una array con el contenido del formulario
            $datosControlador = array("email" => $_POST["email"], "nombre" => $_POST["nombre"],
                "contra1" => $_POST["contra1"]);
            //Creamos una variable con el nombre de la tabla a la que le queremos insertar
            $tablaBD = "usuario";

            //Inicializamos una variable con el valor que devuelva la función
            $respuesta = UsuarioModelo::registrarUsuarioModelo($datosControlador, $tablaBD);

            //Como va a devolver una cadena, analizamos cual es y en consecuencia
            if ($respuesta == "Registro realizado correctamente") {
                //Si el registro se hizo bien, volvemos a la página de registrar
                header("location:crudUsuarios.php?accion=listarUsuario");
            } else {
                //Sino, mostramos un error
                echo "Hubo un error en el proceso del registro";
            }
        }
        */
    }
}
<?php

namespace Modelo;

use PDO;

class ConexionBD
{
    static public function conectarse()
    {
        //Recuerda cambiar la contraseña dependiendo de quien hosteé la conexión
        $bd = new PDO("mysql:host=localhost;dbname=Tienda", "root", "root");

        return $bd;
    }
}

?>

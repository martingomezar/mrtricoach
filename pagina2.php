<?php
$nombre= $_POST['nombre'];
$apellido= $_POST['apellido'];
$telefono= $_POST['telefono'];
$mail= $_POST['mail'];
$mensaje= $_POST['mensaje'];

echo #nombre;

if(mail('magakaefe@hotmail.com', $asunto, $mensaje)){
    echo "mail enviado";
}else{
    echo "mail NO enviado";
};
?>
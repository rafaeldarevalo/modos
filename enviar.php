<?
 
    $cuerpo = "<b>Formulario de Contacto Modos</b><br><br>";
    $cuerpo .= "<b>Este mensaje fue enviado por:</b> " . $HTTP_POST_VARS["nombre"] . "<br>";
    $cuerpo .= "<b>E-mail:</b> " . $HTTP_POST_VARS["email"] . "<br>"; 
    $cuerpo .= "<b>Celular:</b> " . $HTTP_POST_VARS["celular"] . "<br>"; 
    $cuerpo .= "<b>Mensaje:</b> " . $HTTP_POST_VARS["mensaje"] . "<br>";  
    $cuerpo.= "<b>Enviado el</b> " . date('d/m/Y'); 
    $enviado = mail("modos@mail.com", "Mensaje desde el Sitio web Modos",stripslashes($cuerpo),"From: Correo\r\nContent-type: text/html\r\n"); 
    if($enviado)
    {
        echo "<script language=javascript> alert ('Su Mensaje ha sido enviado'); window.location = 'https://www.modos.com.co/';</script>";
    }
 
     
 
?>
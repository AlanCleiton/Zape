<?php

	// Enviar para (use seu endereço de e-mail)
	$strEmail = "thiagogreba@hotmail.com";

	// Coleta dados do usuário
	$strSubject = $_POST["subject"];
	$strMessage = $_POST["message"];

	mail($strEmail,$strSubject,$strMessage);
	echo "E-mail enviado.";
	 
	
	?>
<?php
$nome = htmlspecialchars(strip_tags($_POST['nome']));
$texto = htmlspecialchars(strip_tags($_POST['msg']));
$email = htmlspecialchars(strip_tags($_POST['email']));

	if (!filter_var($email, FILTER_VALIDATE_EMAIL))
	{
		echo '<p><strong>E-mail inv&aacute;lido!</strong></p>';	
		exit ();		
	} elseif
		(!filter_var($email, FILTER_SANITIZE_EMAIL))
		{
			echo '<p><strong>Cont&eacute;m caracteres n&atilde;o permitidos.</strong></p>';
		exit();		
	}
	if ($nome != '' && $email != '' && $texto != '')
	{
		echo '<p><strong>Tudo certo.</strong></p>';
	} else {
		echo '<p><strong>Dados falta.</strong></p>';		
	}
?>
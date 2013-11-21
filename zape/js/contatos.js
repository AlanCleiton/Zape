$(function(){
	$('#enviar_contato').click(function(){
		var nome = $("#nome").val();
		var nome = $("#email").val();
		var nome = $("#msg").val();
		if (nome!='' & email!='' & msg!='')
		{
			$('.loading').show();
			$('form')[0].reset();
			$('#form-contato').fadeTo("slow",0.3);
			$.post("envia.php",{nome: nome, email, msg:msg},
				function(retorno){
					$('.loading').fadeOut();
					$('#resposta').html(retorno).fadeIn();
					$('#form-contato').fadeTo("slow",1);
					$('#resposta').fadeOut(3000);
				})
		}else{
				alert("Existem campos incompletos no formulário.Favor preencher todos.")
		}	
		return false;
	})
})
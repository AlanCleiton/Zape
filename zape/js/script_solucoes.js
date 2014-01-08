(function($){

	$(document).ready(function(){
		$('#li1').click(function(){

			$('#descricao').css('background','url(css/img/impressao_direta.png) no-repeat' );
		});

		$('#li6').click(function(){

			$('#descricao').css('background','url(css/img/uv.png)' ).fadeIn();
		});

		$('#li2').click(function(){

			$('#descricao').css('background','url(css/img/vidro.png)' ).fadeIn();
		});

	});

})(jQuery);
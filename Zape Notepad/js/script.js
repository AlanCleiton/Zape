$("#slide ul").cycle({
	fx: 'fade',
	speed: 2000,
	timeout: 2000,
	});
$(document).ready(function(){
	$("#div_oculta").hide();
	$("#apa").click(function(){
	$("#div_oculta").slideToggle(1500);
	});
	});
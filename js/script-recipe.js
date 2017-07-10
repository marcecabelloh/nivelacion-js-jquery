
$(document).ready( function(){
	
	function esconder(){

		$('.icon-menu-recipe').hide();
	}

	esconder();

	$('.js-show-recipe').click(function(){
			$('.page').removeClass('make');
		});

	$('.js-show-make').click(function(){
			$('.page').addClass('make');
		});



//imprime hola en la consola cuando el documento html esté listo
console.log("holaaaaa");
});


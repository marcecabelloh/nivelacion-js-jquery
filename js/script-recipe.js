
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

	//parte 10 funcionalidad de la flecha 
	//borré el "#" que tenía href en <a class="nav-item js-back-recipe"> cree la variable url que contiene la ruta 
	//llamo la clase de mi a le agrego un atributo href y q siga la url que se le asigna al momento de presionar la flecha 
	var url = "index.html";
	$('.js-back-recipe').attr('href', url);
	

//imprime hola en la consola cuando el documento html esté listo
console.log("holaaaaa");
});



$(document).ready( function(){
	
	function esconder(){

		$('.icon-menu-recipe').hide();
	}

	esconder();

	$('.js-show-recipe').click(function(){
		//funcion que permite quitar clase make (tome otra clase en este caso page  para poder ejecutarla)
		$('.page').removeClass('make');
		//estas funciones me permiten activar y desactivar la clase active cuando apriete un botón u otro
		$('.js-show-recipe').addClass('active');
		$('.js-show-make').removeClass('active');


		});

	$('.js-show-make').click(function(){
		//funcion que permite incluir la clase make (use la clase page q estaba junto a make para ejecutarla)
		//sacar y poner la clase make permite generan el efecto de subir y bajar mostrando la imagen de fondo por completo
		//y locontrario cuando doy click al los botones correspondientes.
			$('.page').addClass('make');
	//estas funciones me permiten activar y desactivar la clase active cuando apriete un botón u otro		
			$('.js-show-make').addClass('active');
			$('.js-show-recipe').removeClass('active');
		});

	//parte 10 funcionalidad de la flecha 
	//borré el "#" que tenía href en <a class="nav-item js-back-recipe"> cree la variable url que contiene la ruta 
	//llamo la clase de mi a le agrego un atributo href y q siga la url que se le asigna al momento de presionar la flecha 
	var url = "index.html";
	$('.js-back-recipe').attr('href', url);
	

//imprime hola en la consola cuando el documento html esté listo
console.log("holaaaaa");
});


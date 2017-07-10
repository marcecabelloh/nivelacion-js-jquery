$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	
//funcion que permite esconder la flecha ubicada en el menu dentro del index.html
	function esconder(){
	$('.icon-arrow-left-alt-index').hide();
	}

	esconder();

/*FUNCIÓN QUE ME PERMITE IMPRIMIR NUEVAS RECETAS DENTRO DEL DIV QUE DICE NEWS*/
	function printNews(){
		$('.noticias').html("NUEVAS RECETAS");
	}

	printNews();

	renderActivities(activities);
	
});



/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	recipesArray.forEach(function(e){
//llamo a recipesArray lo recorro  y a través de una condición determino que si este es
//igual a true lo recorra
		if(e.highlighted == true){
			renderRecipe(e)
		}
	});
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	var caja = $('#caja-vacia');
	caja.append("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'>"+ $(recipe).attr("title") +"</span><span class='metadata-recipe'><span class='author-recipe'>"+ $(recipe).attr("name") +"</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span><img src= 'img/recipes/320x350/"+ $(recipe).attr("name") +".jpg'></a>");
	console.log('Voy a pintar la receta: ', recipe);
}

//llamé a recipe que es el atributo de mi función al cual le asigné los atributos correspodientes para llamar al nombre, titulo y las imagenes de acuerdo al nombre 



/*
* Función que se encarga de pintar todas las actividades
*/
//no logra ocultar el div 
function renderActivities(activities) {
	

	activities.forEach(function(e){
		console.log(e);

	});
	if(activities.length > 0){
		$('.wrapper-message').hide();
		console.log('activities: ', activities);
	}
}
/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	$('.list-activities').append("<a href='#' class= 'item-activity'><span class='attribution'><span class= 'avatar'><img src = '" + $(recipe).attr("userAvatar") + "' class='image-avatar'></span><span class = 'meta'><span class='author'>"+ $(recipe).attr("userName") +"</span> made <span class='recipe'>"+ $(recipe).attr("recipeName") +"</span>: "+ $(recipe).attr("text") +"<span class= 'location'>&mdash;"+ $(recipe).attr("place") +"</span></span></span><div class ='bg-image' style='background-image:url("+ $(recipe).attr("image") + ");'></div></a>");
}


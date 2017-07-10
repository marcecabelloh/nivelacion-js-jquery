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



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


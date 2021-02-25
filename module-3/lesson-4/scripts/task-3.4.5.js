const favouriteRecipe = {
    recipeTitle: 'Nasi Goreng',
    serving: 6 ,
    ingredient: [
        'olive oil',
        'rice',
        'soy sauce'
    ],

    direction: [
        'step 1',
        'step 2',
        'step 3'
    ],



    letsCook: function() {
    console.log( 'to cook ' + favouriteRecipe.recipeTitle);


    }

}


favouriteRecipe.letsCook();
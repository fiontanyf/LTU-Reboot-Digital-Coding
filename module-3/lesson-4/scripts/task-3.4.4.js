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
}

let ingredient = favouriteRecipe.ingredient;

for (let index = 0; index < ingredient.length; index++){
    console.log( ingredient [index]);


}


let direction = favouriteRecipe.direction;

for (let index = 0; index < ingredient.length; index++){
    console.log( direction [index]);


}




// for (var index = 0 ; favouriteRecipe[ingredient.length]; index){
//     console.log(favouriteRecipe.ingredient);


// }

// console.log(favouriteRecipe.ingredient);




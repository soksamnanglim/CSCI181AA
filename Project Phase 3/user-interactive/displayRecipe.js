// This module displays recipes that match with the user's criteria

/*
Revisions:
- Previously, the user would be taken to an external website if they clicked on a recipe from the 3-5 recipes displayed from displayRecipes(). Since the spoonacular api does not provide a external website, users will now not be able to click on any recipes. They have to select a recipe before displaySelected() is invoked.

*/

class displayRecipe {
    displayRecipes(recipes) {
        /*
            query spoonacular api 
            obtain result from spoonacular api
            parse all information from spoonacular api
            display the list of 3-5 top recipes 
            - all recipes will match with the user's criteria

            ask the user for their top choice from the list
            extract the recipe's ID from the information from spoonacular api 
            call displaySelected()
    
            @param recipes: list of 3-5 recipes that match with user's criteria
            @output recipeID: string containing ID of user's selected recipe
        */
    }
    
    displaySelected(recipeID) {
        /*
            use the recipeID from displayRecipes() to query the spoonacular api 
            spoonacular api returns more details for that recipe (recipe instructions, exact amounts)
            display all information for the selected recipe
    
            @param recipeID: string of recipe ID of user's selected recipe found from displayRecipes()
        */
    }
}


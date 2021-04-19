// This module makes calls to the Spoonacular API
class query {
  /**
   * variables holding the information of the spoonacular json data as returned
   */
  spoonList;
  recipeInfo;
  /**
   * 
   * @param {object} data The data object to give the spoonacular API call. A preference object
   * @returns {jsonfile} spoonacularData The jsonfle containing the list of recipes.
   * @throws {error} if the data is functionally incomplete or id number is not valid.
   * 
   * 
   * documentation/tutorials: https://medium.com/rakuten-rapidapi/api-tutorial-spoonacular-api-for-food-and-recipes-bfc1ccb24a9f
   */
  searchRecipes(data) {
    // call the get recipes complex api call.
    // update spoonList to the jsonfile requested
    // return the jsonfile
  }

  /**
   * 
   * @param {number} recipeId. The recipe id to give the spoonacular API call. An integer
   * @returns {jsonfile} spoonacularData The jsonfle containing the information about the recipe.
   * @throws {error} if the data is functionally incomplete or id number is not valid.
   * 
   * 
   * documentation/tutorials: https://medium.com/rakuten-rapidapi/api-tutorial-spoonacular-api-for-food-and-recipes-bfc1ccb24a9f
   */
  getRecipe(recipeId) {
    // call the get recipe information api call.
    // update recipeInfo to the jsonfile requested
    // return the jsonfiile
  }
}
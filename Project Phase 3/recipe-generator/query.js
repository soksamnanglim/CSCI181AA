// This module makes calls to the Spoonacular API
class query {
  /**
   * 
   * @param {object} data The data object to give the spoonacular API call. Either a preference object or a recipeid.
   * @param {number} requestType The type of request
   * @returns {jsonfile} spoonacularData The jsonfle containing the information about the recipe or a lsit of recipes.
   * @throws {error} if the requestType is not 1 or 2
   * @throws {error} if the data is functionally incomplete or id number is not valid.
   * 
   * 
   * documentation/tutorials: https://medium.com/rakuten-rapidapi/api-tutorial-spoonacular-api-for-food-and-recipes-bfc1ccb24a9f
   */
  search(data, requestType) {
    // if requestType is 1
    // call the get recipes complex api call.
    // otherwise if requestType is 2
    // call the get recipe information api call.
  }

  /**
   * Calls Spoonacular Search Recipes Complex API call
   * @param {preferenceObject} data The user's preferences
   * @returns spoonacularData {jsonfile} The jsonfle containing the list of recipes.
   * @throws {error} if the data is functionally incomplete.
   * 
   */
  searchList(data) {
    // calls spoonacular search recipes complex api function 
    // with required and optional parameters in preferenceObject
    // return jsonfile
  }

  /**
   * 
   * @param {recipeId} data The id number of the Spoonacular recipe
   * @returns spoonacularData {jsonfile} The jsonfle containing the information about the recipe.
   * @throws {error} if the id number is not valid.
   */
  searchRecipe(data) {
    // calls spoonacular get recipe information api function
    // using recipeId 
    // return jsonfile
  }
}
class query {
  /**
   * 
   * @param request {request} The request data object. Stores whether it is a list request or recipe information request alongside the relevant data.
   * @returns spoonacularData {jsonfile} The jsonfle containing the information about the recipe or a lsit of recipes.
   * @throws {error} if the requestType is not 1 or 2
   * @throws {error} if the data is functionally incomplete or id number is not valid.
   * 
   * The function below is not going to be exactly how its implemented but somoething like it.
   */
  search(request) {
    if (request.requestType == 1) {
      return this.searchList(request.data)
    } else if (request.requestType == 2) {
      return this.searchRecipe(request.data);
    }
  }

  /**
   * Calls Spoonacular Search Recipes Complex API call
   * @param {preferenceObject} data The user's preferences
   * @returns spoonacularData {jsonfile} The jsonfle containing the list of recipes.
   * @throws {error} if the data is functionally incomplete.
   */
  searchList(data) {
  }
  
  /**
   * 
   * @param {recipeId} data The id number of the Spoonacular recipe
   * @returns spoonacularData {jsonfile} The jsonfle containing the information about the recipe.
   * @throws {error} if the id number is not valid.
   */
  searchRecipe(data) {

  }
}
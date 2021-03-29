const { thisExpression } = require("@babel/types");

/**
 * This is the main class that will generate results for the application and interact between the user interactive interface and the spoonacular api.
 * It will use the parser and the query class to request information from the spoonacular api.
 * 
 */
class recipeGenerator {
  constructor(userPreferences, requestType) {
    this.usrprefs = userPreferences;
    this.requestType = requestType;
    this.recipes = new recipeList();
    this.parser = new parser();
    this.query = new query();
  }

  /**
   * The main function. This function will interpret which request to make and what parse function to call based on what the user interactive interface has requested.
   * 
   * request -> parsing -> response
   */
  main() {

  }

  /**
   * This method will make a call to the spoonacular api based on what the user wants.
   * @parameters none
   * @returns {jsonfile} spoonList
   */
  request() {
  }

  /**
   * Send the requested data back to the user interactive interface
   * @parameters none
   * @returns {null}
   */
  response() {

  }
  /**
   * This method will parse the spoonacular api data into a data object that can be interpreted by the user interactive interface.
   * @parameters {jsonfile} spoonList
   * @returns {object} uiRecipeList
   * 
   */
  parseList(recipesList) { }

  /**
   * This method will parse the spoonacular api data into a data object that can be interpreted by the user interactive interface.
   * @parameters {jsonfile} spoonRecipe
   * @returns {object} uiRecipe
   * 
   */
  parseRecipe() { }

}
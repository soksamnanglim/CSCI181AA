// This module is the main class of the component. It requests information from the Spoonacular API

/**
 * This is the main class that will generate results for the application and interact between the user interactive interface and the spoonacular api.
 * It will use the parser and the query class to request information from the spoonacular api.
 * 
 */
class recipeGenerator {

  /**
   * Create a new recipeGenerator
   * @param {object} userPreferences: A javascript object storing the data of the user preferences.
   * @param {number} recipeID: The spoonacular ID for a recipe's information.
   * Depending on the request, one out of the two parameters above will have a null value;
   * @param {*} requestType: The type of request the user is making. 1 is search for recipes request (list). 2 is get recipe data request (information).
   */
  constructor(userPreferences, recipeID, requestType) {
    this.usrprefs = userPreferences;
    this.recipeID = recipeID;
    this.requestType = requestType;
    this.recipes = new recipeList();
    this.query = new query();
  }

  /**
   * The main function. This function will interpret which request to make and what parse function to call based on what the user interactive interface has requested.
   * 
   * request -> parsing -> response
   */
  generate() {
    // if request type is a recipe list request
    //   create a preference object and parse user preferences

    // Make the proper request to Spoonacular and store the jsonfile as some sort of variable

    // if the request type is a recipe list request
    //  parse the recipesList into an User interactive interface facing object
    // else if the request type is a recipe information request
    //  parse the spoonacular recipe information jsonfile into an user interactive interface facing object.

    // return the requested data object (which will go to the user interactive interface since this class is being called there).
  }

  /**
   * This method will make a call to the spoonacular api based on what the user wants.
   * @parameters {object} preferenceObject or numID
   * @returns {jsonfile} spoonList
   */
  request() {
    // Using the query class
    // if request type is 1 then call get recipes complex with the preferenceObject 
    // else call get recipe information with the recipeID as the parameter.
  }


  /**
   * This method will parse the spoonacular api data into a data object that can be interpreted by the user interactive interface.
   * @parameters {jsonfile} spoonList
   * @returns {object} uiRecipeList
   * 
   */
  parseList(spoonList) {
    // using the recipeList class
    // iterate through the spoonacular recipe list jsonfile
    //  add the recipe to the recipeList as a recipeListItem (parsing involved)
    // 
    // return the recipeList 
  }

  /**
   * This method will parse the spoonacular api data into a data object that can be interpreted by the user interactive interface.
   * @parameters {jsonfile} spoonRecipe
   * @returns {object} uiRecipe
   * 
   */
  parseRecipe() {
    // create a data object uiRecipe
    // iterate through the elements in the spoonacular recipe information jsonfile
    // parse and add the relevant information to the data object uiRecipe

    // return the uiRecipe
  }

}
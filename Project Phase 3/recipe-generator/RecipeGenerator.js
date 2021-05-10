/**
 * This module is the main class of the recipe-generator component. It requests information from the Spoonacular API
 * 
 * PreferenceObject is a class used to parse and store information from the user interactive interfaces preferences array. The preferences array is passed to the RecipeGenerator as a parameter in the constructor.
 * 
 * RecipeList is an array of RecipeListItem. It stores information from a recipe list query.
 * 
 * UiRecipe is a data object storing information about a requested recipe. It stores an array of ingredients, and their corresponding image, amounts, and units.
 * 
 */
const axios = require("axios");
const PreferenceObject = require('./PreferenceObject.js');
const RecipeListItem = require('./RecipeListItem.js');
const UiRecipe = require('./UiRecipe.js');

/**
 * This is the main class that will generate results for the application and interact between the user interactive interface and the spoonacular api.
 * It will use the parser and the query class to request information from the spoonacular api.
 * 
 */
class RecipeGenerator {
  /**
   * Create a new recipeGenerator
   * @param {object} userPreferences: A javascript object storing the data of the user preferences.
   * @param {*} requestType: The type of request the user is making. 1 is search for recipes request (list). 2 is get recipe data request (information).
   */
  constructor(userPreferences) {
    this.usrprefs = userPreferences;
    this.preferences = new PreferenceObject(userPreferences);
    this.diet = this.preferences.diet;
    this.intolerances = this.preferences.intolerances;
    this.excludeIngredients = this.preferences.excludeIngredients;
    this.includeIngredients = this.preferences.includeIngredients;
    this.recipeID;
  }

  /**
   * Starts the call to the API. (Search Recipes Complex) 
   */
  async initialize() {
    // wait for api call request
    this.responseList = await axios.request();
  }

  /**
   * Completes the promise from the initialize method and returns the jsonfile object literal
   * 
   * @returns spoonacular API recipes list
   */
  getRecipesList() {
    return this.responseList.data;
  }

  /**
   * Completes the promise from the initialize method and returns the jsonfile object literal
   * 
   * @returns results array from spoonaccular API recipes list
   */
  getResults() {
    return this.responseList.data.results;
  }

  /**
  * Adds all the recipeListItems to the recipes array.
  * @params None
  * @returns {RecipeListItem[]} Nothing is returned.
  */
  populateRecipes() {
    // store results from the jsonfile
    // initialize an empty array
    // iterate through results array 
    // create new RecipeListItem object with results element
    // add object to array

    // return array
  }

  /**
   * The user interactive interactive calls this method with the parameter of the requested recipe id. This method updates the recipeID property. 
   * 
   * @param {number} recipeId | The identification number of the recipe the user wants to request. 
   */
  setRecipeId(recipeId) {
    this.recipeID = recipeId;
  }


  /**
   * Starts the call to the second API call (Get Recipe Information)
   */
  async initialize2() {
    this.responseRecipe = axios.request();
  }


  /**
   * This method gets the jsonfile of the Get Recipe Information API call by completing the promise.
   * 
   * @returns Jsonfile containing the information of the user requested recipe (Get Recipe Information)
   */
  getRecipeContent() {
    return this.responseRecipe.data;
  }

  /**
   * This method parses the jsonfile from Get Recipe Information and returns a UiRecipe information object containing the relevant data from the jsonfile
   * 
   * @returns {UiRecipe} A data bject containing the relevant data from the jsonfile.
   */
  getUiRecipe() {
    let recipeInfo = this.getRecipeContent();
    var uiRecipe = new UiRecipe(recipeInfo);

    return uiRecipe;
  }
}

module.exports = RecipeGenerator;

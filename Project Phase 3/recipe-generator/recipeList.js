// This module handles the conversion from Spoonacular jsonfile to a list of recipe objects.

class recipeList extends recipeListItem {
  /**
   * Creates an array containing the recipeListItem
   */
  constructor() {
    this.recipes = new Array();
  }

  /**
   * Adds all the recipeListItems to the recipes array.
   * @params {jsonfile} spoonList  The spoonacular API jsonfile containing a list of recipes.
   * @returns {null} Nothing is returned.
   */
  populateRecipes(spoonList) {
  }

  /**
   * Parses the recipes in jsonfile through iteration. Helper function for populateRecipes. 
   * @params {jsonfile} spoonList The spoonacular API jsonfile containing a list of recipes
   * index {number} which recipe to parse
   * @returns {null} Nothing is returned.
   */
  getRecipeItem(spoonList, index) {
  }

  /**
   * returns the recipeList
   * @params None
   * @returns this.recipes {recipeListItem[]}
   */
  getRecipeList() {
  }
}
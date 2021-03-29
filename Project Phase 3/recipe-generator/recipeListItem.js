/**
 * An object representing an individual piece of recipe information in a list of other recipe items. This object will contain the data that will be displayed to the user and if the user is interested in gettinng more information about the recipe, they will click on it and the recipe generator will make a second request to the api for more information about the recipe. Once that is called, the clicked {boolean} will be set to true so that there will not be multiple calls to the api for the same recipeListItem if the user goes back and forth between recipes.
 * 
 * The clicked implementation may be resolved in the user interactve interface component instead.
 * 
 * Instances of the recipeListItem will be created in the * 
 * recipeList class.
 * 
 */
class recipeListItem {
  constructor() {
    this.id = spoonList.id;
    this.usedCount = spoonList.usedIngredientCount;
    this.missedCount = spoonList.missedIngredientCount;
    this.title = spoonList.title;
    this.image = spoonList.image;
    this.imageType = spoonList.imageType;
    this.calories = spoonList.calories;
    this.protein = spoonList.protein;
    this.fat = spoonList.fat;
    this.carbs = spoonList.carbs;
    this.clicked = false;
  }

  /**
   * The user has clicked the recipe
   */
  click() {
    this.clicked = true;
  }
}
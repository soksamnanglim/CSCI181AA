/**
 * Creates a preference data object that stores all the information needed to call Spoonacular get Recipes Complex API call.
 * 
 */
class preferenceObject {
  constructor() {
    // mandatory
    this.limitLicense = false;
    this.offset = 0;
    this.number = 5;
    // optional
    this.query;
    this.cusine;
    this.diet;
    this.includeIngredients;
    this.excludeIngredients;
    this.intolerannces;
    this.type;
    // etc...
  }

  /**
   * The recip search query
   * @param {string} queryType 
   */
  setquery(queryType) { }

  /**
   * countless setmethods will need to be made for all the relevant instance variables of the preference object
   * 
   */

  /**
   * This method changes the number of results that appear.
   * @param {number} num if the user wants more or less results to be generated in their search.
   */
  setResults(num) {
    this.number = num;
  }
}
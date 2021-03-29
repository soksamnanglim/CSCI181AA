/**
 * This class contains the methods that parse the input data.
 * This class will utilize methods from the request class to change the data of the the request.
 */
class parser {
  constructor() {   
    this.data = new requestObj();
  }

  /**
   * This method parses the user preferences object from the user interactive interface. Changes the data in the request object of this class to a preferences object. If parsePref is called, the requestType of this.data should also be set to 1.
   * 
   * If a value in the preferences data object has a specific spoonacular keycode. The translation to spoonacular's keycode must be hardcoded in this function or one of the helper functions. I assume this function will utilize many helper functions.
   * 
   * @parameters {object} usrprefs
   * @returns {null}
   */
  parsePref(usrprefs) {
  }

  /**
   * This method parses the recipe id object from the user interactive innterface. It will change the data in the request object of this class to {number} recipe id
   * 
   * @parameters {number} numID
   * @returns {null}
   * 
   */
  parseID(numID) {
  }
}
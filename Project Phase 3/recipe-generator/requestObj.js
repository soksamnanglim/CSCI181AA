/**
 * Creates a request with the type of request and the data needed for the request.
 * 
 */
class requestObj {
  constructor(requestType, data) {
    this.requestType;
    this.data;
  }

  /**
   * Sets the request type to 1 or 2 
   * @parameters {number} num 1 or 2
   * @returns {null}
   * @throws {error} if num is not 1 or 2
   */
  setRequestType(num) {

  }

  /**
   * Sets the data of the request
   * @param {object} dataObject Either recipe ID or preferences object
   * @returns {null}
   * @throws {error} if dataObject is not recipeId or preferences object
   */
  setData(dataObject) { }
}
/**
 * *****
 * Revisions:
 * 
 * 1. The user's ingredients inventory is now implemented and maintained via
 * ReactNative local storage (key-value pairs).
 * https://www.robinwieruch.de/local-storage-react#local-storage-in-react
 * InventoryManager is no longer a client-server model, so MongoDB / Mongo 
 * shell scripting and the API layer specs have been eliminated. 
 * 
 * 2. Interactions between the U/I and updates for unknown receipt items have
 * been clarified in the pseudocode for addToInventory(). 
 * 
 * 3. InventoryManager now only interacts with the U/I component (does not receive
 * or return information to ReceiptScanner or RecipeGenerator). 
 * 
 * *****
 * Additional notes:
 * 
 * Regarding the first issue raised in my review report: I will still be creating 
 * the categories array in CategoryManager and the foodStates array in FoodStateManager
 * via manual inputting for the 1.0 release. I agree that automation is important;
 * however, it is not a priority and in my research, I have not been able to find
 * open-source databases of mappings from ingredient to ingredient category or 
 * ingredient to ingredient state that fit our needs. 
 * 
 * *****
 * Summary of interactions between all inventory-manager classes:
 * The GroceryItem class is used to construct GroceryItems. A 
 * GroceryItem attribute, the foodState (e.g., solid), is determined
 * by the FoodStateManager class. The UnitConverter class uses each
 * GroceryItem's foodState to convert GroceryItems to StandardGroceryItems
 * (via the StandardGroceryItem class). A StandardGroceryItem attribute,
 * the category (e.g., meat), is determined by the FoodStateManager class.
 * The InventoryManager class enumerates or perform updates to the 
 * user's StandardGroceryItem inventory. 
 * 
 * 
 * The Inventory Manager updates grocery inventory contents. 
 */
class InventoryManager {
    /**
     * Converts receipt items to StandardGroceryItems and adds them
     * to inventory.
     * 
     * Calls the standardizeUnits() method in the UnitConverter class
     * to convert GroceryItems to StandardGroceryItems prior to addition, 
     * then adds the StandardGroceryItems to the user's inventory 
     * (ReactNative local storage).  
     * 
     * @param {Object[]} receiptItems - Array of receipt items 
     * (e.g., {<name>, <qty>, <unit>}) to be added.  
     */
    addToInventory(receiptItems){
      /* convert input (list of objects) to GroceryItem array called groceryItems
         var unknownIngredients = filterUnknownReceiptItems(groceryItems)
         while (unknownIngredients.length != 0) {
            call verifyReceipt() from UserInteractive's Receipt module, 
            save into an array called translations

            loop through each pair of items from unknownIngredients and translations,
            call addTranslations() each time

            unknownIngredients = filterUnknownReceiptItems(groceryItems)
         }

         call standardize units
         then update the ingredients inventory by looping and updating local storage
         // localStorage.setItem('xxx', JSON.stringify(object))
         // const object = JSON.parse(localStorage.getItem('abc')) 
      */
    }

    /**
     * Subtracts GroceryItems from inventory. 
     * 
     * Precondition: all items in input array are recognized. Direct instantiation
     * of GroceryItems using information from recipe items. 
     * 
     * Calls the standardizeUnits() method in the UnitConverter class to convert 
     * GroceryItems to StandardGroceryItems prior to deduction, then subtracts the 
     * StandardGroceryItems from the user's inventory. 
     * 
     * StandardGroceryItem entries will be updated for qty. If the qty to be deducted
     * matches the inventory qty, the StandardGroceryItem key will be deleted. 
     * 
     * If a StandardGroceryItem does not exist or the deduction qty exceeds the
     * inventory qty, errors will be thrown. 
     * 
     * @param {Object[]} groceryItems - Array of receipt items 
     * (e.g., {<name>, <qty>, <unit>}) to be subtracted. 
     * @throws {Error} The StandardGroceryItem does not exist. 
     * @throws {Error} The StandardGroceryItem's deduction qty exceeds the inventory
     * qty. 
     */
    reduceInventory(groceryItems){

    }

    /**
     * Lists the contents of the inventory. 
     * 
     * Enumerates all attributes of each 
     * StandardGroceryItem (name, quantity, foodState, and category) by 
     * looping through local storage (examples in link below).
     * 
     * https://stackoverflow.com/questions/3138564/looping-through-localstorage-in-html5-and-javascript  
     */
    listInventory(){

    }


    /**
     * Translations from receipt item name to GroceryItem name. 
     * <receiptItemName> : <GroceryItem.name>
     * 
     * NOTE: Holds translations from two different stores. For the 1.0
     * release, conflicting translations will not be anticipated/handled,
     * and thus store name will not be a recorded property. 
     */
    receiptItemTranslations = [];

    /**
     * Determines which raw receipt items (from UserInteractive) need to be 
     * modified/verified by the user. Filters the input list and returns a new 
     * list containing all unrecognized receipt items (to undergo user modification). 
     * 
     * Calls translateReceiptItem on each item's name. If the call returns with 'unknown', 
     * the receipt item will be added to the list to return. 
     * 
     * Returns an empty list if all receipt items in the input list are recognized. 
     * 
     * @param {GroceryItem[]} groceryItems - Array of GroceryItems. 
     * @returns - Array of GroceryItems. 
     */
    filterUnknownReceiptItem(receiptItemList){
        
    }
    /**
     * Translates a receipt item name to a GroceryItem name via a lookup in the 
     * receiptItemToGroceryItem array. Returns 'unknown' if not found. 
     * @param {String} - Name of receipt item. 
     * @returns - Name of GroceryItem. 
     */
    translateReceiptItem(receiptItemName){

    }

    /**
     * Adds a key-value mapping (receipt item name, user-translated
     * GroceryItem name) to the receiptItemTranslations array.
     * 
     * @param {String} - Name of receipt item. 
     * @param {String} - User-translated name of GroceryItem. 
     */
    addTranslation(receiptItemName, groceryItemName){

    }

}

// const inventoryManager = new InventoryManager();
// export default inventoryManager;
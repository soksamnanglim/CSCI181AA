/**
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
     * Adds GroceryItems to inventory. 
     * 
     * Pre-condition: filterUnknownReceiptItem() returns an empty list
     * (i.e., all receipt items are translatable and can be directly
     * converted to GroceryItems).
     * 
     * Calls the standardizeUnits() method in the UnitConverter class
     * to convert GroceryItems to StandardGroceryItems prior to addition, 
     * then interacts with the Mongo shell to add the StandardGroceryItems
     * to the user's inventory.  
     * 
     * Mongo shell scripting documentation: 
     * https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/
     * 
     * For every StandardGroceryItem that does not already exist in the inventory, 
     * a new entry will be created. Otherwise, the existing entry will be updated 
     * for qty. 
     * 
     * @param {GroceryItem[]} groceryItems - Array of GroceryItems to be added.  
     */
    addToInventory(groceryItems){
      
    }

    /**
     * Subtracts GroceryItems from inventory. 
     * 
     * Precondition: all items in input array are recognized. Direct instantiation
     * of GroceryItems using information from recipe items. 
     * 
     * Calls the standardizeUnits() method in the UnitConverter class to convert 
     * GroceryItems to StandardGroceryItems prior to deduction, then interacts with
     * the Mongo shell to subtract the StandardGroceryItems from the user's inventory. 
     * 
     * StandardGroceryItem entries will be updated for qty. If the qty to be deducted
     * matches the inventory qty, the StandardGroceryItem entry will be deleted. 
     * 
     * If a StandardGroceryItem does not exist or the deduction qty exceeds the
     * inventory qty, errors will be thrown. 
     * 
     * @param {GroceryItem[]} groceryItems - Array of GroceryItems to be subtracted.
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
     * StandardGroceryItem (name, quantity, foodState, and category).  
     * 
     * @param {StandardGroceryItem[]} standardGroceryItems - Array of StandardGroceryItems.
     */
    listInventory(standardGroceryItems){

    }

    /**
     * Translations from receipt item name to GroceryItem name. 
     * <receiptItemName> : <GroceryItem.name>
     */
    receiptItemTranslations = [];

    /**
     * Determines which items from UserInteractive need to be modified/verified by the user. 
     * Filters the input list and returns a new list to UserInteractive
     * containing all unrecognized receipt items (to undergo user modification). 
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
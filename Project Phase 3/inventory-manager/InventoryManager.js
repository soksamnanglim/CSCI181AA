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
     * Calls the standardizeUnits() method in the UnitConverter class
     * to convert GroceryItems to StandardGroceryItems prior to addition, 
     * then interacts with the Mongo shell to add the StandardGroceryItems
     * to the user's inventory.  
     * 
     * For every StandardGroceryItem that does not already exist in the inventory, 
     * a new entry will be created. Otherwise, the existing entry will be updated 
     * for qty. 
     * 
     * 
     * @param {GroceryItem[]} groceryItems - Array of GroceryItems to be added.  
     */
    addToInventory(groceryItems){
        
    }

    /**
     * Subtracts GroceryItems from inventory. 
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
    listInventory(standardGroceryItems)
}
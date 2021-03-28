/**
 * The Inventory Manager updates grocery inventory contents after grocery
 * shopping and meal consumption. 
 */
class InventoryManager {
    /**
     * Adds groceries to inventory. Calls the standardizeUnits() method in the UnitConverter class
     * to convert GroceryItems to StandardGroceryItems prior to addition. 
     * 
     * If a grocery does not already exist in the inventory, a new grocery entry will be created. 
     * Otherwise, the existing entry will be updated for qty. 
     * 
     * 
     * @param {GroceryItem[]} groceryItems - Array of purchased groceries.  
     */
    addToInventory(groceryItems){
        
    }

    /**
     * Updates inventory by deducting consumed groceries. Consumed groceries will undergo unit
     * standardization prior to deduction. 
     * 
     * Grocery entries will be updated for qty. If the qty to be deducted matches the inventory
     * qty, the grocery entry will be deleted. 
     * 
     * If a grocery does not exist or the deduction qty exceeds the existing grocery qty, 
     * an error will be thrown. 
     * 
     * @param {GroceryItem[]} groceryItems - Array of consumed groceries.
     * @throws 
     * @throws 
     */
    reduceInventory(groceryItems){

    }

    /**
     * Lists the contents of the inventory. 
     * 
     * @param {StandardGroceryItem[]} standardGroceryItems 
     */
    listInventory(standardGroceryItems)
}



// review all of Kampe's questions, new updates. 

// QUESTIONS: 
// do I need to make a grocery class? 
    // according to our architecture diagram, my components will take .json files where 
    // each object is an ingredient. Do I need to convert the file contents in arrays to use? 


// two different types of groceries? 
    // Raw groceries will have name, qty and unit. 
    // Std groceries will have name and qty? what about category?
    // for a new grocery, how do we determine what category it belongs in in addToInventory?

// does jsdoc need to talk about function calls?

// "adequate"? How to interact with Mongo shell? I understand it's an implementation issue, 
// but will other ppl be able to write the code without my explanation?

// error cases? e.g., deducting groceries beyond existing quantities? deducting nonexistent groceries?

// how to denote static conversion array?

/////////
// comment out all my code?
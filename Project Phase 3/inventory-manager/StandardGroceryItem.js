/**
 * Creates a StandardGroceryItem.
 * 
 * A StandardGroceryItem differs from a GroceryItem in that it
 * contains standard units (g for solids, L for liquids). The unit 
 * is implied by the foodState, so a StandardGroceryItem
 * does not have an attribute for unit. 
 * 
 * Each StandardGroceryItem contains a name, quantity, foodState, and category.  
 */
 class StandardGroceryItem {
    constructor(groceryItem) {
        this.name = groceryItem.name;
        this.quantity = groceryItem.quantity;
        this.foodstate = groceryItem.foodState;
        this.category = CategoryManager.lookupCategory(this.name);
    }
}
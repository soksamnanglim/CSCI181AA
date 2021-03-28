/**
 * Creates a grocery item with raw units. 
 * Each GroceryItem contains a name, quantity, unit, and category. 
 */
class GroceryItem {
    constructor(name, quantity, unit) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.category = categoryManager.lookupCategory(this.name);
    }
}

// how to determine whether units are solid or liquid? Additional object attribute?
// create additional StateManager class
/**
 * Creates a grocery item with standard units (g for solids, L for liquids).
 * Each StandardGroceryItem contains a name, quantity and category.  
 */
 class StandardGroceryItem {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.category = categoryManager.lookupCategory(this.name);
    }
}
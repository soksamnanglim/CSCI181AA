/**
 * Creates a GroceryItem. 
 *  
 * Each GroceryItem contains a name, quantity, unit, and foodState. 
 */
class GroceryItem {
    constructor(name, quantity, unit) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.foodState = FoodStateManager.lookupFoodState(this.name);
    }
}
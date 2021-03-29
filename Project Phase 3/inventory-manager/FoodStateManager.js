/**
 * The Food State Manager determines a GroceryItem's foodState
 * (solid or liquid) to assists the Unit Converter with appropriate
 * conversions to standard units. 
 */
 class FoodStateManager {

    /**
     * Array containing mappings from StandardGroceryItem category to foodState. 
     * <GroceryItem-name> : <foodState>
     */
    
    // To-do: populate the array.
    static foodStates = [
        {'chicken breast' : 'solid'},
        {'lettuce' : 'solid'},
        {'orange juice' : 'liquid'},
        {'red wine vinegar' : 'liquid'}

    ]

    /**
     * Determines a GroceryItem's foodstate by performing a lookup in 
     * foodStates array. Returns 'unknown' if the GroceryItem's foodState
     * is not found. 
     * 
     * @param {GroceryItem} groceryItem - A GroceryItem. 
     * @returns {string} - the GroceryItem's foodState.
     */
    lookupFoodState (groceryItem) {
        const foodState = this.foodStates[groceryItem.name.toLowerCase()];
        return foodState || 'unknown';
    }
}
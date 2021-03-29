/**
 * The Category Manager determines the category a StandardGroceryItem belongs to. 
 */
class CategoryManager {

    /**
     * Array of mappings from StandardGroceryItem name to category.  
     * <StandardGroceryItem-name> : <Category>
     */
    
    // To-do: populate the array. 
    static categories = [
        {'chicken breast' : 'meat'},
        {'lettuce' : 'produce'}
    ]

    /**
     * Determines the category a StandardGroceryItem belongs to by 
     * performing a lookup in the categories array. Returns 'unknown' if the
     * StandardGroceryItem's category is not found. 
     *  
     * @param {StandardGroceryItem} standardGroceryItem - A StandardGroceryItem. 
     * @returns {string} - the StandardGroceryItem's category. 
     */
    lookupCategory(standardGroceryItem) {
        const category = this.categories[groceryItem.name.toLowerCase()];
        return category || 'unknown';
    }
}
/**
 * The Category Manager determines the category a StandardGroceryItem belongs to. 
 */
class CategoryManager {

    /**
     * <StandardGroceryItem-name> : <Category>
     */
    
    static categories = {
        'chicken breast' : 'meat',
        'lettuce' : 'produce'
    }

    /**
     * 
     * @param {StandardGroceryItem} standardGroceryItem
     * @returns 
     */
    lookupCategory(standardGroceryItem) {
        const category = this.categories[groceryItem.name.toLowerCase()];
        return category || 'unknown';
    }
}
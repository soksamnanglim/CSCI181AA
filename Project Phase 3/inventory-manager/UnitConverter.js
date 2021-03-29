/**
 * The Unit Converter assists the Inventory Manager by converting GroceryItems to
 * StandardGroceryItems. 
 */
class UnitConverter { 
 
    /**
     * Solid conversions to the standard solid unit (kg).
     * <from-unit> : <multiplyByFactor>
     */
    static solidConversions = [
        {lb : 0.454}, // To-do: populate the array with all solid conversions. 
    ];

    /**
     * Liquid conversions to the standard liquid unit (L).
     * <from-unit> : <multiplyByFactor>
     */
    static liquidConversions = [
        {qt : 0.946}, // To-do: populate the array with all liquid conversions. 
    ];

    /**
     * Converts GroceryItems to std units (kg for solids, L for liquids). Calls convertSolidUnit
     * for each solid grocery and convertLiquidUnit for each liquid grocery.
     * 
     * @param {GroceryItem[]} groceryItems - A GroceryItem array. 
     * @returns {StandardGroceryItem[]} - A StandardGroceryItem array. 
     */
    standardizeUnits(groceryItems){
    
    }

    /**
     * Converts a solid grocery to std unit (kg) via a multiplication factor
     * lookup in the solidConversion array. 
     * 
     * @param {GroceryItem} groceryItem - a solid GroceryItem.
     * @returns {StandardGroceryItem} - a solid StandardGroceryItem. 
     */
    convertSolidUnit(groceryItem){

    }

    /**
     * Converts a liquid grocery to std unit (L) via a multiplication factor
     * lookup in the liquidConversion array. 
     * 
     * @param {GroceryItem} groceryItem - a liquid GroceryItem.
     * @returns {StandardGroceryItem} - a liquid StandardGroceryItem.  
     */
    convertLiquidUnit(grocery){

    }

}
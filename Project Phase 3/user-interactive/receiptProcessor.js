// This module handles all receipt processing

class ReceiptProcessor {
    verifyReceipt = (data) => {
        /*
            call addToInventory in Stephanie's component with data
            @param data: a list of user verified receipt input with name/quantity/units
        */
    }

    translateItem = (item) => {
        /*
            Stephanie's component will call this function for every ingredient
            call updateInventory(item[0], item[1], item[2], item[3])
            @param item: a list representing one ingredient, list contains name, quantity, unit, and category
        */
    }

    translateItemHelper = (changedName, changedQuantity, unit, category) => {
        /*
            created translatedIngredient, an ingredient object with the new name and quantity
            call verifyReceipt(translatedIngredient)
            return translatedIngredient

            @param changedName: updated name of ingredient from user
            @param changedQuantity: updated quantity of ingredient from user
            @param unit: ingredient's unit
            @param category: ingredient's category
            @output translatedIngredient: user verified ingredient
        */
    }

    updateInventory = (name, quantity, unit, category) => {
        /*
            display name, quantity, unit and category of ingredient to user
            ask user to change name and quantity if necessary
            ask user to select a unit and category from a dropdown
            once user presses done button, call translateItemHelper(changedName, changedQuantity, unit, category)
            @param name: original name of ingredient
            @param quantity: original quantity of ingredient
            @param unit: ingredient's unit
            @param category: ingredient's category
        */
    }
}
// This module verifies the list of ingredients used by the user in the recipe
// These ingredients will be deducted from the user's inventory

/*
Revisions: 
- No major revisions. Added more detail to account for a comment from Lucky's review of my design.
*/

class verifyDeducted {
    verifyIngredients(recipeIngredients) {
        /*
            ask user to verify ingredients used in recipe
            user will be shown a list of ingredients and their quantities in the recipe
            - this information will be provided by spoonacular api
            - it will be of the form [[ingredient, quantity], [ingredient, quantity]]

            create verifiedIngredients (return variable), which is equal to recipeIngredients

            user will then be able to update quantities of any items
            if user makes any changes to quantities:
                - store changes 
                - update quantities of ingredients in verifiedIngredients

            user will also be able to add/remove ingredients
            if user makes any changes to ingredients:
                - store changes
                - update ingredients in verifiedIngredients

            call reduceInventory() in the inventory-manager component

            @param recipeIngredients: list of ingredients used in recipe
            @output verifiedIngredients: verified list of ingredients
        */
    }

    verifyIngredientsHelper = (verifiedName, verifiedQuantity, unit) => {
        /*
            if verifiedQuantity == -1: 
                user did not use that ingredient

            check if ingredient with verifiedName exists in inventory
            if it does: check that verifiedQuantity is less than the ingredient's quantity in the inventory
            if it does not: display the correct error message

            create verifiedIngredient, an ingredient object with the correct name and quantity
            add to verifiedIngredients array

            @param verifiedName: user verified name of ingredient
            @param verifiedQuantity: user verified quantity of ingredient
            @param unit: ingredient's unit
            @output displayError: specific error message to display to the user
        */
    }

    verifyDeducted = (name, quantity, unit) => {
        /*
            ask the user to verify the name and quantity of the ingredient
            once user presses done button, call verifyIngredientsHelper(onChangeName, onChangeQuantity, onChangeUnit)
            @param name: original name of ingredient
            @param quantity: original quantity of ingredient
            @param unit: ingredient's unit
        */
    }
}


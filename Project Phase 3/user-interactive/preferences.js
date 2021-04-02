// This module creates the preferences data object

class preferences {
    userPreferences(preferences = true) {
        /*
            ask the user which ingredients they prefer to use for the recipe
            @param preferences: bool variable indicating whether user has clicked "choose preferences" button
        */
    }

    userDietary(chooseDietary = true) {
        /*
            ask the user their dietary restrictions 
            only asked once during set up of account
            @param chooseDietary: bool variable indicating whether user has clicked "set dietary restrictions" button
            @output dietary: list of user's dietary restrictions
        */
    }
    
    createPreferencesObject(preferences, dietary, inventory) {
        /*
            create the preferences data object
            @param preferences: user's preferences as a list
            @param dietary: user's dietary restrictions as a list
            @param inventory: current ingredients in user's inventory as a list
            @output preferences: create a query call to spoonacular and pass the preferences object
        */
    }
}
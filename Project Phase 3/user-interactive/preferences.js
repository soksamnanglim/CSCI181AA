/* This module''s responsbility is to create the preferences data object
It will ask the user for their dietary restrictions and ingredient preferences
This module will use the dietary restrictions, preferences, and current ingredients to create a data object to be passed to the spoonacular api
*/

class preferences {
    userPreferences(choosePreferences = true) {
        /*
            ask the user which ingredients they prefer to use for the recipe
            store ingredients in a list
            list will be compiled with other inputs in createPreferencesObject()

            @param choosePreferences: bool variable indicating whether user has clicked "choose preferences" button
            @output preferences: list of user's ingredient preferences
        */
    }

    userDietary(chooseDietary = true) {
        /*
            ask the user their dietary restrictions 
            only asked once during set up of account
            store dietary restrictions in a list 
            list will be compiled with other inputs in createPreferencesObject()

            @param chooseDietary: bool variable indicating whether user has clicked "set dietary restrictions" button
            @output dietary: list of user's dietary restrictions
        */
    }
    
    createPreferencesObject(preferences, dietary, inventory) {
        /*
            create the preferences data object
            - this object will be of the following format: 
            - [["coconut", "chicken"], ["pork"], ["chicken", "cheese", "milk"]]
            - the first subarray contains user preferences
            - the second subarray contains dietary restrictions
            - the third subarray contains all ingredients in inventory
            create a query call to spoonacular api 
            input to query call will be the preferences object

            @param preferences: user's preferences as a list
            @param dietary: user's dietary restrictions as a list
            @param inventory: current ingredients in user's inventory as a list
            @output preferences: create a query call to spoonacular and pass the preferences object
        */
    }
}
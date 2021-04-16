/* 
This module''s responsbility is to create the preferences data object
It will ask the user for their dietary restrictions and ingredient preferences
This module will use the dietary restrictions, preferences, and current ingredients to create a data object to be passed to the spoonacular api
*/

class preferences {
    constructor() {
        // keeps track of how many times userDietary() has been called
        this.dietary = 0;
    }

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
            ask the user for their dietary restrictions 
            only asked once during set up of account (sets this.dietary == 1)
            store dietary restrictions in a list 
            list will be compiled with other inputs in createPreferencesObject()
            
            when this function is called:
            - check this.dietary 
            - if this.dietary == 0: increment, ask user for dietary restrictions
            - if this.dietary > 0: dietary restrictions have already been set

            @param chooseDietary: bool variable indicating whether user has clicked "set dietary restrictions" button
            @output dietary: list of user's dietary restrictions
        */
    }
    
    createPreferencesObject(preferences, dietary) {
        /*
            create the preferences data object
            - this object will be of the following format: 
            [["ingredients to include"], ["ingredients to exclude"], ["intolerances"], ["diets"]]
            create a query call to spoonacular api 
            input to query call will be the preferences object

            @param preferences: user's preferences as a list
            @param dietary: user's dietary restrictions as a list
            @output preferences: create a query call to spoonacular and pass the preferences object
        */
    }
}
/* 
This module's responsbility is to create the preferences data object
It will ask the user for their dietary restrictions and ingredient preferences
This module will use the dietary restrictions, preferences, and current ingredients to create a data object to be passed to the spoonacular api
*/

export default function Recipe() {
    const [ diet, setDiet ] = useState("");
    const [ include, setInclude ] = useState("");
    const [ exclude, setExclude ] = useState("");
    const [ allergy, setAllergy ] = useState("");

    /*
        ask user to pick their diet from a drop down
        ask user to pick ingredients to include in the recipe from all ingredients in their inventory
        ask user to pick ingredients to exclude in the recipe from all ingredients in their inventory
        ask user to pick ingredients that cause allergies
        
        call lucky's component with [diet, include, exclude, allergy]
        display recipes 
    */
}
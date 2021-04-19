// This module handles all user interactions regarding receipts

class receipt {
    uploadReceiptCamera() {
        /*
            ask the user to use the camera and take a picture of the receipt
            save the receipt
            use the receipt to call the OCR component to process it

            various tutorials for uploading images in react native:
            - https://heartbeat.fritz.ai/how-to-upload-images-in-a-react-native-app-4cca03ded855
            - https://tech-blog.maddyzone.com/reactnative/how-to-upload-image-in-react-native-app

            documentation: https://www.npmjs.com/package/react-native-photo-upload

            @output receiptFilePath: string variable for receipt's file path
        */
    }

    uploadReceiptGallery() {
        /*
            ask the user to upload their receipt from their phone gallery
            save the receipt
            use the receipt to call the OCR component to process it

            various tutorials for uploading images in react native:
            - https://heartbeat.fritz.ai/how-to-upload-images-in-a-react-native-app-4cca03ded855
            - https://tech-blog.maddyzone.com/reactnative/how-to-upload-image-in-react-native-app

            documentation: https://www.npmjs.com/package/react-native-photo-upload

            @output receiptFilePath: string variable for receipt's file path
        */
    }
    
    verifyReceipt(data) {
        /*
            ask the user to verify receipt ingredients from OCR
            input will look like ["targe eggs", "safew milk"] 
            the user will see these ingredients on the screen
            - will be able to modify the ingredients
            - for example: change "targe eggs" to "eggs" or "target eggs"
            updated ingredients will be saved as a new list

            if data.length == 0:
            - InventoryManager recognized all of the items on the receipt
            - this is to avoid repeatedly asking for user modification for the same ingredients 
            - no user verification/modification needs to happen 

            otherwise, the list will contain unrecognized items
            show list to user
            user will make any modifications to ingredients or quantity

            call addToInventory() in inventory-manager component

            @param data: a list of user's receipt input with name/quantity/units
            @output correctData: an updated list of user verified ingredients
        */
    }
}

// This module handles all user interacts regarding receipts

class receipt {
    uploadReceipt(upload = true) {
        /*
            ask the user to upload a receipt
            save the receipt
            use the receipt to call the OCR component to process it
            various tutorials for uploading images in react native:
            - https://heartbeat.fritz.ai/how-to-upload-images-in-a-react-native-app-4cca03ded855
            - https://tech-blog.maddyzone.com/reactnative/how-to-upload-image-in-react-native-app

            documentation: https://www.npmjs.com/package/react-native-photo-upload

            @param upload: bool variable indicating whether user has clicked "upload receipt" button
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

            @param data: a list of user's receipt input with correct name/quantity/units
            @output correctData: an updated list of user verified ingredients
        */
    }
}

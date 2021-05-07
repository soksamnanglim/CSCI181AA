// This module handles all user interactions regarding receipts

/* 
Revisions: 
- In a discussion with Kenneth, he mentioned that it would be easier to create separate buttons for "upload receipt from camera" and "upload receipt from gallery". These are now two separate functions.

- For verifyReceipt(), a concern was that users will not have the chance to check for errors in the case of automatic matching. We want to limit how much work the user has to do. Thus, in the case of automatic matching, we will assume everything is correct and not display the list to the users. 
*/

class Receipt {

    // Removed this function since we are running the app in a web browser and will not be able to access the camera. 
    /*
    uploadReceiptCamera() {
            ask the user to use the camera and take a picture of the receipt
            save the receipt
            use the receipt to call the OCR component to process it

            various tutorials for uploading images in react native:
            - https://heartbeat.fritz.ai/how-to-upload-images-in-a-react-native-app-4cca03ded855
            - https://tech-blog.maddyzone.com/reactnative/how-to-upload-image-in-react-native-app

            documentation: https://www.npmjs.com/package/react-native-photo-upload

            @output receiptFilePath: string variable for receipt's file path
    }
    */

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
}

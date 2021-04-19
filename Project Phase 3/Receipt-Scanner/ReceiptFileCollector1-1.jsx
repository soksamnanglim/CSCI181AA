/* 
Revisions: 
We agreed to get rid of the optionListenerfromUI variable so the 
UI component will directly call the methods pickFromCamera and pickFromGallery.
I'll got rid of the trivial methods getReceiptURI and getImageType 
and instead assigned the receipt URI to a public variable direct
from the pick routine results.


This class is accessed bythe UI to guide the process of picking a 
receipt file by lauching the camera to take a photo
or by choosing from the existing photos in the gallery 
gallery, 
For each picker method, we'll first request permission to access
the camera or gallery from the user and proceed 
upon an authorisation

 The receiptURI from this class is accessed by ReceiptDataExtractor for use as a parameter
 in the veryfi API.
*/

// run install for the image picker package
// https://docs.expo.io/versions/latest/sdk/imagepicker/
expo install expo-image-picker;

// import image picker as imagePicker
import * as ImagePicker from 'expo-image-picker'; 

// import permissions
import * as Permissions from 'expo-permissions'; 


class receiptFileCollector {}
   // set a variable to hold collected receipt file URI
  // and the image type
   Public String receiptURI; 

   // empty constrcutor for now
   constructor() 

   

   pickFromGallery (); {}
    /* param: None
    return: None

    we'll run an async method that 
    requests permission from user for gallery accesss
    if permission is granted, it launches the image library and set's the
    necessary image requirements(mediaType, aspectRatio e.t.c), then we'll assign
    the result 

    else if permission is not granted, flag an alert message
    */
    //PSEUDO
    // request permission from user using the package Permissions and 
    // store in a variable
    granted = await Permissions.askAsync(Permissions.CAMERA_ROLL) 

    // if permission is granted, launch the image library 
    // and assign the call to uploadProperties
    
    uploadProperties = await ImagePicker.launchImageLibraryAsync() 

    // set receiptURi
    receiptURI = uploadProperties.getReceiptURI()


    // else throw an alert message on the console log

    Alert.alert("permission is needed to access the gallery") 


    pickFromCamera(); {}

    /* None:
    return None 

    we'll run an async method that 
    requests permission from user for camera accesss
    if permission is granted, it launches the camera, and sets the
    necessary image requirements(mediaType, aspectRatio e.t.c), then we'll assign 
    the result to the public variable receiptFileData

    else if permission is not granted, flag an alert message
    */

    //PSEUDO 

    // get permission from user using the package Permissions and 
    // store in a variable
    granted = await Permissions.askAsync(Permissions.CAMERA)

    // if permission is granted, launch the image library 
    // and assign the call to uploadProperties
    uploadProperties = await ImagePicker.launchCameraAsync()

     // set receiptURi
    receiptURI = uploadProperties.getReceiptURI()


    // else throw an alert message on the console log

    Alert.alert("permission is needed to access the camera") 

    
    






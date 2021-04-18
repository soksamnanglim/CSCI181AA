/* 
This class links to the UI to guide the process of picking up
a receipt file by scanning or by choosing from the existing 
gallery, 
For each picker method, we'll first request permission to access
 the camera or gallery from the user and proceed 
 upon an authorisation

 The class ReceiptDataExtractor access this call to use 
 the receipt URI
*/

// run install for the image picker package
/*expo install expo-image-picker */

// import image picker as imagePicker
/* import * as ImagePicker from 'expo-image-picker'; */

// import permissions
/* import * as Permissions from 'expo-permissions'; */



class receiptFileCollector {}
 /*  context: user intent to input a receipt file, 
 with constructors for Gallery case and Camera case
    */

   // instantiate variable to hold user choice from the UI component
  /* String optionListenerFromUI */

   // set a variable to hold collected receipt file data/attributes
   /* public Object receiptFileData */

   pickFromGallery (optionListenerFromUI); {}
    /* param: String optionListenerFromUI 
    return: receiptDatafile: this log will have the selected file info/properties
    including the file URI

    if the optionListernerFromUI is String gallery, we'll run an async method that 
    requests permission from user for gallery accesss
    if permission is granted, it launches the image library and set the
    necessary image requirements(mediaType, aspectRatio e.t.c), then we'll assign
    the result to the public variable receiptFileData

    else if permission is not granted, flag an alert message
    */
    //PSEUDO

    // if the optionListenerFromUI is "gallery" 

    // get permission from user using the package Permissions and 
    // store in a variable
    /* granted = await Permissions.askAsync(Permissions.CAMERA_ROLL) */

    // if permission is granted, launch the image library 
    // and assign the call to receiptFile Dta
    /* receiptFileData = await ImagePicker.launchImageLibraryAsync() */

    // else throw an alert message on the console log

    /* Alert.alert("permission is needed to access the gallery") */


    pickFromCamera(optionListenerFromUI); {}

    /* param: String optionListenerFromUI
    return : Object datalog: this log will have the captured file info/properties
    including the file URI. 


    if the optionListernerFromUI is String camera, we'll run an async method that 
    requests permission from user for camera accesss
    if permission is granted, it launches the camera, and sets the
    necessary image requirements(mediaType, aspectRatio e.t.c), then we'll assign 
    the result to the public variable receiptFileData

    else if permission is not granted, flag an alert message
    */

    //PSEUDO 
    // if the optionListenerFromUI is "camera" 

    // get permission from user using the package Permissions and 
    // store in a variable
    /* granted = await Permissions.askAsync(Permissions.CAMERA) */

    // if permission is granted, launch the image library 
    // and assign the call to receiptFile Dta
    /* receiptFileData = await ImagePicker.launchCameraAsync() */

    // else throw an alert message on the console log

    /* Alert.alert("permission is needed to access the camera") */


    getReceiptURI(); {}
    /* param: None
    return: String URI
    This method will access the receiptURI from the 
    Object receiptFIleData. 
    */

    /* return  receiptFileData.URI */


    getImagetype(); {}
    /* param: None
    return: String Imagetype
    This method will access the imagetype property from 
    the Object receiptFileData */

    /* return receiptFIleData.URI */






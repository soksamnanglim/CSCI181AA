/* 
This class will link to the UI to guide the process of picking up
a receipt file by scanning or by choosing from the existing gallery

we'll import:
-ImagePicker as ImagePicker from expo-image-picker package
-DocumentPicker as DocumentPicker from *** our initial implemantation
 will strictly only make use of receipt files from gallery and the ones
 captured on camera
-Perms as Permission from expo-permissions
*/


class receiptFileCollector {}
    /*
     context: user intent to input a receipt file
     
    these variables will be public:

    Boolean optionListenerFromUI
    Object receiptFile
    */

    receiptFileCollector;{}
     /* the constructor will be non parametarized for now, it will instantiate 
     a holder variable for the receiptFile object */


    pickFromGallery (optionListenerFromUI); {}
    /* input: Boolean optionListenerFromUI 
    output: Object datalog: this log will have the selected file info
    including the file URI

    This method will only execute if the optionListernerFromUI is true
    it is an async method that requests permission from user for 
    camera roll access
    if permission is granted, it launches the image library 
    and enforces mediatype as images only, sets allowesEditing 
    to true, aspect ratio to 1:1 and quality to 1
    then it will assign the data log to the receiptFile variable

    else if permission is not granted, flag an alert message
    */


    pickFromCamera(optionListenerFromUI); {}

    /* input: Boolean optionListenerFromUI
    output/return : Object datalog: this log will have the captured file info
    including the file URI. 

    This method will only excetue if the optionListenerFromUI is False
    It is an async method requests permission from user for camera access
    If permission is granted, it launches the camera and enforces mediatype 
    as images only, sets allowsEditing to true, aspect ratio to 1:1, and quality: 1
    we'll assign the data log to the receiptFile variable
    else if permission is not granted, it will flag an alert message

    */

    getReceiptURI(); {}
    /* input: None
    return: String URI
    This method will access the receiptURI from the Object receiptFIle that
    either the two methods above will log. 
    */

    getImagetype(); {}
    /* input: None
    return: String Imagetype
    This method will access the imagetype property from the Object receiptFile


}
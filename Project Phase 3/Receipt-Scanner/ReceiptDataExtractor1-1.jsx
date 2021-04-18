/*
This class will perform a client call to the verify API, 
using a list of categories, and a receipt URI,
the methods will extract data from the receip
with the output as a Json file.

The json file is used by the ingredient database component. 
*/

// import the veryfi package
/* import veryfi */

class ReceiptDataExtractor {}

// register and obtain the verify API keys
/* String client_id =  */
/* String client_secret =  */
/* String username = */
/* String api_key =  */

// set up a variable to hold the veryfi API Client call 
/*private client = veryfi.Client(client_id, client_secret, username, api_key) */ 

//hold the receipt URI from filecollector in a variable
/*public Statitic String receiptURI = receiptFilecollector.getreceiptURI() */

// create a public array for categories i.e food, alcohol, e.t.c, 
/*public String array[] categories = ["food", "alcohol", "beverages"] */

// instantiate a jsonobject to hold the outputted receipt data
/*public JsonObject receiptData */


processReceipt(reciptURI, categories); {}
/*
parameters: receiptURI as a string, categories as an array
make a client call to the API using the method process_document on the client with the 
receipt URI and the categories, it will assign the output to the 
variable receiptData */

// parse the receipt URI on the client call
/* client.process_document(receiptURI, categories) */

// asign it to the variable receipr data 
/* receiptData = client.process_document(receiptURI, categories) */


getreceiptData(); {}
/* 
returns receiptData variable which holds the Json file
*/

// return the variable receiptData 



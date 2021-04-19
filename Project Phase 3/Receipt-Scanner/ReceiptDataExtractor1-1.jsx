/*
Revisions:
We decided that this class will return a list of all of the
receiptItem (with properties Description, Quantity, Amount, Units, category)
extracted from a receipt.

To generate this list, I will have to iterate through the Json file output
and access the raw properties available on each json object for these properties



This class will perform a client call to the verify API, 
using a list of categories(this list is useful for veryfi to map
the receipt items into categories i.e food, alcohol e.t.c), and a receipt URI.
The methods in these class will create a list of receiptItems which will be accessed
by our different component - the inventory manager 
*/

// import the veryfi package
// https://www.veryfi.com/
import veryfi 

class ReceiptDataExtractor {}


//hold the receipt URI from filecollector in a variable
String theReceiptURI = receiptFilecollector.reciptURI 

 // set up a variable to hold the veryfi API Client call 
Object client = veryfi.Client(client_id, client_secret, username, api_key)  

// create a public array for categories i.e food, alcohol, e.t.c, 
String array[] categories = ["food", "alcohol", "beverages"] 

// instantiante a JSON receipt file 
JSON initialReceipt;

// instantiate receiptItemList to hold all the receipt items from the data extracted
//from receipt
receiptItem array[] receiptItemList;

// empty constructor for now
constructor ()


processReceipt(reciptURI, categories); {}
/*
parameters: receiptURI as a string, categories as an array
return: None

make a client call to the API using the method process_document(built on veryfi) 
on the client variable with the receipt URI and the categories as paremeter, 
we'll then assign the output to the variable initialReceipt */

// using the receipt and the categories list, process the receipt and assign it 
//to receipt jsonFile 
client.process_document(receiptURI, categories)

// asign it to the variable initialReceipt 
initialReceipt = client.process_document(receiptURI, categories) 


createReceiptItemList(JSON initialReceipt); {}
/* 
param: extracted receipt data in a Json file
return: None

Iterate through the json - initialReceipt and access the needed attributes 
and check for any null case, we'll set an empty string instead for a null attribute

for each json object in the file, create a receiptItem and call the set
methods to update the properties
add each of the new receiptItems to the receiptItemList

*/


getReceiptItemList();  {

    return receiptItemList
}



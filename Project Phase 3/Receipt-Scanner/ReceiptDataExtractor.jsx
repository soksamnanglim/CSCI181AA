/*
This class will perform the client call to the veryfi API
and will contain the methods that allow for the manipulation 
of the data for the required properties. 

we'll import:
import veryfi or install veryfi SDK

global variables: (obtain this after registering on the veryfi website(hub.veryfi))
String client_id
String client_secret
String username
String api_key
*/



/*

private Object client
public Statitic String receiptURI

// set a list of categories i.e food, alcohol, e.t.c, 
the veryfi API is trained to create more categories on receipt items
public array[] categories

public receiptData
*/

class ReceiptDataExtractor{}
/* 
context: parse uploaded receipt URI into the verifi API for
data extraction
*/ 

processReceipt(reciptURI, categories); {}

/*
inputs: receiptURI as a string, categories as an array

make a client call to the API using the method process_document on the client with the 
receipt URI and the categories, it will assign the output to the 
variable receiptData */



getreceiptData(); {}
/* 
returns receiptData variable which holds the JSON file
*/


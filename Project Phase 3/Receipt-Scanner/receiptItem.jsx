/*
This new class will act like a data container for processed receipt
data and will create items with properties:
Description, Quantity, Amount, Units, category 
*/

class receiptItem {}

String description;
String quantity;
String amount;
String units;
String category;


  constructor()

  setDescription(desc)
  this.description = desc

  setQuantity(quant)
  this.quantity = quant

  setAmount(inputamount)
  this.amount = inputamount

  setUnits(inputunits)
  this.units = inputunits

  setCategory(cat)
  this.category = cat

  getItemDescription() 
  return description

  getItemQuantity()
  return quantity

  getItemAmount()
  return amount

  getItemCategory()
  return category

  getItemUnits()
  return units
function Appendix(doc, KeyValueArray){
  
  const docBody = doc.getBody()
  
  var title = TitleMaker(docBody, "Appendix", "LEFT")



  var Cells = []
  
  for([k,v] in KeyValueArray){
    Cells.push([k,v][1])
  }
  
  Cells.splice(0,0,["Appendix: Your Questions","Response"])
  
  
    Cells.splice(1,0,["Insert Field",""])
    Cells.splice(7,0,["",""])
    Cells.splice(8,0,["Insert Field",""])
    
    Cells.splice(14,0,["",""])
    Cells.splice(15,0,["Insert Field",""])
    
    Cells.splice(21,0,["",""])
    Cells.splice(22,0,["Insert Field",""])
    
    Cells.splice(28,0,["",""])
    Cells.splice(29,0,["Insert Field",""])
    
    Cells.splice(35,0,["",""])
    Cells.splice(36,0,["Insert Field",""])
    
    Cells.splice(42,0,["",""])
    Cells.splice(43,0,["Insert Field",""])
  
  
  var table = docBody.appendTable(Cells);
  
  var tableStyles = {};
  tableStyles[DocumentApp.Attribute.BOLD] = false;
  tableStyles[DocumentApp.Attribute.FONT_SIZE] = 11;
  table.setAttributes(tableStyles)
  table.setBorderWidth(0.5)
  table.setColumnWidth(1, 120)
  
    docBody.appendPageBreak()
  
  
  
}
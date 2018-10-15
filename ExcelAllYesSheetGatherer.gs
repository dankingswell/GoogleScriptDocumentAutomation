function ExcelAllYesSheetGatherer(){
  
  // get shareable link in Gdrive
  var ss = SpreadsheetApp.openById("Sheet ID");

  // Get the name of this SS
  var name = ss.getName();  // Not necessary 

  var Responses = [];
  
  var sheet = ss.getSheetByName('Sheet Name'); // or whatever is the name of the sheet 
  
  var range = sheet.getDataRange(); 
  
  var data = range.getValues();
  
  
  for(var i = 0; i < data.length; i ++){
     Responses.push(data[i][1])
  }
  
  Logger.log(Responses)
  return Responses
   

}


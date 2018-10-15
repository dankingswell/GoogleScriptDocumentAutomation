function ExcelQuestionResponseGatherer(){
  
  // get shareable link in Gdrive
  var ss = SpreadsheetApp.openById("Sheet ID");

  // Get the name of this SS
  var name = ss.getName();  // Not necessary 

  var QuestionResponses = [];
  
  // var data = Range.getCell(0, 0);
  var sheet = ss.getSheetByName('FeedbackTest'); // or whatever is the name of the sheet 
  
  var range = sheet.getDataRange(); 
  
  var data = range.getValues();
  
  
  for(var i = 0; i < data.length; i ++){
     QuestionResponses.push(data[i][1])

  }
  
  //Logger.log(QuestionResponses)
  return QuestionResponses
   

}



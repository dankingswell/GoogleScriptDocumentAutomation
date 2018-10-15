function createAndSendDocument(formData) {

  
  // create new document
  var doc = DocumentApp.create("Title for Doc" + new Date() );
  
  
  // Data to be passed
  var Answers = AnswerCleaner(formData.values);
  var Questions = FormQuestionGatherer()
  var QuestionResponses = ExcelQuestionResponseGatherer()
  var KeyValueResponseArray = ResponseArrayGenerator(Questions,Answers)
  var GapAnalysisKeyValueArray = GapAnalysisMapper( Answers , ExcelQuestionResponseGatherer()) 

  
  //Make Headers 
  makeHeaders(doc);

  //Create title Page
  TitlePage(doc);
 
  // Introduction
  Introduction(doc);
  
  // Gap AnalysisGraph
  GapAnalysisGraph(doc, GapAnalysisKeyValueArray )
  
  //Conclusions
  Conclusions(doc)
  
  //Apendix - Questions & Answers
  Appendix(doc, KeyValueResponseArray) 
  
  // Further Information
  FurtherInformation(doc)
   
  
  // Get the URL of the document.
  var url = doc.getUrl();

  // Get the email address of the active user - that's you.
  var email = Session.getActiveUser().getEmail();

  // Get the name of the document to use as an email subject line.
  var subject = doc.getName();

  // Append a new string to the "url" variable to use as an email body.
  var body = "image test" + url

  // Send yourself an email with a link to the document.
  //GmailApp.sendEmail(email, subject, body);
}





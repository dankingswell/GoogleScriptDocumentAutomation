function ResponseArrayGenerator(Questions, Answers) {
  

 var Questions = FormQuestionGatherer()
 var ResponseArray = []
 
 Logger.log(Answers)
  for(var i = 0; i < Questions.length; i++){
    ResponseArray.push([Questions[i], Answers[i]])
  }
  
  //Logger.log(ResponseArray)
return ResponseArray
}

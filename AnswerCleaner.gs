function AnswerCleaner( Answers ) {
  
  var AnswersArray = []
  for(var i = 0; i < Answers.length; i++){
    if(Answers[i] == "Yes" || Answers[i] == "No" || Answers[i] == "Unsure"){
    AnswersArray.push( Answers[i])
    }
  }
  return AnswersArray;
}

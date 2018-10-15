function GapAnalysisMapper(Answers, Conclusions){
  
  var ConclusionsMapped = [[],[],[],[],[],[],[]] 
  

  var questionSet= 0;
  for(var i = 0 ; i < Answers.length ; i ++){
    
    if(i % 5 == 0 && i != 0){
        questionSet = i /5
      }
    
    if(Answers[i]=="No" || Answers[i] == "Unsure"){
      if(ConclusionsMapped[questionSet] == null ){
        ConclusionsMapped.push([])
      }
        ConclusionsMapped[questionSet].push(Conclusions[i])
      }

    }
  

  return ConclusionsMapped
}
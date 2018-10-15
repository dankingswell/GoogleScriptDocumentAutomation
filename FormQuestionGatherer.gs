function FormQuestionGatherer() {
  
  // configure to relevant form
   var form = FormApp.openById('Form ID');
   var items = form.getItems()

  var Questions = [];
  for(var i= 0; i < items.length; i++){
  
    if(items[i].getType() == "MULTIPLE_CHOICE"){
      Questions.push(items[i].getTitle())
    }
  }
  return Questions
}

function ParagraphMaker(doc, text, optionalURL){ 
  
  const fontSize = 12;
  const styles = {};
  
  styles[DocumentApp.Attribute.BOLD] = false;
  styles[DocumentApp.Attribute.FONT_SIZE] = fontSize;
  
  var para; 
  if(optionalURL != null){
  para = doc.appendParagraph(text + "\n").setLinkUrl(optionalURL)
  }
  
  else{
  para = doc.appendParagraph(text + "\n")
  }
  para.setAttributes(styles)
  
}
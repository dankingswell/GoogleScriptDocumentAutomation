function TitlePage(doc){
  
  var CentralLogo = makeLogo(doc.getBody(),300,300);
  var CentralLogoStyles = {};
 
  CentralLogoStyles[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.CENTER;
  
  CentralLogo.getParent().setAttributes(CentralLogoStyles);
  
  
  var Title = doc.appendParagraph("Title");
  var TitleStyles = {};
  
  TitleStyles[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.CENTER;
  TitleStyles[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
  TitleStyles[DocumentApp.Attribute.FONT_SIZE] = 24;
  TitleStyles[DocumentApp.Attribute.BOLD] = true;
  
  Title.setAttributes(TitleStyles);
  
  var date = new Date()
  var Cells = [
    
    ["Date Issued:", date.getDay()+ "/" + date.getMonth() + "/"+ date.getYear()  ],
    ["issued by", "Issuer"],
    ["Secondary", "Info"]

  ]
  
  var table  = doc.getBody().appendTable(Cells);
  const tableStyles= {};
  tableStyles[DocumentApp.Attribute.BOLD] = false;
  tableStyles[DocumentApp.Attribute.FONT_SIZE] = 14;
  table.setAttributes(tableStyles)
  
  
  doc.appendPageBreak()
}
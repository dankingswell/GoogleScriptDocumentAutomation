
function GapAnalysisGraph(doc, Analysis){

 const AllYesResponses = ExcelAllYesSheetGatherer(); 
 const docBody = doc.getBody()
 
 const IntroTitle = TitleMaker(docBody, "Gap Analysis Graph", "LEFT");
  
 const para1 = ParagraphMaker(docBody, "Info");
 

   
const Field1 = Analysis[0].join("\n")
const Field2 = Analysis[1].join("\n")
const Field3 = Analysis[2].join("\n")
const Field4 = Analysis[3].join("\n")
const Field5 = Analysis[4].join("\n")
const Field6 = Analysis[5].join("\n")
const Field7= Analysis[6].join("\n")
  

  var Cells = [
    
    ["Field1", Field1 ],
    ["Field2", Field2],
    ["Field3", Field3],
    ["Field4",Field4],
    ["Field5",Field5],
    ["Field6",Field6],
    ["Field7",Field7]

  ]
 
  
  for(var i=0 ; i < Cells.length; i++){

    
      if(Cells[i][1].length == "" ||Cells[i][1].length == "\n" ){
        Cells[i][1] = AllYesResponses[i]
        
      }
    }
  
  var titleCellStyles = {};
  titleCellStyles[DocumentApp.Attribute.BOLD] = true;
  var table  = doc.getBody().appendTable(Cells);
  
   table.getCell(0,0).setAttributes(titleCellStyles)
   table.getCell(1,0).setAttributes(titleCellStyles)
   table.getCell(2,0).setAttributes(titleCellStyles)
   table.getCell(3,0).setAttributes(titleCellStyles)
   table.getCell(4,0).setAttributes(titleCellStyles)
   table.getCell(5,0).setAttributes(titleCellStyles)
   table.getCell(6,0).setAttributes(titleCellStyles)
  
  const tableStyles= {};
  tableStyles[DocumentApp.Attribute.FONT_SIZE] = 12;
  table.setAttributes(tableStyles)
  table.setBorderWidth(0.5)
  table.setColumnWidth(0, 130)
  
  doc.appendPageBreak()

}
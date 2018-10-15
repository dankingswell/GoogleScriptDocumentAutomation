
function makeLogo(doc, height, width){
  
  // Insert an image from Google Drive
  var img    = DriveApp.getFileById("Logo ID")
  var image  = img.getBlob();
  
  var Logo = doc.insertImage(0, image);
  Logo.setWidth(width);
  Logo.setHeight(height);

  return Logo
}

const project_db = SpreadsheetApp.openByUrl("<Your google sheet url here>");

const project_db_name = project_db.getSheetByName("<Sheet_name>");

function doGet() {
  let obj = {};
  let data = project_db_name.getDataRange().getValues();
  obj.content = data;
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

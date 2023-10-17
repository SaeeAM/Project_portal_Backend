const project_formdb = SpreadsheetApp.openByUrl("<Your google sheet url here>");
const project_formdb_name = project_formdb.getSheetByName("<Your Google sheet name here>");

function doPost(e) {
  let data = e.parameter;
  project_formdb_name.appendRow([data.name, data.mobile, data.chooseLang, data.msg]);
  return ContentService.createTextOutput(data.chooseLang);
}

// Google Apps Script for Adgro Hair Sivakasi leads.
// Setup: open the Google Sheet > Extensions > Apps Script > paste this file >
// Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone) >
// copy the /exec URL into GOOGLE_APPS_SCRIPT_URL in .env.local.
//
// Values are written by COLUMN NAME (matched to the header row), not by position,
// so reordering or adding columns in the sheet never puts data under the wrong heading.

var DEFAULT_SHEET = 'adgro-sivakasi-leads';
var HEADERS = ['Timestamp', 'Form Name', 'Source', 'Name', 'Phone', 'Email', 'Concern', 'URL', 'TeleCRM'];

// header name (lower-case) -> field in the JSON sent by /api/submissions
var FIELD_FOR_HEADER = {
  'timestamp': 'timestamp',
  'form name': 'formName',
  'source': 'source',
  'name': 'name',
  'phone': 'phone',
  'email': 'email',
  'concern': 'concern',
  'url': 'pageUrl',
  'telecrm': 'telecrm'
};

function getSheet_(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Makes sure every expected header exists; missing ones are added at the end.
function ensureHeaders_(sheet) {
  var lastCol = Math.max(sheet.getLastColumn(), 1);
  var existing = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  var lower = existing.map(function (h) { return String(h).trim().toLowerCase(); });

  HEADERS.forEach(function (h) {
    if (lower.indexOf(h.toLowerCase()) === -1) {
      var col = sheet.getLastColumn() + 1;
      sheet.getRange(1, col).setValue(h).setFontWeight('bold');
      existing.push(h);
      lower.push(h.toLowerCase());
    }
  });
  return existing;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Receives a lead from the Next.js API (/api/submissions)
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    var data = JSON.parse(e.postData.contents);
    if (!data.pageUrl && data.url) data.pageUrl = data.url;

    var sheet = getSheet_(data.sheetName || data.formName || DEFAULT_SHEET);
    var headers = ensureHeaders_(sheet);

    var row = headers.map(function (h) {
      var field = FIELD_FOR_HEADER[String(h).trim().toLowerCase()];
      var value = field ? data[field] : '';
      return value === undefined || value === null ? '' : value;
    });

    sheet.appendRow(row);
    return json_({ success: true });
  } catch (err) {
    return json_({ success: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Returns all leads as JSON: <exec-url>?sheet=adgro-sivakasi-leads
function doGet(e) {
  try {
    var name = (e && e.parameter && e.parameter.sheet) || DEFAULT_SHEET;
    var values = getSheet_(name).getDataRange().getValues();
    var headers = values.shift();
    var rows = values.map(function (r) {
      var o = {};
      headers.forEach(function (h, i) { o[h] = r[i]; });
      return o;
    });
    return json_({ success: true, count: rows.length, data: rows });
  } catch (err) {
    return json_({ success: false, error: String(err) });
  }
}

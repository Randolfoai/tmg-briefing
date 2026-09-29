/**
 * Code.gs - Receptor do Briefing Tocantins Mil Graus
 * Deploy: Google Apps Script > Web App
 * Acesso: qualquer pessoa (anonymous) para permitir envio sem login.
 */

const SPREADSHEET_ID = "1cVDi4PqOfqSatMtNwnlzL96CzsWSdHT6u60vi6xc88E";
const SHEET_NAME = "Respostas";

function doGet(e) {
  return jsonResponse({ ok: true, message: "Receptor do Briefing TMG ativo." });
}

function doOptions(e) {
  return jsonResponse({ ok: true });
}

function doPost(e) {
  let payload;
  try {
    payload = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonResponse({ ok: false, error: "Payload JSON inválido." }, 400);
  }

  if (!payload || typeof payload !== "object") {
    return jsonResponse({ ok: false, error: "Payload ausente." }, 400);
  }

  try {
    const sheet = getOrCreateSheet();
    const row = buildRow(payload);
    sheet.appendRow(row);
    return jsonResponse({ ok: true, message: "Resposta registrada." });
  } catch (err) {
    console.error(err);
    return jsonResponse({ ok: false, error: "Erro ao gravar na planilha: " + String(err) }, 500);
  }
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Data/Hora",
      "Versão",
      "Nome",
      "Função",
      "Visão do projeto",
      "Top 3 prioridades",
      "Critério de sucesso",
      "Site atual",
      "JSON completo"
    ]);
    sheet.getRange(1, 1, 1, 9).setFontWeight("bold");
  }
  return sheet;
}

function buildRow(payload) {
  const answers = payload.answers || {};
  return [
    payload.submittedAt || new Date().toISOString(),
    payload.formVersion || "",
    safeGet(answers, "nome"),
    safeGet(answers, "papel"),
    safeGet(answers, "visao"),
    safeGet(answers, "top3"),
    safeGet(answers, "sucesso"),
    safeGet(answers, "site_atual"),
    JSON.stringify(payload)
  ];
}

function safeGet(answers, key) {
  const v = answers[key];
  if (v === undefined || v === null) return "";
  if (Array.isArray(v)) return v.join(", ");
  return String(v);
}

function jsonResponse(data, statusCode) {
  const body = JSON.stringify(data);
  return ContentService.createTextOutput(body)
    .setMimeType(ContentService.MimeType.JSON);
}

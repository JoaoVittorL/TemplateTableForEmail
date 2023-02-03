function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getSheetByName('DATA')

  const name = sheet.getRange('B1').getValue()
  const old = sheet.getRange('B2').getValue()
  const ocupacion = sheet.getRange('B3').getValue()
  const languageOfPrograming = sheet.getRange('B4').getValue()
  const school = sheet.getRange('B5').getValue()
  const email = "vittorsantos234@gmail.com"
  const titleForEmail = "Bem vindo ao email teste"

  const htmlTemplate = HtmlService.createTemplateFromFile("templateForEmail")
  htmlTemplate.name = name
  htmlTemplate.old = old
  htmlTemplate.ocupacion = ocupacion
  htmlTemplate.languageOfPrograming = languageOfPrograming
  htmlTemplate.school = school
  const htmlForEmail = htmlTemplate.evaluate().getContent()

  MailApp.sendEmail({
    to: email,
    subject: titleForEmail,
    htmlBody: htmlForEmail
  })

}
function doGet(e){
  return HtmlService.createTemplateFromFile("index").evaluate();
  
}



// ejecuta la funcion hacer click
function hacerClick(compilado){
  
  //llamar la hoja
  var ss=SpreadsheetApp.openById("1anGeMqQlSveaBCfEW5E_IRq_ZT6Q1gSyc4LOpdm_Cuk");  
  var ws= ss.getSheetByName('Sheet2');
  
  ws.appendRow([compilado.nombreUno,compilado.nombreDos,new Date()]); //aniade una columna /*importante ver como se llaman
  
  
}


function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();

}


/************Fuentes */

/*
https://www.youtube.com/watch?v=1toLqGwMRVc
*/
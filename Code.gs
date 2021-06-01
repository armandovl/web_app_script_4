var idBaseDatos="1anGeMqQlSveaBCfEW5E_IRq_ZT6Q1gSyc4LOpdm_Cuk";


function dependiente2(acomparar){

  
  //llamar la hoja
  var ss=SpreadsheetApp.openById("1anGeMqQlSveaBCfEW5E_IRq_ZT6Q1gSyc4LOpdm_Cuk");  
  var hoja= ss.getSheetByName('Sheet1');
  
  
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoSeis= hoja.getRange(1,6, hoja.getRange("f1").getDataRegion().getLastRow(),1).getValues();
  var listaSeis=rangoSeis.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/

    /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoSiete= hoja.getRange(1,7, hoja.getRange("g1").getDataRegion().getLastRow(),1).getValues();
  var listaSiete=rangoSiete.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/

    /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoOcho= hoja.getRange(1,8, hoja.getRange("h1").getDataRegion().getLastRow(),1).getValues();
  var listaOcho=rangoOcho.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  

   //llamar la hoja
  var ss=SpreadsheetApp.openById("1anGeMqQlSveaBCfEW5E_IRq_ZT6Q1gSyc4LOpdm_Cuk");  
  var ws= ss.getSheetByName('Sheet1');
  
  ws.getRange(1,12).setValue([acomparar]);

 if(acomparar=="listaOcho"){
   return listaOcho;
 } else{
   return listaSeis;
 }
  
  

}



function doGet(e) {
  
  var libro= SpreadsheetApp.openById(idBaseDatos);
  var hoja= libro.getSheetByName("Sheet1");
  
  
  
  /******************* es importante que estas filas esten separadas por una columna en blanco*/
  
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoUno= hoja.getRange(1,1, hoja.getRange("a1").getDataRegion().getLastRow(),1).getValues();
  var listaUno=rangoUno.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  
  
  
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoDos= hoja.getRange(1,2, hoja.getRange("b1").getDataRegion().getLastRow(),1).getValues();
  var listaDos=rangoDos.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  
  
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoTres= hoja.getRange(1,4, hoja.getRange("d1").getDataRegion().getLastRow(),1).getValues();
  var listaTres=rangoTres.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/

  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/
  var rangoCuatro= hoja.getRange(1,5, hoja.getRange("e1").getDataRegion().getLastRow(),1).getValues();
  var listaCuatro=rangoCuatro.map(function(r){return '<option>' + r[0] + '</option>';}).join('');
  /*este proceso es para seleccionar la lista que vamos a poner en el select del formulario*/

  
 
  var tmp= HtmlService.createTemplateFromFile("index.html");
  tmp.list1=listaUno;
  tmp.list2=listaDos;
  tmp.list3=listaTres;
  tmp.list4=dependiente2();

 
  return tmp.evaluate();
  
 
}



// funcion pegar
function hacerClick(compilado){
  
  //llamar la hoja
  var ss=SpreadsheetApp.openById("1anGeMqQlSveaBCfEW5E_IRq_ZT6Q1gSyc4LOpdm_Cuk");  
  var ws= ss.getSheetByName('Sheet4');
  
  ws.appendRow([compilado.nombreUno,compilado.nombreDos,new Date()]); //aniade una columna /*importante ver como se llaman
  
 
  
}


function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();

}




/************Fuentes */

/*
https://www.youtube.com/watch?v=1toLqGwMRVc
*/
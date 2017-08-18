function clearTable(){
  $("#myTable td").remove();
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


let comparisonType = getParameterByName('comparison');
let getLocation = getParameterByName('location');
let jsonURL = 'json/' + comparisonType + '.json';

if (getLocation == "01-320-15kV" || getLocation == "01-321-15kV" || getLocation == "01-329A-15kV" || getLocation == "01-330-15kV"){
  jsonURL = jsonURL.replace('.json','1.json');
}

let first = getParameterByName('comparisonName').slice(0,3);
let second = getParameterByName('comparisonName').slice(8,11); <!--get second name-->
let firstEngine = first + " Engine";
let secondEngine = second + " Engine";
let firstResult = first + " Result";
let secondResult = second + " Result";

function allscripts(){
  let All = 0;
  let totalSuccess = 0;
  let totalFailure = 0;
   clearTable();
   document.getElementById("myTable").deleteRow(1);
   All = 0, totalSuccess = 0, totalFailure = 0;
   $.getJSON(jsonURL, function (result) {
    result.forEach(function(json){
      if (json.location == getLocation){
      let loadcase = json.loadcase;
      let component = json.component;
      let analysisType = json.analysisType;
      let olddate = json.olddate;
      let currentdate = json.currentdate;
      let previousEngine = json.previousEngine;
      let currentEngine = json.currentEngine;
      let previousResult = json.previousResult;
      let currentResult = json.currentResult;
      let status = json.status;
   

      let table = document.getElementById("myTable");
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
      let cell7 = row.insertCell(6);
      let cell8 = row.insertCell(7);
          
      cell1.innerHTML = loadcase;
      cell2.innerHTML = component;
      cell3.innerHTML = analysisType;
      cell4.innerHTML = previousEngine;
      cell5.innerHTML = currentEngine;
      cell6.innerHTML = Math.round(previousResult*1000000000000000)/1000000000000000; //round to the 15th digit
      cell7.innerHTML = Math.round(currentResult*1000000000000000)/1000000000000000;
      

      All++
      if (status == "success" ){
        totalSuccess++;
        cell8.innerHTML = '<a href="' + jsonURL + '"><font color="#4CAF50">Passed</font></a>';
      }else if (status == "failure"){
        totalFailure++;
        cell8.innerHTML = '<a href="' + jsonURL + '"><font color="red">Failed</font></a>';
      }
    }
  });
  document.getElementById("header").innerHTML = getLocation;
  document.getElementById("All").innerHTML = ' All: ' + All;
  document.getElementById("totalSuccess").innerHTML = ' Passed: ' + totalSuccess;
  document.getElementById("totalFailure").innerHTML = 'Failed: ' + totalFailure;
  document.getElementById("firstEngine").innerHTML = firstEngine;
  document.getElementById("secondEngine").innerHTML = secondEngine;
  document.getElementById("firstResult").innerHTML = firstResult;
  document.getElementById("secondResult").innerHTML = secondResult;
  });
 }

 function passedscripts(url,id){
  clearTable();
   document.getElementById("myTable").deleteRow(1);
   All = 0, totalSuccess = 0, totalFailure = 0;
   $.getJSON(jsonURL, function (result) {
    result.forEach(function(json){
      if (json.location == getLocation){
      let loadcase = json.loadcase;
      let component = json.component;
      let analysisType = json.analysisType;
      let olddate = json.olddate;
      let currentdate = json.currentdate;
      let previousEngine = json.previousEngine;
      let currentEngine = json.currentEngine;
      let previousResult = json.previousResult;
      let currentResult = json.currentResult;
      let status = json.status;

      if (status == "success" ){
      let table = document.getElementById("myTable");
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
      let cell7 = row.insertCell(6);
      let cell8 = row.insertCell(7);
          
      cell1.innerHTML = loadcase;
      cell2.innerHTML = component;
      cell3.innerHTML = analysisType;
      cell4.innerHTML = previousEngine;
      cell5.innerHTML = currentEngine;
      cell6.innerHTML = Math.round(previousResult*1000000000000000)/1000000000000000;
      cell7.innerHTML = Math.round(currentResult*1000000000000000)/1000000000000000;
      cell8.innerHTML = '<a href="' + jsonURL + '"><font color="#4CAF50">Passed</font></a>';
      }}
    });  
  });
 }

 function failedscripts(url,id){
  clearTable();
   document.getElementById("myTable").deleteRow(1);
   All = 0, totalSuccess = 0, totalFailure = 0;
   $.getJSON(jsonURL, function (result) {
    result.forEach(function(json){
       if (json.location == getLocation){
      let loadcase = json.loadcase;
      let component = json.component;
      let analysisType = json.analysisType;
      let olddate = json.olddate;
      let currentdate = json.currentdate;
      let previousEngine = json.previousEngine;
      let currentEngine = json.currentEngine;
      let previousResult = json.previousResult;
      let currentResult = json.currentResult;
      let status = json.status;

      if (status == "failure"){
        let table = document.getElementById("myTable");
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
          
        cell1.innerHTML = loadcase;
        cell2.innerHTML = component;
        cell3.innerHTML = analysisType;
        cell4.innerHTML = previousEngine;
        cell5.innerHTML = currentEngine;
        cell6.innerHTML = Math.round(previousResult*1000000000000000)/1000000000000000;
        cell7.innerHTML = Math.round(currentResult*1000000000000000)/1000000000000000; 
        cell8.innerHTML = '<a href="' + jsonURL + '"><font color="red">Failed</font></a>';
      }}
    });
  });
 }

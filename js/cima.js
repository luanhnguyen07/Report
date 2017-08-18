function clearTable(){
  $("#myTable td").remove();
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
let comparisonName;
if (comparisonType == "oldCurrent"){
  comparisonName = "6.4 and 7.0"
}else if  (comparisonType == "prevCurrent"){
  comparisonName = "7.0 and 7.0"
}else if  (comparisonType == "ceeCurrent"){
  comparisonName = "7.0 and CEE"
}else if  (comparisonType == "ceeCEE"){
  comparisonName = "CEE and CEE"
}


function allscripts(){
  let All = 0;
  let totalSuccess = 0;
  let totalFailure = 0;
   clearTable();
   document.getElementById("myTable").deleteRow(1);
   All = 0, totalSuccess = 0, totalFailure = 0;
   $.getJSON("json/structure.json", function (result) {
    result.forEach(function(json){
      let location = json.location;
      let type = json.type;
      let date = json.rundate;
      let status = json.status;
      
      if (type == comparisonType){
      All++; 
      let table = document.getElementById("myTable");
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
          
      cell1.innerHTML = '<a href="location.html?comparison=' + comparisonType + '&location=' + location + '&comparisonName=' + comparisonName + '">' + location + '</a>';
      cell2.innerHTML = comparisonName;
      cell3.innerHTML = date;
      

      if (status == "success" ){
      totalSuccess++;
      cell4.innerHTML = ' <a href="' + "json/structure.json" + '"><font color="#4CAF50">Passed</font></a>';
      }else if (status == "failure"){
      totalFailure++;
      cell4.innerHTML = ' <a href="' + "json/structure.json" + '"><font color="red">Failed</font></a>';
      }

    }
    }); 
  });
    $.getJSON("json/structure1.json", function (result) {
    result.forEach(function(json){
      let location = json.location;
      let type = json.type;
      let date = json.rundate;
      let status = json.status;
      
      if (type == comparisonType){
      All++; 
      let table = document.getElementById("myTable");
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
          
      cell1.innerHTML = '<a href="location.html?comparison=' + comparisonType + '&location=' + location + '&comparisonName=' + comparisonName + '">' + location + '</a>';
      cell2.innerHTML = comparisonName;
      cell3.innerHTML = date;
      
      if (status == "success" ){
      totalSuccess++;
      cell4.innerHTML = ' <a href="' + "json/structure1.json" + '"><font color="#4CAF50">Passed</font></a>';
      }else if (status == "failure"){
      totalFailure++;
      cell4.innerHTML = ' <a href="' + "json/structure1.json" + '"><font color="red">Failed</font></a>';
      }

    }
    });   
    document.getElementById("header").innerHTML = comparisonName + " ANALYSIS REPORT";
    document.getElementById("All").innerHTML = ' All: ' + All;
    document.getElementById("totalSuccess").innerHTML = ' Passed: ' + totalSuccess;
    document.getElementById("totalFailure").innerHTML = 'Failed: ' + totalFailure;
  });
 }


 function passedscripts(){
  clearTable();
   document.getElementById("myTable").deleteRow(1);
   $.getJSON("json/structure.json", function (result) {
    result.forEach(function(json){
      let location = json.location;
      let type = json.type;
      let date = json.rundate;
      let status = json.status;

      if (type == comparisonType){ 
      let table = document.getElementById("myTable");                 
      if (status == "success"){
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = '<a href="location.html?comparison=' + comparisonType + '&location=' + location + '&comparisonName=' + comparisonName + '">' + location + '</a>';
        cell2.innerHTML = comparisonName;
        cell3.innerHTML = date;
        cell4.innerHTML = ' <a href="' + "json/structure.json" + '"><font color="#4CAF50">Passed</font></a>';
      }
    }
   });
 });
     $.getJSON("json/structure1.json", function (result) {
    result.forEach(function(json){
      let location = json.location;
      let type = json.type;
      let date = json.rundate;
      let status = json.status;

      if (type == comparisonType){ 
      let table = document.getElementById("myTable");                 
      if (status == "success"){
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = '<a href="location.html?comparison=' + comparisonType + '&location=' + location + '&comparisonName=' + comparisonName + '">' + location + '</a>';
        cell2.innerHTML = comparisonName;
        cell3.innerHTML = date;
        cell4.innerHTML = ' <a href="' + "json/structure1.json" + '"><font color="#4CAF50">Passed</font></a>';
      }
    }
   });
 });
}


 function failedscripts(){
    clearTable();
   document.getElementById("myTable").deleteRow(1);
   $.getJSON("json/structure.json", function (result) {
    result.forEach(function(json){
      let location = json.location;
      let type = json.type;
      let date = json.rundate;
      let status = json.status;

      if (type == comparisonType){   
        let table = document.getElementById("myTable");
        if (status == "failure"){
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = '<a href="location.html?comparison=' + comparisonType + '&location=' + location + '&comparisonName=' + comparisonName + '">' + location + '</a>';
        cell2.innerHTML = comparisonName;
        cell3.innerHTML = date;
        cell4.innerHTML = ' <a href="' + "json/structure.json" + '"><font color="red">Failed</font></a>';
      }
    }
   });
 });
   $.getJSON("json/structure1.json", function (result) {
    result.forEach(function(json){
      let location = json.location;
      let type = json.type;
      let date = json.rundate;
      let status = json.status;

      if (type == comparisonType){   
        let table = document.getElementById("myTable");
        if (status == "failure"){
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = '<a href="location.html?comparison=' + comparisonType + '&location=' + location + '&comparisonName=' + comparisonName + '">' + location + '</a>';
        cell2.innerHTML = comparisonName;
        cell3.innerHTML = date;
        cell4.innerHTML = ' <a href="' + "json/structure1.json" + '"><font color="red">Failed</font></a>';
      }
    }
   });
 });
}
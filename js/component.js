function clearTable(){
  $("#myTable td").remove();
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function allscripts(url,id){
  let All = 0;
  let totalSuccess = 0;
  let totalFailure = 0;
   clearTable();
   document.getElementById("myTable").deleteRow(1);
   All = 0, totalSuccess = 0, totalFailure = 0;
   $.getJSON(url, function (result) {
    result.forEach(function(json){
      if (json.location == id){
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
          
      cell1.innerHTML = '<div style="min-width:415px">' + loadcase + '</div>';
      cell2.innerHTML = component;
      cell3.innerHTML = analysisType;
      cell4.innerHTML = previousEngine;
      cell5.innerHTML = currentEngine;
      cell6.innerHTML = Math.round(previousResult*1000000000000000)/1000000000000000; //round to the 15th digit
      cell7.innerHTML = Math.round(currentResult*1000000000000000)/1000000000000000;
      

      All++
      if (status == "success" ){
        totalSuccess++;
        cell8.innerHTML = '<a href="' + url + '"><font color="#4CAF50">Passed</font></a>';
      }else if (status == "failure"){
        totalFailure++;
        cell8.innerHTML = '<a href="' + url + '"><font color="red">Failed</font></a>';
      }
    }
  });
  document.getElementById("header").innerHTML = id;
  document.getElementById("All").innerHTML = ' All: ' + All;
  document.getElementById("totalSuccess").innerHTML = ' Passed: ' + totalSuccess;
  document.getElementById("totalFailure").innerHTML = 'Failed: ' + totalFailure;
  });
 }

 function passedscripts(url,id){
  clearTable();
   document.getElementById("myTable").deleteRow(1);
   All = 0, totalSuccess = 0, totalFailure = 0;
   $.getJSON(url, function (result) {
    result.forEach(function(json){
      if (json.location == id){
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
          
      cell1.innerHTML = '<div style="min-width:415px">' + loadcase + '</div>';
      cell2.innerHTML = component;
      cell3.innerHTML = analysisType;
      cell4.innerHTML = previousEngine;
      cell5.innerHTML = currentEngine;
      cell6.innerHTML = Math.round(previousResult*1000000000000000)/1000000000000000;
      cell7.innerHTML = Math.round(currentResult*1000000000000000)/1000000000000000;
      cell8.innerHTML = '<a href="' + url + '"><font color="#4CAF50">Passed</font></a>';
      }}
    });  
  });
 }

 function failedscripts(url,id){
  clearTable();
   document.getElementById("myTable").deleteRow(1);
   All = 0, totalSuccess = 0, totalFailure = 0;
   $.getJSON(url, function (result) {
    result.forEach(function(json){
       if (json.location == id){
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
          
        cell1.innerHTML = '<div style="min-width:415px">' + loadcase + '</div>';
        cell2.innerHTML = component;
        cell3.innerHTML = analysisType;
        cell4.innerHTML = previousEngine;
        cell5.innerHTML = currentEngine;
        cell6.innerHTML = Math.round(previousResult*1000000000000000)/1000000000000000;
        cell7.innerHTML = Math.round(currentResult*1000000000000000)/1000000000000000; 
        cell8.innerHTML = '<a href="' + url + '"><font color="red">Failed</font></a>';
      }}
    });
  });
 }

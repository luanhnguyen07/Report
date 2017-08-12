function clearTable(){
  $("#myTable td").remove();
}

function allscripts(url1, url2, id, link){
  var All = 0;
  var totalSuccess = 0;
  var totalFailure = 0;
   clearTable();
   document.getElementById("myTable").deleteRow(1);
   All = 0, totalSuccess = 0, totalFailure = 0;
   $.getJSON(url1, function (result) {
    result.forEach(function(json){
      let location = json.location;
      let type = json.type;
      let date = json.rundate;
      let status = json.status;
      
      if (type ==id){
      All++; 
      let table = document.getElementById("myTable");
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
          
      cell1.innerHTML = '<div style="min-width:356px"><a href="' + link + location + '.html">' + location + '</a></div>';
      cell2.innerHTML = '<div style="min-width:356px">' + type + '</div>';
      cell3.innerHTML = '<div style="min-width:356px">' + date + '</div>';
      

      if (status == "success" ){
      totalSuccess++;
      cell4.innerHTML = '<div style="min-width:356px"> <a href="' + url1 + '"><font color="#4CAF50">Passed</font></a></div>';
      }else if (status == "failure"){
      totalFailure++;
      cell4.innerHTML = '<div style="min-width:356px"> <a href="' + url1 + '"><font color="red">Failed</font></a></div>';
      }

    }
    }); 
  });
    $.getJSON(url2, function (result) {
    result.forEach(function(json){
      let location = json.location;
      let type = json.type;
      let date = json.rundate;
      let status = json.status;
      
      if (type ==id){
      All++; 
      let table = document.getElementById("myTable");
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
          
      cell1.innerHTML = '<div style="min-width:356px"><a href="' + link + location + '.html">' + location + '</a></div>';
      cell2.innerHTML = '<div style="min-width:356px">' + type + '</div>';
      cell3.innerHTML = '<div style="min-width:356px">' + date + '</div>';
      
      if (status == "success" ){
      totalSuccess++;
      cell4.innerHTML = '<div style="min-width:356px"> <a href="' + url2 + '"><font color="#4CAF50">Passed</font></a></div>';
      }else if (status == "failure"){
      totalFailure++;
      cell4.innerHTML = '<div style="min-width:356px"> <a href="' + url2 + '"><font color="red">Failed</font></a></div>';
      }

    }
    });   
    document.getElementById("All").innerHTML = ' All: ' + All;
    document.getElementById("totalSuccess").innerHTML = ' Passed: ' + totalSuccess;
    document.getElementById("totalFailure").innerHTML = 'Failed: ' + totalFailure;
  });
 }


 function passedscripts(url1, url2, id, link){
  clearTable();
   document.getElementById("myTable").deleteRow(1);
   $.getJSON(url1, function (result) {
    result.forEach(function(json){
      let location = json.location;
      let type = json.type;
      let date = json.rundate;
      let status = json.status;

      if (type == id){ 
      let table = document.getElementById("myTable");                 
      if (status == "success"){
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = '<div style="min-width:356px"><a href="' + link + location + '.html">' + location + '</a></div>';
        cell2.innerHTML = '<div style="min-width:356px">' + type + '</div>';
        cell3.innerHTML = '<div style="min-width:356px">' + date + '</div>';
        cell4.innerHTML = '<div style="min-width:356px"> <a href="' + url1 + '"><font color="#4CAF50">Passed</font></a></div>';
      }
    }
   });
 });
     $.getJSON(url2, function (result) {
    result.forEach(function(json){
      let location = json.location;
      let type = json.type;
      let date = json.rundate;
      let status = json.status;

      if (type == id){ 
      let table = document.getElementById("myTable");                 
      if (status == "success"){
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = '<div style="min-width:356px"><a href="' + link + location + '.html">' + location + '</a></div>';
        cell2.innerHTML = '<div style="min-width:356px">' + type + '</div>';
        cell3.innerHTML = '<div style="min-width:356px">' + date + '</div>';
        cell4.innerHTML = '<div style="min-width:356px"> <a href="' + url2 + '"><font color="#4CAF50">Passed</font></a></div>';
      }
    }
   });
 });
}


 function failedscripts(url1, url2, id, link){
    clearTable();
   document.getElementById("myTable").deleteRow(1);
   $.getJSON(url1, function (result) {
    result.forEach(function(json){
      let location = json.location;
      let type = json.type;
      let date = json.rundate;
      let status = json.status;

      if (type == id){   
        let table = document.getElementById("myTable");
        if (status == "failure"){
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = '<div style="min-width:356px"><a href="' + link + location + '.html">' + location + '</a></div>';
        cell2.innerHTML = '<div style="min-width:356px">' + type + '</div>';
        cell3.innerHTML = '<div style="min-width:356px">' + date + '</div>';
        cell4.innerHTML = '<div style="min-width:356px"> <a href="' + url1 + '"><font color="red">Failed</font></a></div>';
      }
    }
   });
 });
   $.getJSON(url2, function (result) {
    result.forEach(function(json){
      let location = json.location;
      let type = json.type;
      let date = json.rundate;
      let status = json.status;

      if (type == id){   
        let table = document.getElementById("myTable");
        if (status == "failure"){
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = '<div style="min-width:356px"><a href="' + link + location + '.html">' + location + '</a></div>';
        cell2.innerHTML = '<div style="min-width:356px">' + type + '</div>';
        cell3.innerHTML = '<div style="min-width:356px">' + date + '</div>';
        cell4.innerHTML = '<div style="min-width:356px"> <a href="' + url2 + '"><font color="red">Failed</font></a></div>';
      }
    }
   });
 });
}
function clearTable(){
  $("#myTable td").remove();
}

function allscripts(url, id, link){
	let All = 0;
  let totalSuccess = 0;
  let totalFailure = 0;
   clearTable();
   document.getElementById("myTable").deleteRow(1);
   $.getJSON(url, function (result) {
    result.forEach(function(json){
      let location = json.location;
      let type = json.type;
      let date = json.rundate;
      let status = json.status;
      

      if (type == id){
      	All++; 
      let table = document.getElementById("myTable");
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
          
      cell1.innerHTML = '<div style="min-width:275px"><a href="' + link + location + '.html">' + location + '</a></div>';
      cell2.innerHTML = '<div style="min-width:275px">' + type + '</div>';
      cell3.innerHTML = '<div style="min-width:275px">' + date + '</div>';
      

      if (status == "success" ){
      totalSuccess++;
      cell4.innerHTML = '<div style="min-width:275px"> <a href="' + url + '"><font color="#4CAF50">Passed</font></a></div>';
      }else if (status == "failure"){
      totalFailure++;
      cell4.innerHTML = '<div style="min-width:275px"> <a href="' + url + '"><font color="red">Failed</font></a></div>';
      }
    }
    });  
    document.getElementById("All").innerHTML = ' All: ' + All;
    document.getElementById("totalSuccess").innerHTML = ' Passed: ' + totalSuccess;
    document.getElementById("totalFailure").innerHTML = 'Failed: ' + totalFailure;
  });
 }

 function passedscripts(url, id, link){
  clearTable();
   document.getElementById("myTable").deleteRow(1);
   $.getJSON(url, function (result) {
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
        cell1.innerHTML = '<div style="min-width:275px"><a href="' + link + location + '.html">' + location + '</a></div>';
        cell2.innerHTML = '<div style="min-width:275px">' + type + '</div>';
        cell3.innerHTML = '<div style="min-width:275px">' + date + '</div>';  
        cell4.innerHTML = '<div style="min-width:275px"> <a href="' + url + '"><font color="#4CAF50">Passed</font></a></div>';
      }
    }
   });
 });
}


 function failedscripts(url, id, link){
    clearTable();
   document.getElementById("myTable").deleteRow(1);
   $.getJSON(url, function (result) {
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
        cell1.innerHTML = '<div style="min-width:275px"><a href="' + link + location + '.html">' + location + '</a></div>';
        cell2.innerHTML = '<div style="min-width:275px">' + type + '</div>';
        cell3.innerHTML = '<div style="min-width:275px">' + date + '</div>';
        cell4.innerHTML = '<div style="min-width:275px"> <a href="' + url + '"><font color="red">Failed</font></a></div>';
      }
    }
   });
 });
}





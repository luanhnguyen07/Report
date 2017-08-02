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
          
      cell1.innerHTML = '<a href="' + link + location + '.html">' + location + '</a>';
      cell2.innerHTML = type;
      cell3.innerHTML = date;
      

      if (status == "success" ){
      totalSuccess++;
      cell4.innerHTML = '<a href="' + url + '"><font color="#4CAF50">Passed</font></a>';
      }else if (status == "failure"){
      totalFailure++;
      cell2.innerHTML = type;
      cell4.innerHTML = '<a href="' + url + '"><font color="red">Failed</font></a>';
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
        cell1.innerHTML = '<a href="' + link + location + '.html">' + location + '</a>';
        cell2.innerHTML = type;
        cell3.innerHTML = date;
        cell4.innerHTML = '<a href="' + url + '"><font color="#4CAF50">Passed</font></a>';
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
        cell1.innerHTML = '<a href="' + link + location + '.html">' + location + '</a>';
        cell2.innerHTML = type;
        cell3.innerHTML = date;
        cell4.innerHTML = '<a href="' + url + '"><font color="red">Failed</font></a>';
      }
    }
   });
 });
}





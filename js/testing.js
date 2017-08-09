function getScriptName(result){
    let replaceLogFile = result.LogFile.replace("/Users/luannguyen/Desktop/calc/qa/Calc Test/Integration Test.suite/Results/","");
    let index = replaceLogFile.indexOf("\/");
    let scriptName = replaceLogFile.slice(0, index);
    return scriptName;
}

function clearTable(){
  $("#myTable td").remove();
}

function allscripts(url,github){
  let All = 0;
  let totalSuccess = 0;
  let totalFailure = 0;
   clearTable();
   document.getElementById("myTable").deleteRow(1);
   $.getJSON(url, function (result) {
    result.forEach(function(json){
        let scriptName = getScriptName(json);
        let dur = parseFloat(json.Duration);
        let duration = dur.toFixed(2) + "s";
        let status = json.Status;
        let RunDate = json.RunDate.slice(0,10);
        let errorMessage;
        let logo; 
        let githubLink = '<b><a href="' + github + scriptName + '.script"> ' + scriptName + '</b></a>';
        let logoLink;
        All++; 
        if (status == "Success"){
          logo = '<img src="../img/pass.jpg" class="passLogo">';
          errorMessage = "No Errors Found!";
          totalSuccess++;
        }else if (status == "Failure"){
          logo = '<img src="../../Images/' + scriptName +'.png" class="logo">';
          logoLink = '<a href="../../../Images/' + scriptName +'.png">';
          errorMessage = json.ErrorMessage;
          errorMessage = errorMessage.replace("Runtime Error at ","");
          errorMessage = errorMessage.replace(" - Could Not Open Image","");
          errorMessage = errorMessage.replace(" - No Image Found On Screen","");
          errorMessage = errorMessage.replace("imagefound Error", "");
          errorMessage = errorMessage.replace("-- ","")
          totalFailure++;
        }

          let table = document.getElementById("myTable");
          let row = table.insertRow(-1);
          let cell1 = row.insertCell(0);
          let cell2 = row.insertCell(1);
          let cell3 = row.insertCell(2);
          let cell4 = row.insertCell(3);
          let cell5 = row.insertCell(4);
          let cell6 = row.insertCell(5);
          
          cell1.innerHTML = githubLink;
          cell2.innerHTML = duration;
          cell3.innerHTML = RunDate;
          status == "Success" ? cell4.innerHTML = '<font color="#4CAF50">Success</font>' : cell4.innerHTML = '<font color="red">Failure</font>';
          errorMessage.includes("https") ? cell5.innerHTML = '<a href="' + errorMessage + '">' + errorMessage + '</a>' : cell5.innerHTML = errorMessage;
          status == "Success" ? cell6.innerHTML = logo : cell6.innerHTML = (logoLink + logo);
          });
    document.getElementById("All").innerHTML = ' All: ' + All;
    document.getElementById("totalSuccess").innerHTML = ' Passed: ' + totalSuccess;
    document.getElementById("totalFailure").innerHTML = 'Failed: ' + totalFailure;
  });
 }

 function passedscripts(url,github){
  clearTable();
  document.getElementById("myTable").deleteRow(1);
   $.getJSON(url, function (result) {
    result.forEach(function(json){
        let scriptName = getScriptName(json);
        let dur = parseFloat(json.Duration);
        let duration = dur.toFixed(2) + "s";
        let status = json.Status;
        let RunDate = json.RunDate.slice(0,10);
        let errorMessage;
        let logo; 
        let githubLink = '<b><a href="' + github + scriptName + '.script"> ' + scriptName + '</b></a>';
        let logoLink;
        if (json.Status == "Success"){
          logo = '<img src="../img/pass.jpg" class="passLogo">';
          status = "Success"
          errorMessage = "No Errors Found!";

          let table = document.getElementById("myTable");
          let row = table.insertRow(-1);
          let cell1 = row.insertCell(0);
          let cell2 = row.insertCell(1);
          let cell3 = row.insertCell(2);
          let cell4 = row.insertCell(3);
          let cell5 = row.insertCell(4);
          let cell6 = row.insertCell(5);        
          cell1.innerHTML = githubLink;
          cell2.innerHTML = duration;
          cell3.innerHTML = RunDate;
          cell4.innerHTML = '<font color="#4CAF50">Success</font>';
          cell5.innerHTML = '<div style="min-width:416px" >' + errorMessage + '</div>';
          cell6.innerHTML = logo;
        }
      });
  });
 }

 function failedscripts(url,github){
  clearTable();
  document.getElementById("myTable").deleteRow(1);
   $.getJSON(url, function (result) {
    result.forEach(function(json){
        let scriptName = getScriptName(json);
        let dur = parseFloat(json.Duration);
        let duration = dur.toFixed(2) + "s";
        let status = json.Status;
        let RunDate = json.RunDate.slice(0,10);
        let errorMessage;
        let logo; 
        let githubLink = '<b><a href="' + github + scriptName + '.script"> ' + scriptName + '</b></a>';
        let logoLink;
        if (json.Status == "Failure"){
          logo = '<img src="../../Images/' + scriptName +'.png" class="logo">';
          logoLink = '<a href="../../Images/' + scriptName +'.png">';
          status = "Failure";
          errorMessage = json.ErrorMessage;
        
 
          errorMessage = errorMessage.replace("Runtime Error at ","");
          errorMessage = errorMessage.replace(" - Could Not Open Image","");
          errorMessage = errorMessage.replace(" - No Image Found On Screen","");
          errorMessage = errorMessage.replace("imagefound Error", "");
          errorMessage = errorMessage.replace("-- ","")

          let table = document.getElementById("myTable");
          let row = table.insertRow(-1);
          let cell1 = row.insertCell(0);
          let cell2 = row.insertCell(1);
          let cell3 = row.insertCell(2);
          let cell4 = row.insertCell(3);
          let cell5 = row.insertCell(4);
          let cell6 = row.insertCell(5);
          
          cell1.innerHTML = githubLink;
          cell2.innerHTML = duration;
          cell3.innerHTML = RunDate;
          cell4.innerHTML = '<font color="red">Failure</font>';
          errorMessage.includes("https") ? cell5.innerHTML = '<a href="' + errorMessage + '">' + errorMessage + '</a>' : cell5.innerHTML = errorMessage;
          cell6.innerHTML = (logoLink + logo);
        }
      });
  });
 }

 allscripts(); //active</script>
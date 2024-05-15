function loadXMLDoc() {
    let statusCode = document.getElementById("statusCode").value;
    let url = "https://http.cat/"+statusCode;
     window.open(url);
  }
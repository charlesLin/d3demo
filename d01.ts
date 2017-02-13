
d3.request("2303.json")
  .mimeType("application/json")
  .get((xhr) => {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
  });
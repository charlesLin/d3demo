var url = "http://chartapi.finance.yahoo.com/instrument/1.0/2303.tw/chartdata;type=quote;range=1y/json/";
d3.text(url, (error, data) => {
  eval(data);
})

function finance_charts_json_callback(data) {
  console.log(data);
}
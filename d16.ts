var url = "http://chartapi.finance.yahoo.com/instrument/1.0/2303.tw/chartdata;type=quote;range=1y/json/?callback=myCallBack";
d3.text(url, (error, data) => {
  eval(data);
})

function myCallBack(data) {
  console.log(data);
}
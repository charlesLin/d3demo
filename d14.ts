var url = "http://chartapi.finance.yahoo.com/instrument/1.0/2303.tw/chartdata;type=quote;range=1y/json";
d3.json(url, ( data, error) => {
  console.log(error, data);
})
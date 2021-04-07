var today = moment();
$("#time-date").text(today.format("MMM Do, YYYY"));

var time = moment().format("hh:mm A");
$("#time-display").text(time);

var apiTest = function () {
    var apiUrl = 'https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=BTC&apikey=' + alphaApiKey;

 fetch(apiUrl)
  .then(function (response) {
    return response.json();

  })
  .then(function (data) {
    console.log(data);
    
    
  });
}

apiTest();
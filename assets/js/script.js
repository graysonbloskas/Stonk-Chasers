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

// Auto complete fetch request provided through API. This function uses the input value from the search bar to use an autofill option.

var autofillTargets = function(searchValue) {
    var apiUrl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' + searchValue + '&apikey='+ alphaApiKey

    fetch(apiUrl)
  .then(function (response) {
    return response.json();

  })
  .then(function (data) {
    console.log(data);
    
    
  });
}
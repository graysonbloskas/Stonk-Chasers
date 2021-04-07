var today = moment();
$("#time-date").text(today.format("MMM Do, YYYY"));

var time = moment().format("hh:mm A");
$("#time-display").text(time);


// var apiTest = function () {
//     var apiUrl = 'https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=BTC&apikey=' + alphaApiKey;


//  fetch(apiUrl)
//   .then(function (response) {
//     return response.json();

//   })
//   .then(function (data) {
//     console.log(data);
    
    
//   });
// }

// Variable needed for autofill function. 
var availableTags = []
var searchBar = $('#search')

// Auto complete fetch request provided through API. This function uses the input value from the search bar to use an autofill option.

var autofillTargets = function(searchValue) {
    // var apiUrl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' + searchValue + '&apikey='+ alphaApiKey
    var apiUrl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tes&apikey='+ alphaApiKey

   fetch(apiUrl)
  .then(function (response) {
    return response.json();

  })
  .then(function (data) {
    console.log(data);
    data.bestMatches.forEach(element => {
        var symbol = element['1. symbol']
        var name = element['2. name']
        console.log(symbol);
        console.log(name);
        // pushes the values into a global array used for autofill function
        availableTags.push(symbol);
        availableTags.push(name);
        console.log(availableTags);
    });
    
  });
}

autofillTargets();
// startBtn.addEventListener(update, autofillTargets){
// capture user input
// autofillTargets(searchValue); 
// }

$( function() {

    searchBar.autocomplete({
      source: availableTags
    });
  } );

 
  

function toggleHidden(id) {
var element = document.querySelector('#advanced-options');
if(id && id === 'default-search') {
  element && element.classList.add('hidden');
}
else if(id && id === 'advanced-search') {
element && element.classList.remove('hidden');
}
}
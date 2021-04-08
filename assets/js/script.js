var today = moment();
$("#time-date").text(today.format("MMM Do, YYYY"));

var time = moment().format("hh:mm A");
$("#time-display").text(time);


// Variable needed for autofill function. 
// var availableTags = []
// var searchBar = $('#search')

var updateTime = function() {
  document.getElementById('time-display').innerHTML = moment().format('h:mm:ss A');
} 
setInterval(updateTime, 1000);


// // Auto complete fetch request provided through API. This function uses the input value from the search bar to use an autofill option.

// var autofillTargets = function(searchValue) {
//     // var apiUrl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' + searchValue + '&apikey='+ alphaApiKey
//     var apiUrl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tes&apikey='+ alphaApiKey

//    fetch(apiUrl)
//   .then(function (response) {
//     return response.json();

//   })
//   .then(function (data) {
//     console.log(data);
//     data.bestMatches.forEach(element => {
//         var symbol = element['1. symbol']
//         var name = element['2. name']
//         console.log(symbol);
//         console.log(name);
//         // pushes the values into a global array used for autofill function
//         availableTags.push(symbol);
//         availableTags.push(name);
//         console.log(availableTags);
//     });
    
//   });
// }

// autofillTargets();
// // startBtn.addEventListener(update, autofillTargets){
// // capture user input
// // autofillTargets(searchValue); 
// // }

// $( function() {

//     searchBar.autocomplete({
//       source: availableTags
//     });
//   } );

 
  

function toggleHidden(id) {
var element = document.querySelector('#advanced-options');
if(id && id === 'default-search') {
  element && element.classList.add('hidden');
}
else if(id && id === 'advanced-search') {
element && element.classList.remove('hidden');
}
}

// Series of if / else statements that change the display currency of the ticker depending on user choice.
// Cant figure out how to get the actual widget to refresh so it displays the new lcw-base value.
var currencySelectorEl = document.querySelector('#form-stacked-select')
function toggleCurrency(event) {  
event.preventDefault();
var tickerEl = document.querySelector('#ticker')
console.log(currencySelectorEl.value);

if (currencySelectorEl.value == 'USD') {
  tickerEl.setAttribute('lcw-base', "USD");
  
}
 else if ( currencySelectorEl.value == 'EUR') {
  tickerEl.setAttribute('lcw-base', 'EUR');
  
  
}
 else if ( currencySelectorEl.value == 'GBP') {
  tickerEl.setAttribute('lcw-base', 'GBP');
  
  
}
 else if ( currencySelectorEl.value == 'JPY') {
  tickerEl.setAttribute('lcw-base', 'JPY');
  
  
}
 else if ( currencySelectorEl.value == 'BTC') {
  tickerEl.setAttribute('lcw-base', 'BTC');
  
  
}
 else if ( currencySelectorEl.value == 'ETH') {
  tickerEl.setAttribute('lcw-base', 'ETH');
  
  
}
};

currencySelectorEl.addEventListener('change', toggleCurrency);
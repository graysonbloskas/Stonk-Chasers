// All of the necessary moment code to both display and update the time display on the page. 
window.onload = function() {
  setPageData();
}
var today = moment();
$("#time-date").text(today.format("MMM Do, YYYY"));

var time = moment().format("hh:mm A");
$("#time-display").text(time);


var updateTime = function() {
  document.getElementById('time-display').innerHTML = moment().format('h:mm:ss A');
} 
setInterval(updateTime, 1000);

// // Variable needed for autofill function. 

var searchBar = $('#search');
var enterBtn = $('#generate-card');
var dropdownResponse = [];

var availableTags = [];
// Grabs from local storage, sets on DOM. Calls populate card. 
function setPageData() {
  var cardArray = window.localStorage.getItem('cryptoCard');
  var parseCards = cardArray && JSON.parse(cardArray) || [];

  parseCards && parseCards.forEach(card => {
    populateCard(card);
  });
}
// Autofill targets calls out coins list API, sets available tags, and populates the drop down. 
var autofillTargets = function() {
    var apiUrl = 'https://api.coingecko.com/api/v3/coins/list';

   fetch(apiUrl)
  .then(function (response) {
    return response.json();

  })
  .then(function (data) {

    availableTags = data.map(x => {
      var newVals = {
        label: x.symbol,
        value: x.name
      };
      return newVals;
    });
    setDropdown();
    
  });
}

autofillTargets();

// Autofill function. Dont touch.
function setDropdown() {

    searchBar.autocomplete({
      source: availableTags, 
      response: function(_, ui) {
      dropdownResponse = ui.content;
      }

    });
    searchBar.on("autocompletesearch", function(_, ui){

    })
  }

// Shows / hides the advance search elements of the HTML that will allow the user to select a more defined card. 
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

var currencySelectorEl = document.querySelector('#form-stacked-select')
function toggleCurrency(event) {  
event.preventDefault();
var usdEl = document.querySelector('#USD')
var eurEl = document.querySelector('#EUR')
var gbpEl = document.querySelector('#GBP')
var jpyEl = document.querySelector('#JPY')
var btcEl = document.querySelector('#BTC')
var ethEl = document.querySelector('#ETH')


if (currencySelectorEl.value == 'USD') {
  $(usdEl).removeClass('hide');
  $(gbpEl).addClass('hide');
  $(eurEl).addClass('hide');
  $(jpyEl).addClass('hide');
  $(btcEl).addClass('hide');
  $(ethEl).addClass('hide');
  
}
 else if ( currencySelectorEl.value == 'EUR') {
  $(eurEl).removeClass('hide');
  $(gbpEl).addClass('hide');
  $(usdEl).addClass('hide');
  $(jpyEl).addClass('hide');
  $(btcEl).addClass('hide');
  $(ethEl).addClass('hide');
  
  
}
 else if ( currencySelectorEl.value == 'GBP') {
  $(gbpEl).removeClass('hide');
  $(usdEl).addClass('hide');
  $(eurEl).addClass('hide');
  $(jpyEl).addClass('hide');
  $(btcEl).addClass('hide');
  $(ethEl).addClass('hide');
  
  
}
 else if ( currencySelectorEl.value == 'JPY') {
  $(jpyEl).removeClass('hide');
  $(gbpEl).addClass('hide');
  $(eurEl).addClass('hide');
  $(usdEl).addClass('hide');
  $(btcEl).addClass('hide');
  $(ethEl).addClass('hide');
  
  
}
 else if ( currencySelectorEl.value == 'BTC') {
  $(btcEl).removeClass('hide');
  $(gbpEl).addClass('hide');
  $(eurEl).addClass('hide');
  $(jpyEl).addClass('hide');
  $(usdEl).addClass('hide');
  $(ethEl).addClass('hide');
  
  
}
 else if ( currencySelectorEl.value == 'ETH') {
  $(ethEl).removeClass('hide');
  $(gbpEl).addClass('hide');
  $(eurEl).addClass('hide');
  $(jpyEl).addClass('hide');
  $(btcEl).addClass('hide');
  $(usdEl).addClass('hide');
  
  
}
};

currencySelectorEl.addEventListener('change', toggleCurrency);

// Event handler for the generate card button that will invoke the functions needed to call the APIs, prevent the default of the page, & reset the values of the input fields for card generation.
// // Await data from our multiple API calls, and then await data function calls our card, setting our card data. 
var generateCardBtn = document.querySelector('#generate-card');

var generateCardHandler = async function (event) {
  event.preventDefault();

  var cryptoType = searchBar.val().trim();
  var cryptoLabel = dropdownResponse && dropdownResponse.find(x => x.value === cryptoType).label;

  
  if (cryptoLabel) {
   awaitData(cryptoLabel, cryptoType);

    searchBar.textContent = '';
    searchBar.value = '';
  } else {
    alert('Please enter a valid crypto-currency');
  }
};
// promise.all awaits all API calls to return before populating the page with data. 
async function awaitData(cl, ct){
  var data = await Promise.all([getHealthIndex(cl), getVolume(cl), getCurrentPrice(cl)]);
  if(!!data){
    setCryptoCard(ct, cl, data);
    
    return;
  }
  return data;
}
// defines the card data object that is going in local storage. 
function setCryptoCard(cryptoType, cryptoLabel, res) {
  var icon = 'https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2422-thumb.png';
  var health = res && res[0];
  var highLowData = res && res[1];
  var currentCurrency = currencySelectorEl.value;
  var currPrice = res && res[2];
  var dayHighKey = '2a. high (' + currentCurrency + ')';
  var dayLowKey = '3a. low (' + currentCurrency + ')';
  var card = {
    icon: icon, //going to replace with api
    health_index: health,
    name: cryptoType, //going to add the api
    ticker: cryptoLabel, //going to add api
    current_price: currPrice[currentCurrency], //api
    day_high: highLowData[dayHighKey] || 'Unavailable', //api
    day_low: highLowData[dayLowKey] || 'Unavailable', //api
    day_vol: highLowData['5. volume']

  }; 
 


var currentSearchData = window.localStorage.getItem('cryptoCard');
var searchString = currentSearchData && JSON.parse(currentSearchData) || [];
var searchdata = [...searchString, card];
  var stringCard = JSON.stringify(searchdata);
  window.localStorage.setItem('cryptoCard', stringCard);

  populateCard(card);

}
// This long and extremely complex function dynamically creates the cards, appends them to the page
function populateCard(element) {
    var cardMainDiv = document.createElement('div'); 
    var cardMainId = cardMainDiv.setAttribute('id', 'main-card-body');
    var cardDivClass = ['uk-card', 'uk-card-default', 'uk-width-1-2@m'];
    cardMainDiv.classList.add(...cardDivClass);

    var cardInnerDiv = document.createElement('div');
    var cardInnerClass = ['uk-card-header'];
    cardInnerDiv.classList.add(...cardInnerClass);


    var cardInnerSecondDiv = document.createElement('div');
    var cardInnerSecondClass = ['uk-grid-small', 'uk-flex-middle', 'uk-grid'];
    cardInnerSecondDiv.classList.add(...cardInnerSecondClass);


    var cardInnerThirdDiv = document.createElement('div');
    var cardInnerThirdClass = ['uk-width-auto', 'uk-first-column'];
    cardInnerThirdDiv.classList.add(...cardInnerThirdClass);

    var cardInnerFourthDiv = document.createElement('div');
    var cardInnerFourthClass = ['uk-width-expand'];
    cardInnerFourthDiv.classList.add(...cardInnerFourthClass);

    var image = document.createElement('img');
    var imageClass = ['uk-border-circle'];
    image.classList.add(...imageClass);
    image.src = element.icon;
    image.width = "60";
    image.height = "60";

    var h3 = document.createElement('h3');
    var h3Class = ['uk-card-title', 'uk-margin-remove-bottom'];
    h3.classList.add(...h3Class);
    h3.innerHTML = element.name;

    var p = document.createElement('p');
    var pClass = ['uk-text-meta', 'uk-margin-right', 'uk-position-top-right']; 
    p.classList.add(...pClass);
    p.innerHTML = 'Health Index: ' + element.health_index;

    cardMainDiv.append(cardInnerDiv);
    cardInnerDiv.append(cardInnerSecondDiv);

    cardInnerThirdDiv.append(image);
    cardInnerFourthDiv.append(h3);
    cardInnerFourthDiv.append(p);

    cardInnerSecondDiv.append(cardInnerThirdDiv);
    cardInnerSecondDiv.append(cardInnerFourthDiv);

    var cardBody = document.createElement('div');
    cardBody.classList.add('uk-card-body');
    var cardBodyP1 = document.createElement('p');
    var cardBodyP2 = document.createElement('p');
    var cardBodyP3 = document.createElement('p');
    var cardBodyP4 = document.createElement('p');
    var pArr = [];

    cardBodyP1.innerHTML = 'Current Price: ' + element.current_price;
    cardBodyP2.innerHTML = '24 Hour High: ' + element.day_high;
    cardBodyP3.innerHTML = '24 Hour Low: ' + element.day_low;
    cardBodyP4.innerHTML = '24 Hour Volume: ' + element.day_vol;
    pArr.push(cardBodyP1, cardBodyP2, cardBodyP3, cardBodyP4);

    // var widget = _coinWidget(element.ticker);
    // cardBody.append(widget[0]);

    cardBody.append(...pArr);
    cardMainDiv.append(cardBody);


    var cardData = document.getElementById('main-body');
    return cardData.append(cardMainDiv);

}


// The actual event listener for the generate card button that begins all of the subsequent functions.
generateCardBtn.addEventListener('submit', generateCardHandler);

// Function that pulls the needed data from the alphaAdvantage API for health index scores.
async function getHealthIndex(cryptoType) {
  var apiUrl = 'https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=' + cryptoType
  + '&apikey=' + alphaApiKey

 return fetch(apiUrl)
 .then(function (response) {
  var res =  response.json();
  return res;

 })
.then(function (data) {
    var res = data;
  var val = res && res['Crypto Rating (FCAS)']['3. fcas rating'] || {};
  if(Object.keys(val).length === 0){
    return 'Not Available';
  }
 return val;
  
});
}

// This function pulls the needed data from the alphaAdvantage API for the 24hr Volume. 
async function getVolume(cryptoType) {
  var marketCurrency = currencySelectorEl.value;
  var apiUrl = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=' + cryptoType + '&market=' + marketCurrency + '&apikey=' + alphaApiKey

 return fetch(apiUrl)
.then(function (response) {
 var res =  response.json();
 return res;

})
.then(function (data) {
  var res = data;
var val =  res['Time Series (Digital Currency Daily)'] || data;
if(Object.keys(val).length === 0){
  return 'Not Available';
}
var _data = val && Object.keys(val).map(x => {
  return x && val[x];
});
return _data && _data[0];

});
}

// This function calls the current coin price through the CoinGecko API & returns the data for future use. 
async function getCurrentPrice(cryptoType) {
  var apiUrl = 'https://min-api.cryptocompare.com/data/price?fsym=' + cryptoType + '&tsyms=' + currencySelectorEl.value + '&api_key=' + cryptoCompareKey

 return fetch(apiUrl)
 .then(function (response) {
  var res =  response.json();
  return res;
 
 })
.then(function (data) {
 return data;

  
});
}
//creates a div with a coin widget
// function _coinWidget(cryptoType){
//   var _cryptoType = cryptoType && cryptoType.toUpperCase();
//   var coinWidget = $('<div>');
  


  // clears local storage.
  var clearBtn = document.querySelector('#clear-storage');
  clearBtn.addEventListener('click', clearStorage);

function clearStorage () {
    localStorage.clear();
    location.reload();
    };

//   coinWidget.attr('class', 'livecoinwatch-widget-1');
//   coinWidget.attr('lcw-coin', _cryptoType);
//   coinWidget.attr('lcw-base', currencySelectorEl.value);
//   coinWidget.attr('lcw-period', 'd');
//   coinWidget.attr('lcw-secondary', _cryptoType);
//   coinWidget.attr('lcw-color-tx', '#ffffff');
//   coinWidget.attr('lcw-color-pr', '#abb8c3');
//   coinWidget.attr('lcw-color-bg', '#1f2434');
//   coinWidget.attr('lcw-border-w', '1');
//   coinWidget.css({'width': '380px', 'height': '200px', 'border-radius': '5px', 'border-style': 'solid', 'text-align': 'left', 'font-family': "Helvetica Neue", 'margin': '5px', 'overflow': 'hidden', 'box-sizing': 'content-box', 'background-color':'#1f2434', 'border-color':'#000001', 'border-width':'1px'});
//   return coinWidget;
//   }


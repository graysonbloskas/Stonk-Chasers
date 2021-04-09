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
// var availableTags = ['1ST', '2GIVE', '808', 'ABT', 'ABY', 'AC', 'ACT', 'ADA', 'ADX', 'ADT', 'AE', 'AEON', 'AGI', 'AGRS', 'AI', 'AID', 'AION', 'AIR', 'AKY', 'ALIS', 'AMBER', 'AMP', 'AMPL', 'ANC', 'ANT', 'APPC', 'APX', 'ARDR', 'ARK', 'ARN', 'AST', 'ATB', 'ATM', 'ATS', 'AUR', 'AVT', 'B3', 'BAT', 'BAY', 'BBR', 'BCAP', 'BCC', 'BCD', 'BCH', 'BCN', 'BCPT', 'BCX', 'BCY', 'BDL', 'BEE', 'BELA', 'BET', 'BFT', 'BIS', 'BITB', 'BITBTC', 'BITCNY', 'BITEUR', 'BITGOLD', 'BITSILVER', 'BITUSD', 'BIX', 'BLITZ', 'BLK', 'BLN', 'BLOCK', 'BLZ', 'BMC', 'BNB', 'BNT', 'BNTY', 'BOST', 'BOT', 'BQ', 'BRD', 'BRK', 'BRX', 'BTA', 'BTC', 'BTCD', 'BTCP', 'BTG', 'BTM', 'BTS', 'BTSR', 'BTX', 'BURST', 'BUSD', 'BUZZ', 'BYC', 'BYTOM', 'C20', 'CANN', 'CAT', 'CCRB', 'CDT', 'CFI', 'CHAT', 'CHIPS', 'CLAM', 'CLOAK', 'CMP', 'CMT', 'CND', 'CNX', 'COFI', 'COSS', 'COVAL', 'CRBIT', 'CREA', 'CREDO', 'CRW', 'CSNO', 'CTR', 'CTXC', 'CURE', 'CVC', 'DAI', 'DAR', 'DASH', 'DATA', 'DAY', 'DBC', 'DBIX', 'DCN', 'DCR', 'DDF', 'DENT', 'DFS', 'DGB', 'DGC', 'DGD', 'DICE', 'DLT', 'DMD', 'DMT', 'DNT', 'DOGE', 'DOPE', 'DOT', 'DRGN', 'DTA', 'DYB', 'DYN', 'EAC', 'EBST', 'EBTC', 'ECC', 'ECN', 'EDG', 'EDO', 'EFL', 'EGC', 'EKT', 'ELA', 'EGC', 'EDO', 'EFL', 'EGC', 'EKT', 'ELA', 'ELEC', 'ELF', 'ELIX', 'EMB', 'EMC', 'EMC2', 'ENG', 'ENJ', 'ENRG', 'EOS', 'EOT', 'EQT', 'ERC', 'ETC', 'ETH', 'ETHD', 'ETHOS', 'ETN', 'ETP', 'ETT', 'EVE', 'EVX', 'EXCL', 'EXP', 'FTC', 'FLDC', 'FLO', 'FLT', 'FRST', 'FTC', 'FUEL', 'FUN', 'GAM', 'GAME', 'GAS', 'GBG', 'GBX', 'GBYTE', 'GCR', 'GEO', 'GLD', 'GNO', 'GNT', 'GOLOS', 'GRC', 'GRT', 'GRS', 'GRWI', 'GTC', 'GTO', 'GUP', 'GVT', 'GXS', 'HBN', 'HEAT', 'HMQ', 'HPB', 'HSR', 'HUSH', 'HVN', 'HXX', 'ICN', 'ICX', 'IFC', 'IFT', 'IGINS', 'INCNT', 'IND', 'INF', 'INK', 'INS', 'INSTAR', 'INT', 'INXT', 'IOC', 'ION', 'IOP', 'IOST', 'IOTA', 'IOTX', 'IQT', 'ITC', 'IXC', 'IXT', 'J8T', 'JNT', 'KCS', 'KICK', 'KIN', 'KMD', 'KNC', 'KORE', 'LBC', 'LCC', 'LEND', 'LEV', 'LGD', 'LINDA', 'LINK', 'LKK', 'LMC', 'LOCI', 'LOOM', 'LRC', 'LSK', 'LTC', 'LUN', 'MAID', 'MANA', 'MAX', 'MBRS', 'MCAP', 'MCO', 'MDA', 'MEC', 'MED', 'MEME', 'MER', 'MGC', 'MGO', 'MINEX', 'MINT', 'MITH', 'MKR', 'MLN', 'MNE', 'MNX', 'MOD', 'MONA', 'MRT', 'MSP', 'MTH', 'MTN', 'MUE', 'MUSIC', 'MYB', 'MYST', 'MZC', 'NAMO', 'NANO', 'NAS', 'NAV', 'NBT', 'NCASH', 'NDC', 'NEBL', 'NEO', 'NEOS', 'NET', 'NLC2', 'NLG', 'NMC', 'NMR', 'NOBL', 'NOTE', 'NPXS', 'NSR', 'NTO', 'NULS', 'NVC', 'NXC', 'NXT', 'OAX', 'OBITS', 'OCL', 'OCN', 'ODEM', 'ODN', 'OF', 'OK', 'OMG', 'OMNI', 'ONION', 'ONT', 'OPT', 'OST', 'PART', 'PASC', 'PAY', 'PBL', 'PBT', 'PFR', 'PING', 'PINK', 'PIVX', 'PIX', 'PLBT', 'PLR', 'PLU', 'POA', 'POE', 'POLY', 'POSW', 'POT', 'POWR', 'PPC', 'PPT', 'PPY', 'PRG', 'PRL', 'PRO', 'PST', 'PTC', 'PTOY', 'PURA', 'QASH', 'QAU', 'QLC', 'QRK', 'QRL', 'QSP', 'QTL', 'QTUM', 'QWARK', 'R', 'RAIN', 'RBIES', 'RBX', 'RBY', 'RCN', 'RDD', 'RDN', 'REC', 'RED', 'REP', 'REQ', 'RHOC', 'RIC', 'RISE', 'RLC', 'RLT', 'RPX', 'RRT', 'RUFF', 'RUP', 'RVT', 'SAFEX', 'SALT', 'SAN', 'SBD', 'SBTC', 'SC', 'SEELE', 'SEQ', 'SHIFT', 'SIB', 'SIGMA', 'SIGT', 'SJCX', 'SKIN', 'SKY', 'SLR', 'SLS', 'SMART', 'SMT', 'SNC', 'SOC', 'SOUL', 'SPANK', 'SPC', 'SPHR', 'SPR', 'SNX', 'SRN', 'START', 'STEEM', 'STK', 'STORJ', 'SOTRM', 'STQ', 'STRAT', 'STX', 'SUB', 'SWFTC', 'SWT', 'SYNX', 'SYS', 'TAAS', 'TAU', 'TCC', 'TFL', 'THC', 'THETA', 'TIME', 'TIX', 'TKN', 'TKR', 'TKS', 'TNB', 'TNT', 'TOA', 'TRAC', 'TRC', 'TRCT', 'TRIG', 'TRST', 'TRUE', 'TRUST', 'TRX', 'TUSD', 'TX', 'UBQ', 'UKG', 'ULA', 'UNB', 'UNITY', 'UNO', 'UNY', 'UP', 'URO', 'USDT', 'UTK', 'VEE', 'VEN', 'VERI', 'VIA', 'VIB', 'VIBE', 'VIVO', 'VOISE', 'VOX', 'VPN', 'VRC', 'VRM', 'VRS', 'VSL', 'VTC', 'VTR', 'WABI', 'WAN', 'WAVES', 'WAX', 'WCT', 'WDC', 'WGO', 'WGR', 'WINGS', 'WPR', 'WTC', 'WTT', 'XAS', 'XAUR', 'XBC', 'XBY', 'XCN', 'XCP', 'XDN', 'XEL', 'NEM', 'NHV', 'XID', 'XLM', 'XMG', 'XMR', 'XMT', 'XMY', 'XRL', 'XRP', 'XPEC', 'XST', 'XTZ', 'XUC', 'XVC', 'XVG', 'XWC', 'XZC', 'XZR', 'YEE', 'YOYOW', 'ZCC', 'ZCO', 'ZEC', 'ZEN', 'ZET', 'ZIL', 'ZLA', 'ZRX']
var searchBar = $('#search');
var enterBtn = $('#generate-card');
var dropdownResponse = [];

var availableTags = [];

function setPageData() {
  var cardArray = window.localStorage.getItem('cryptoCard');
  var parseCards = cardArray && JSON.parse(cardArray) || [];

  parseCards && parseCards.forEach(card => {
    populateCard(card);
  });
}

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
      response: function(event, ui) {
      dropdownResponse = ui.content;


      }

    });
    searchBar.on("autocompletesearch", function(event, ui){

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

async function awaitData(cl, ct){
  var data = await Promise.all([getHealthIndex(cl), getVolume(cl), getCurrentPrice(cl)]);
  console.log(data);
  if(!!data){
    return setCryptoCard(ct, cl, data);
  }
  return data;
}
function setCryptoCard(cryptoType, cryptoLabel, res) {
  console.log(res);
  var icon = 'https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2422-thumb.png';
  var health = res && res[0];
  var currentCurrency = currencySelectorEl.value;
  var currPrice = res && res[2];
  var card = {
    icon: icon, //going to replace with api
    health_index: health,
    name: cryptoType, //going to add the api
    ticker: cryptoLabel, //going to add api
    current_price: currPrice[currentCurrency], //api
    day_high: 60000, //api
    day_low: 50000, //api
    day_vol: 6000000
  }; 


var currentSearchData = window.localStorage.getItem('cryptoCard');
var searchString = currentSearchData && JSON.parse(currentSearchData) || [];
var searchdata = [...searchString, card];
  var stringCard = JSON.stringify(searchdata);
  window.localStorage.setItem('cryptoCard', stringCard);

  populateCard(card);

}

function populateCard(element) {
    var cardMainDiv = document.createElement('div');
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
    cardBodyP4.innerHTML = '24 Hour Volume: ' + element.current_price;
    pArr.push(cardBodyP1, cardBodyP2, cardBodyP3, cardBodyP4);

    cardBody.append(...pArr);
    cardMainDiv.append(cardBody);

    console.log(cardMainDiv);
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
  var val =  res['Crypto Rating (FCAS)']['3. fcas rating'];
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
var val =  res['Time Series (Digital Currency Daily)'];
if(Object.keys(val).length === 0){
  return 'Not Available';
}
var _data = [val];
return _data[_data.length - 1];

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
  // displayHealthIndex(data);
  
});
}
//creates a div with a coin widget
function coinWidget(cryptoType){
  var coinWidget = $('<div>');
  
  coinWidget.attr('class', 'livecoinwatch-widget-1');
  coinWidget.attr('lcw-coin', cryptoType);
  coinWidget.attr('lcw-base', currencySelectorEl.value);
  coinWidget.attr('lcw-period', 'd');
  coinWidget.attr('lcw-color-tx', '#ffffff');
  coinWidget.attr('lcw-color-pr', '#abb8c3');
  coinWidget.attr('lcw-color-bg', '#1f2434');
  coinWidget.attr('lcw-border-w', '1');
  }

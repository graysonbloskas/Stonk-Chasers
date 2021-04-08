// All of the necessary moment code to both display and update the time display on the page. 
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

var generateCardHandler = function (event) {
  event.preventDefault();

  var cryptoType = searchBar.val().trim();
  var cryptoLabel = dropdownResponse && dropdownResponse.find(x => x.value === cryptoType).label;

  
  if (cryptoType) {
    // somefunction(cryptoType);
   setCryptoCard(cryptoType, cryptoLabel);
    searchBar.textContent = '';
    searchBar.value = '';
  } else {
    alert('Please enter a valid crypto-currency');
  }
};

function setCryptoCard(cryptoType, cryptoLabel) {
  var icon = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconpacks.net%2Ffree-icon%2Fcryptocurrency-coin-2422.html&psig=AOvVaw32BydyjUbdahEvKRV2hYG1&ust=1618010434189000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjmutzk7-8CFQAAAAAdAAAAABAD';
  var card = {
    icon: icon, //going to replace with api
    health_index: 900, //going to replace with api
    name: cryptoType, //going to add the api
    ticker: cryptoLabel, //going to add api
    current_price: 52000, //api
    day_high: 60000, //api
    day_low: 50000 //api
    

  }; 
  var cardArray = window.localStorage.getItem('cryptoCard');
  var parseCards = cardArray && JSON.parse(cardArray) || [];
  var cards = parseCards && [...parseCards, card] || [];

  var stringCard = JSON.stringify(cards);
  window.localStorage.setItem('cryptoCard', stringCard);


// 
// healthIndex.text(900);
// return;
}

function populateCard() {
var headerName = $('#crypto-name');
var healthIndex = $('#health-index');
var icon = $('#card-icon');
var currentPrice = $('#current-price');
var dayHigh = $('#day-high')
var dayLow = $('#day-low');
var dayVol = $('#day-volume');

// headerName.text(cryptoType);
}



// function coinImages(symbol) {
//   var coinUrl = 'https://cryptoicons.org/api/color/' + symbol + '/600/ff00ff';
//   var headers = new Headers();
//   headers.append('Access-Control-Allow-Origin', '*');

//    fetch(coinUrl, {
//     method: 'GET',
//     mode: 'no-cors',
//     credentials: 'include'
//   })
//   .then(function (response) {
//     return response.blob();
//   })
//   .then(function(blob){
//     return URL.createObjectURL(blob);
//   })
 
// }

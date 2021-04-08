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

// Variable needed for autofill function. 
var availableTags = ['1ST', '2GIVE', '808', 'ABT', 'ABY', 'AC', 'ACT', 'ADA', 'ADX', 'ADT', 'AE', 'AEON', 'AGI', 'AGRS', 'AI', 'AID', 'AION', 'AIR', 'AKY', 'ALIS', 'AMBER', 'AMP', 'AMPL', 'ANC', 'ANT', 'APPC', 'APX', 'ARDR', 'ARK', 'ARN', 'AST', 'ATB', 'ATM', 'ATS', 'AUR', 'AVT', 'B3', 'BAT', 'BAY', 'BBR', 'BCAP', 'BCC', 'BCD', 'BCH', 'BCN', 'BCPT', 'BCX', 'BCY', 'BDL', 'BEE', 'BELA', 'BET', 'BFT', 'BIS', 'BITB', 'BITBTC', 'BITCNY', 'BITEUR', 'BITGOLD', 'BITSILVER', 'BITUSD', 'BIX', 'BLITZ', 'BLK', 'BLN', 'BLOCK', 'BLZ', 'BMC', 'BNB', 'BNT', 'BNTY', 'BOST', 'BOT', 'BQ', 'BRD', 'BRK', 'BRX', 'BTA', 'BTC', 'BTCD', 'BTCP', 'BTG', 'BTM', 'BTS', 'BTSR', 'BTX', 'BURST', 'BUSD', 'BUZZ', 'BYC', 'BYTOM', 'C20', 'CANN', 'CAT', 'CCRB', 'CDT', 'CFI', 'CHAT', 'CHIPS', 'CLAM', 'CLOAK', 'CMP', 'CMT', 'CND', 'CNX', 'COFI', 'COSS', 'COVAL', 'CRBIT', 'CREA', 'CREDO', 'CRW', 'CSNO', 'CTR', 'CTXC', 'CURE', 'CVC', 'DAI', 'DAR', 'DASH', 'DATA', 'DAY', 'DBC', 'DBIX', 'DCN', 'DCR', 'DDF', 'DENT', 'DFS', 'DGB', 'DGC', 'DGD', 'DICE', 'DLT', 'DMD', 'DMT', 'DNT', 'DOGE', 'DOPE', 'DOT', 'DRGN', 'DTA', 'DYB', 'DYN', 'EAC', 'EBST', 'EBTC', 'ECC', 'ECN', 'EDG', 'EDO', 'EFL', 'EGC', 'EKT', 'ELA', 'EGC', 'EDO', 'EFL', 'EGC', 'EKT', 'ELA', 'ELEC', 'ELF', 'ELIX', 'EMB', 'EMC', 'EMC2', 'ENG', 'ENJ', 'ENRG', 'EOS', 'EOT', 'EQT', 'ERC', 'ETC', 'ETH', 'ETHD', 'ETHOS', 'ETN', 'ETP', 'ETT', 'EVE', 'EVX', 'EXCL', 'EXP', 'FTC', 'FLDC', 'FLO', 'FLT', 'FRST', 'FTC', 'FUEL', 'FUN', 'GAM', 'GAME', 'GAS', 'GBG', 'GBX', 'GBYTE', 'GCR', 'GEO', 'GLD', 'GNO', 'GNT', 'GOLOS', 'GRC', 'GRT', 'GRS', 'GRWI', 'GTC', 'GTO', 'GUP', 'GVT', 'GXS', 'HBN', 'HEAT', 'HMQ', 'HPB', 'HSR', 'HUSH', 'HVN', 'HXX', 'ICN', 'ICX', 'IFC', 'IFT', 'IGINS', 'INCNT', 'IND', 'INF', 'INK', 'INS', 'INSTAR', 'INT', 'INXT', 'IOC', 'ION', 'IOP', 'IOST', 'IOTA', 'IOTX', 'IQT', 'ITC', 'IXC', 'IXT', 'J8T', 'JNT', 'KCS', 'KICK', 'KIN', 'KMD', 'KNC', 'KORE', 'LBC', 'LCC', 'LEND', 'LEV', 'LGD', 'LINDA', 'LINK', 'LKK', 'LMC', 'LOCI', 'LOOM', 'LRC', 'LSK', 'LTC', 'LUN', 'MAID', 'MANA', 'MAX', 'MBRS', 'MCAP', 'MCO', 'MDA', 'MEC', 'MED', 'MEME', 'MER', 'MGC', 'MGO', 'MINEX', 'MINT', 'MITH', 'MKR', 'MLN', 'MNE', 'MNX', 'MOD', 'MONA', 'MRT', 'MSP', 'MTH', 'MTN', 'MUE', 'MUSIC', 'MYB', 'MYST', 'MZC', 'NAMO', 'NANO', 'NAS', 'NAV', 'NBT', 'NCASH', 'NDC', 'NEBL', 'NEO', 'NEOS', 'NET', 'NLC2', 'NLG', 'NMC', 'NMR', 'NOBL', 'NOTE', 'NPXS', 'NSR', 'NTO', 'NULS', 'NVC', 'NXC', 'NXT', 'OAX', 'OBITS', 'OCL', 'OCN', 'ODEM', 'ODN', 'OF', 'OK', 'OMG', 'OMNI', 'ONION', 'ONT', 'OPT', 'OST', 'PART', 'PASC', 'PAY', 'PBL', 'PBT', 'PFR', 'PING', 'PINK', 'PIVX', 'PIX', 'PLBT', 'PLR', 'PLU', 'POA', 'POE', 'POLY', 'POSW', 'POT', 'POWR', 'PPC', 'PPT', 'PPY', 'PRG', 'PRL', 'PRO', 'PST', 'PTC', 'PTOY', 'PURA', 'QASH', 'QAU', 'QLC', 'QRK', 'QRL', 'QSP', 'QTL', 'QTUM', 'QWARK', 'R', 'RAIN', 'RBIES', 'RBX', 'RBY', 'RCN', 'RDD', 'RDN', 'REC', 'RED', 'REP', 'REQ', 'RHOC', 'RIC', 'RISE', 'RLC', 'RLT', 'RPX', 'RRT', 'RUFF', 'RUP', 'RVT', 'SAFEX', 'SALT', 'SAN', 'SBD', 'SBTC', 'SC', 'SEELE', 'SEQ', 'SHIFT', 'SIB', 'SIGMA', 'SIGT', 'SJCX', 'SKIN', 'SKY', 'SLR', 'SLS', 'SMART', 'SMT', 'SNC', 'SOC', 'SOUL', 'SPANK', 'SPC', 'SPHR', 'SPR', 'SNX', 'SRN', 'START', 'STEEM', 'STK', 'STORJ', 'SOTRM', 'STQ', 'STRAT', 'STX', 'SUB', 'SWFTC', 'SWT', 'SYNX', 'SYS', 'TAAS', 'TAU', 'TCC', 'TFL', 'THC', 'THETA', 'TIME', 'TIX', 'TKN', 'TKR', 'TKS', 'TNB', 'TNT', 'TOA', 'TRAC', 'TRC', 'TRCT', 'TRIG', 'TRST', 'TRUE', 'TRUST', 'TRX', 'TUSD', 'TX', 'UBQ', 'UKG', 'ULA', 'UNB', 'UNITY', 'UNO', 'UNY', 'UP', 'URO', 'USDT', 'UTK', 'VEE', 'VEN', 'VERI', 'VIA', 'VIB', 'VIBE', 'VIVO', 'VOISE', 'VOX', 'VPN', 'VRC', 'VRM', 'VRS', 'VSL', 'VTC', 'VTR', 'WABI', 'WAN', 'WAVES', 'WAX', 'WCT', 'WDC', 'WGO', 'WGR', 'WINGS', 'WPR', 'WTC', 'WTT', 'XAS', 'XAUR', 'XBC', 'XBY', 'XCN', 'XCP', 'XDN', 'XEL', 'NEM', 'NHV', 'XID', 'XLM', 'XMG', 'XMR', 'XMT', 'XMY', 'XRL', 'XRP', 'XPEC', 'XST', 'XTZ', 'XUC', 'XVC', 'XVG', 'XWC', 'XZC', 'XZR', 'YEE', 'YOYOW', 'ZCC', 'ZCO', 'ZEC', 'ZEN', 'ZET', 'ZIL', 'ZLA', 'ZRX']
var searchBar = $('#search')

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
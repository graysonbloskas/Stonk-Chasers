var today = moment();
$("#time-date").text(today.format("MMM Do, YYYY"));

var time = moment().format("hh:mm A");
$("#time-display").text(time);

var updateTime = function() {
  document.getElementById('time-display').innerHTML = moment().format('h:mm:ss A');
} 
setInterval(updateTime, 1000);


// Variable needed for autofill function. 
var availableTags = ['1ST', '2GIVE', '808', 'ABT', 'ABY', 'AC', 'ACT', 'ADA', 'ADX', 'ADT', 'AE', 'AEON', 'AGI', 'AGRS', 'AI', 'AID', 'AION', 'AIR', 'AKY', 'ALIS', 'AMBER', 'AMP', 'AMPL', 'ANC', 'ANT', 'APPC', 'APX', 'ARDR', 'ARK', 'ARN', 'AST', 'ATB', 'ATM', 'ATS', 'AUR', 'AVT', 'B3', 'BAT', 'BAY', 'BBR', 'BCAP', 'BCC', 'BCD', 'BCH', 'BCN', 'BCPT', 'BCX', 'BCY', 'BDL', 'BEE', 'BELA', 'BET', 'BFT', 'BIS', 'BITB', 'BITBTC', 'BITCNY', 'BITEUR', 'BITGOLD', 'BITSILVER', 'BITUSD', 'BIX', 'BLITZ', 'BLK', 'BLN', 'BLOCK', 'BLZ', 'BMC', 'BNB', 'BNT', 'BNTY', 'BOST', 'BOT', 'BQ', 'BRD', 'BRK', 'BRX', 'BTA', 'BTC', 'BTCD', 'BTCP', 'BTG', 'BTM', 'BTS', 'BTSR', 'BTX', 'BURST', 'BUSD', 'BUZZ', 'BYC', 'BYTOM', 'C20', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ]
var searchBar = $('#search')


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
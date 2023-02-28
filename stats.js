const coins = [`wrapped-turtlecoin`];
let twentyFourHoursAgo = (Math.round(Date.now()/1000)) - 86400; //return epoch time 24 hours ago
let now = Math.floor(Date.now()/1000); //return epoch time
const closingPrices = []

function calculateRSI(closingPrices) {
    let avgUp = 0; //calculate the average upward change
    for (let i = 1; i < closingPrices.length; i++) {
        avgUp += Math.max(0, closingPrices[i] - closingPrices[i - 1]);
    }
    avgUp /= closingPrices.length;

    let avgDwn = 0; // calculate the average downward change
    for (let i = 1; i < closingPrices.length; i++) {
        avgDwn += Math.max(0, closingPrices[i - 1] - closingPrices[i]);
    }
    avgDwn /= closingPrices.length;

    const rsi = 100 - (100 / (1 + (avgUp / avgDwn))) //relative strength index formula

    return rsi;
}

const coin_usd = new XMLHttpRequest;
coin_usd.onload = function() {
    const wtrtlPrice = JSON.parse(this.responseText);
    document.getElementById("wtrtl_price").innerHTML = wtrtlPrice[coins].usd; // return price in usd
}
coin_usd.open("GET", "https://api.coingecko.com/api/v3/simple/price?ids=wrapped-turtlecoin&vs_currencies=usd&precision=18");
coin_usd.send();

const ohlc_wtrtl_usd = new XMLHttpRequest;
ohlc_wtrtl_usd.onload = function() {
    const ohlc = JSON.parse(this.responseText);
    const iterator = ohlc.values();
    for(const value of iterator) {
        closingPrices.push(value[4])
    }

    console.log(calculateRSI(closingPrices))
    document.getElementById("rsi").innerHTML = calculateRSI(closingPrices).toFixed(1);
}
ohlc_wtrtl_usd.open("GET", "https://api.coingecko.com/api/v3/coins/wrapped-turtlecoin/ohlc?vs_currency=usd&days=1");
ohlc_wtrtl_usd.send();

/*const oneDayPrices = new XMLHttpRequest;
oneDayPrices.onload = function() {
    const coinPrices = JSON.parse(this.responseText);
    console.log(coinPrices.prices)//return previous 24h list of prices
}
oneDayPrices.open("GET", `https://api.coingecko.com/api/v3/coins/wrapped-turtlecoin/market_chart/range?vs_currency=usd&from=${twentyFourHoursAgo}&to=${now}`)
oneDayPrices.send();*/

for (coin in coins) {
    console.log(coins[coin]);
}

console.log(twentyFourHoursAgo);
console.log(now);
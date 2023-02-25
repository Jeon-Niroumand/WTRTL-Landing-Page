coins = [`wrapped-turtlecoin`];
twentyFourHoursAgo = (Math.round(Date.now()/1000)) - 86400; //return epoch time 24 hours ago
now = Math.round(Date.now()/1000); //return epoch time

const coin_usd = new XMLHttpRequest;
coin_usd.onload = function() {
    const wtrtlPrice = JSON.parse(this.responseText);
    document.getElementById("wtrtl_price").innerHTML = wtrtlPrice[coins].usd; // return price in usd
}
coin_usd.open("GET", "https://api.coingecko.com/api/v3/simple/price?ids=wrapped-turtlecoin&vs_currencies=usd&precision=18");
coin_usd.send();

const oneDayPrices = new XMLHttpRequest;
oneDayPrices.onload = function() {
    const coinPrices = JSON.parse(this.responseText);
    console.log(coinPrices.prices)//return list of prices
}
oneDayPrices.open("GET", `https://api.coingecko.com/api/v3/coins/wrapped-turtlecoin/market_chart/range?vs_currency=usd&from=${twentyFourHoursAgo}&to=${now}`)
oneDayPrices.send();

for (coin in coins) {
    console.log(coins[coin]);
}

console.log(twentyFourHoursAgo);
console.log(now);
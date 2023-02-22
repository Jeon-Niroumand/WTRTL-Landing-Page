const xmlhttp = new XMLHttpRequest;
xmlhttp.onload = function() {
    const trtlPrice = JSON.parse(this.responseText);
    document.getElementById("trtl_price").innerHTML = trtlPrice.turtlecoin.usd;
};
xmlhttp.open("GET", "https://api.coingecko.com/api/v3/simple/price?ids=turtlecoin&vs_currencies=usd&precision=18");
xmlhttp.send();


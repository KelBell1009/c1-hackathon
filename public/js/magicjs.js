var h1s = document.getElementsByClassName("item");
for (var i = 0; i < h1s.length; i++) {
    let h1 = h1s[i];
    h1.addEventListener("click", function () {
        console.log(h1.innerText);
        generatePurchase(h1.id, h1.innerText, 5, "balance", "8-18-2017", false)
    }, true);
    // h1.onclick = generatePurchase(h1.id, h1.innerText, 5, "Balance", "8-18-2017", false);

}

// console.log(h1s);

var donations = document.getElementsByClassName("donation-item");
console.log(JSON.stringify(donations));
for (var i = 0; i < donations.length; i++) {
    let h1 = donations[i];
    let text = h1.innerText.split(',')[0];
    h1.addEventListener("click", function () {
        console.log(h1.id);
        generatePurchase(h1.id, h1.innerText, 5, "balance", "8-18-2017", true)
    }, true);
    // h1.onclick = generatePurchase(h1.id, h1.innerText, 5, "Balance", "8-18-2017", false);

}
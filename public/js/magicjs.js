var h1s = document.getElementsByClassName("item");
console.log(JSON.stringify(h1s));
for (var i = 0; i < h1s.length; i++) {
    var h1 = h1s[i];
    console.log(h1.innerText);
    h1.addEventListener("click", function () {
        console.log(h1.id);
        generatePurchase(h1.id, h1.innerText, 5, "Balance", "8-18-2017", false)
    }, true);
    // h1.onclick = generatePurchase(h1.id, h1.innerText, 5, "Balance", "8-18-2017", false);

}

// console.log(h1s);
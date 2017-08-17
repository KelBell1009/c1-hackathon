function generatePurchase(store, price, time) {
    const data = {
        'store': store,
        'price': price,
        'time': time
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const settings = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    };
    let request = new Request('', settings)

    fetch('/makePurchase', settings).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
};
function generatePurchase(merchant_id, store_name, amount, medium, purchase_date, isDonation) {

    const data = {
        "merchant_id": merchant_id,
        "medium": medium,
        "purchase_date": purchase_date,
        "amount": amount,
        "description": store_name
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('isDonation', isDonation);
    const settings = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    };

    fetch('/makePurchase', settings).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
};

function getSplurge() {
    const settings = {
        method: 'GET'
    };

    fetch('/splurge', settings).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}

function createSplurge(...splurgeList) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const settings = {
        method: 'POST',
        body: JSON.stringify(splurgeList),
        headers: headers
    };

    fetch('/splurge', settings).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}

function updateSplurge(...splurgeList) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const settings = {
        method: 'PUT',
        body: JSON.stringify(splurgeList),
        headers: headers
    };

    fetch('/splurge', settings).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}

function deleteSplurge() {
    const settings = {
        method: 'DELETE'
    };

    fetch('/splurge', settings).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}

function getTransactionsByMerchant(merchantID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const settings = {
        method: 'POST',
        body: JSON.stringify({
            merchantID: merchantID
        }),
        headers: headers
    };

    fetch('/getTransactionsByMerchant', settings).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}

function getAmountByMerchant(merchantID) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const settings = {
        method: 'POST',
        body: JSON.stringify({
            merchantID: merchantID
        }),
        headers: headers
    };

    fetch('/getAmountByMerchant', settings).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}

function getAmountGoodPurchases() {
    let totalTransactions = 0;
    let goodCount = 0;
    let badCount = 0;

    const settings = {
        method: 'GET'
    };

    fetch('/splurge', settings).then((res) => {
        return res.json();
    }).then((splurgeList) => {
        fetch('/getTransactions', settings).then((res) => {
            return res.json();
        }).then((data) => {
            totalTransactions = data.length;
            badCount = 0;
            data.forEach(x => {
                let description = x.description.split(',');
                if (description.map(y => splurgeList.includes(y)).includes(true)) {
                    badCount++;
                }
            });
            goodCount = totalTransactions - badCount;
            // create pie chart here
            drawChart(goodCount, badCount);
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        console.log(err);
    });
}
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
    let headers = new Headers();
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
var transactionsJson = '[{' +
  '"_id": "5995ffbeceb8abe24251ad28",' +
  '"merchant_id": "5995f967ceb8abe24251acf1",' +
  '"medium": "balance",' +
  '"purchase_date": "2017-08-17",' +
  '"amount": 16,' +
  '"description": "Checking,Main Checking,Michael Kors",' +
  '"status": "executed",' +
  '"type": "merchant",' +
  '"payer_id": "5995ff26ceb8abe24251ad1c",' +
  '"payee_id": "5995f967ceb8abe24251acf1"}, {' +
  '"_id": "5995ffbeceb8abe24251ad28",' +
  '"merchant_id": "5995f967ceb8abe24251acf1",' +
  '"medium": "balance",' +
  '"purchase_date": "2017-08-17",' +
  '"amount": 16,' +
  '"description": "Checking,Main Checking,Michael Kors",' +
  '"status": "executed",' +
  '"type": "merchant",' +
  '"payer_id": "5995ff26ceb8abe24251ad1c",' +
  '"payee_id": "5995f967ceb8abe24251acf1"}]';

var transactionsTable = $(".transactions-table");
var transactions = JSON.parse(transactionsJson);
console.log(transactions);
transactions.forEach(function (transaction) {
  var row = document.createElement("tr");
  var descriptionElements = transaction.description.split(",");

  var merchant = document.createElement("td");
  merchant.appendChild(document.createTextNode(descriptionElements[2]));
  var accountType = document.createElement("td");
  accountType.appendChild(document.createTextNode(descriptionElements[0]));
  var nickname = document.createElement("td");
  nickname.appendChild(document.createTextNode(descriptionElements[1]));
  var date = document.createElement("td");
  date.appendChild(document.createTextNode(transaction.purchase_date));
  var amount = document.createElement("td");
  amount.appendChild(document.createTextNode(transaction.amount));

  row.appendChild(merchant);
  row.appendChild(accountType);
  row.appendChild(nickname);
  row.appendChild(date);
  row.appendChild(amount);
  transactionsTable.append(row);
});
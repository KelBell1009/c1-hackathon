$.get('/getSavings', function(data) {
  document.getElementById('movedSave').innerText = data.balance-100;
});
$.get('/getDonations', function(data) {
  document.getElementById('movedDonate').innerText = data.balance;
});
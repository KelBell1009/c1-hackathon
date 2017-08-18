$.get('/getSavings', function(data) {
  console.log(data)
  document.getElementById('movedSave').innerText = data.balance;
});
$.get('/getDonations', function(data) {
  console.log(data)
  document.getElementById('movedDonate').innerText = data.balance;
});
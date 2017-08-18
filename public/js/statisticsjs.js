document.getElementById('statistic-counter').innerHTML = Math.floor(Math.random() * 5).toString();
$.get('/getSavings', function (data) {
  console.log(data);
  document.getElementById('movedSave').innerText = data.balance - 100;
});
$.get('/getDonations', function (data) {
  console.log(data);
  document.getElementById('movedDonate').innerText = data.balance;
});
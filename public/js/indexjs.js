$(function () {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  var myVal = parseInt(document.getElementById("statistic-counter").innerText);
  if(myVal == 0) {
      $('#good').hide();
      $('#bad').hide();
      $('#baby').show();
      }
  else {
    if(myVal < 2) {
      $('#baby').hide();
      $('#good').hide();
      $('#bad').show();
    }
    else {
      $('#baby').hide();
      $('#bad').hide();
      $('#good').show();
    }
  }
  // $("cmn-toggle-4").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Dunkin' Donuts");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Dunkin' Donuts");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-1").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Dollar Tree");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Dollar Tree");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-2").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Walmart");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Walmart");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-3").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Urban Outfitters");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Urban Outfitters");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-4").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Subway");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Subway");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-5").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("McDonald's");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("McDonald's");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-6").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Sephora");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Sephora");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-7").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Target");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Target");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-8").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Kroger");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Kroger");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-9").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Starbucks");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Starbucks");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-10").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("7-Eleven");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("7-Eleven");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-11").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Michael Kors");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Michael Kors");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-12").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Home Depot");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Home Depot");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-13").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("PetSmart");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("PetSmart");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-14").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Harris Teeter");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Harris Teeter");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-15").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Costco");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Costco");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("cmn-toggle-4-16").click({
  //   let splurgeList = JSON.parse(localStorage.getItem('splurgeList'));
  //   if(splurgeList == null) {
  //     let list = [];
  //     list.append("Exxon");
  //     localStorage.setItem('splurgeList', JSON.stringify(list));
  //   }
  //   else {
  //     splurgeList.append("Exxon");
  //     localStorage.setItem('splurgeList', JSON.stringify(splurgeList));
  //   }
  // });

  // $("#cmn-toggle-4-18").click({
  //   // console.log("hello");
  //   let isDonation = localStorage.getItem("isDonation");
  //   if(typeof isDonation != 'undefined') {
  //     localStorage.setItem('isDonation', "true");
  //   }
  //   else {
  //     localStorage.setItem('isDonation', "false");
  //   }
  // });

  // Counter
  jQuery('.statistic-counter').counterUp({
    delay: 10,
    time: 2000
  });

  $.get('/getChecking', function(data) {
     document.getElementById('checking-amount').innerText = data.balance;
  });
  $.get('/getSavings', function(data) {
     document.getElementById('saving-amount').innerText = data.balance;
  });

  //doughnut pie chart
  // var ctxD = document.getElementById("doughnutChart").getContext('2d');
  // var myLineChart = new Chart(ctxD, {
  //     type: 'doughnut',
  //     data: {
  //         labels: ["Starbucks", "McDonald's", "Alcohol", "Weed"], //user data
  //         datasets: [
  //             {
  //                 data: [50, 25, 12, 13],
  //                 backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
  //                 hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"]
  //             }
  //         ]
  //     },
  //     options: {
  //         responsive: true
  //     }
  // });

  $(window).scroll(function () { //scroll stuff
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
});
// console.log("derp");
// $.ajax({
//   url: '/getTransactions',
//   type: 'GET',
//   dataType: 'json',
//   success: function (data) {
//     console.log(data);
//     $.ajax({
//       url: '/splurge',
//       type: 'GET',
//       dataType: 'json',
//       success: function (data2) {
//         console.log(data2);
//         data.forEach(function (element1) {
//           data2.forEach(function (element) {
//             if (element.length > 0) {
//               if (element1.description.split(',')[2] == element) {
//                 console.log(element1.amount);
//                 return element1.purchase_date;
//               }
//             }
//           }, this);
//         }, this);
//       },
//       error: function () {
//         data_output = true;
//         failed_call = true;
//       }
//     });
//   },
//   error: function () {
//     data_output = true;
//     failed_call = true;
//   }
// });

// $.ajax({{
//         url: '/splurge',
//         type: 'GET',
//         dataType: 'json',
//         success: function (data2) {
//         },
//         error: function () {
//           data_output = true;
//           failed_call = true;
//         }}
//       });
console.log("derp");
$.ajax({
  url: '/getTransactions',
  type: 'GET',
  dataType: 'json',
  success: function (data) {
    console.log(data);
    $.ajax({
      url: '/splurge',
      type: 'GET',
      dataType: 'json',
      success: function (data2) {
        console.log(data2);
        data.forEach(function (element1) {
          data2.forEach(function (element) {
            if (element.length > 0) {
              if (element1.description.split(',')[2] == element) {
                console.log(element1.amount);
                return element1.purchase_date;
              }
            }
          }, this);
        }, this);
      },
      error: function () {
        data_output = true;
        failed_call = true;
      }
    });
  },
  error: function () {
    data_output = true;
    failed_call = true;
  }
});

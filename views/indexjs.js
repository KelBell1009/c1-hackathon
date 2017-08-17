$(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
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
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // Counter
  jQuery('.statistic-counter').counterUp({
    delay: 10,
    time: 2000
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

  $(window).scroll(function() { //scroll stuff
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

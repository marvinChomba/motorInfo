$(document).ready(function(){
  $("#sign-up").click(function(event) {
    $("#log").show();
    $("#first").hide();
  })
  $("#slideshow > div:gt(0)").hide();
  setInterval(function () {
  $('#slideshow > div:first')
    .fadeOut(5)
    .next()
    .fadeIn(5)
    .appendTo('#slideshow');
  }, 3000)
})


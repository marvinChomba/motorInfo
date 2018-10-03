var emailRegex = /([a-z0-9-_\.]+)@([a-z]+)\.(\w+)(\.[a-z]+)?/ig
var passAndUsername = /^(\w){6,}$/i
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
  $("#to-sign-up").click(function(event) {
    $("#log").hide();
    $("#signUp").show();
  })
  $("#recover-btn").click(function() {
    $("#log").hide();
    $("#recover").show();
  })
})


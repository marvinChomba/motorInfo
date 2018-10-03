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
    event.preventDefault();
    $("#log").hide();
    $("#signUp").show();
  })
  $("#recover-btn").click(function() {
    $("#log").hide();
    $("#recover").show();
  })
  $("#recoverBtn").click(function(event) {
    event.preventDefault()
    // var email = $("#recover input[type=email]").val();
    // $("form").attr("action","https://formspree.io/" + email);
    $("#recover").hide();
    $("#recover-message").show();
  })
  $("#backBtn").click(function() {
    location.reload();
  })
})


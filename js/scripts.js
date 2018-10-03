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
  $("#create-acc-button").click(function(event) {
    event.preventDefault();
    $("#log").hide();
    $("#signUp").show();
  })
  $("#go-to-home").click(function(event) {
    event.preventDefault();
    var userFirstName = $("#first-name").val();
    var userSecondName = $("#second-name").val();
    var email = $("#sign-up-email").val();
    var firstPass = $("#first-pass").val();
    var secondPass = $("#second-pass").val();
    if(userFirstName.length === 0 || userSecondName.length === 0 || email.length === 0 || firstPass.length === 0 || secondPass.length === 0) {
      $("#fill-sign").html("<p>Please <span class='plea'>FILL</span> all the fields")
    } else {

    }
    alert("Hey");
  })
})


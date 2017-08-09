$(document).ready(function() {
  $("form#picker").submit(function() {
    event.preventDefault();
    var name = $("#name").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();

    $("#picker").toggle();

    $("#shippingLabel").append("<h3>Ship To:</h3><h4>Name: "+name+"</h4>");
    $("#shippingLabel").append("<h4>"+street+"</h4>");
    $("#shippingLabel").append("<h4>"+city+", "+state+" "+zip+"</h4>");

  });
});

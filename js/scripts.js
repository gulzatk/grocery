
$(document).ready(function() {
  $(".groceries").submit(function(event) {

    event.preventDefault();
    var str = $("input#groceryList").val();
    var formNeeds = str.split(" ");
    formNeeds.sort();
    formNeeds.forEach(function(formNeed) {
      var userInput = $("#groceryList" + formNeed).val();

      $(".list").append("<li>" + formNeed + "</li>");
      $("#groceryList").hide();

    })

  });
});

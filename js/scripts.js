
$(document).ready(function() {
  $(".formOne").submit(function(event) {

    event.preventDefault();
    var str = $("textarea#sentence").val();
    var words = str.split(" ");
    var newSentence = words.map(function(word) {
     if(word.length >= 3){
       return word + " ";
     };

   });

      $(".list").append(newSentence);

    })

  });

$(document).ready(function(){
  $("form#userForm").submit(function(event){
    event.preventDefault();
    var reverseString = ''
    var text = $("input#input").val();
    var stringArray = text.split("");
    // var backwardsString =
    // stringArray.reverse();
    // console.log(backwardsString);
    console.log(stringArray);

    for (var i=stringArray.length - 1; i>=0; i--){
      reverseString += (stringArray[i]);
    }
    $(".output").prepend(text);
    $(".output").append(reverseString);
  });
});

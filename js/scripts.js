function findAverage(num1, num2, num3, num4) {
  var average = (num1 + num2 + num3 + num4) / 4;
  return Math.round(average);
}

$(function() {

  $('button[name=start]').click(function() {
    $('button[name=start]').hide();
    $('#question1').show();
  });
  //if user selects front end, show CSS/Design Track
  //else show the next questions

  //submit
    //get average of answers and show coresponding track


});

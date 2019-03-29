function findAverage(num1, num2, num3, num4) {
  var average = (num1 + num2 + num3 + num4) / 4;
  return Math.round(average);
}

$(function() {
  $('button[name=start]').click(function() {
    $('button[name=start]').hide();
    $('#question1').show();
  });

  $('#dropdown').click(function() {
    var answer = $("#dropdown").val()
    console.log(answer);
    if (answer === '1') {
      $('.further-questions').hide();
      $('#css, #languages').show();
    } else if (answer === '0') {
      $('#languages, .language').hide();
      $('.further-questions').show();
    } else {
      console.log('Question 1 has a value error');
    }
  });
  //if user selects front end, show CSS/Design Track
  //else show the next questions

  //submit
    //get average of answers and show coresponding track

  $('button[name=start-over]').click(function() {
    location.reload();
  });
});

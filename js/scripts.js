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

  //submit
    //get average of answers and show coresponding track
  $('form').submit(function(e) {
    var answer2 = parseInt($("input:radio[name=question2]:checked").val());
    var answer3 = parseInt($("input:radio[name=question3]:checked").val());
    var answer4 = parseInt($("input:radio[name=question4]:checked").val());
    var answer5 = parseInt($("input:radio[name=question5]:checked").val());
    console.log(answer2, answer3, answer4, answer5);
    e.preventDefault();

  })

  $('button[name=start-over]').click(function() {
    location.reload();
  });
});

let questionNum = 1;
let score = 0;

$("#next").click(nextQuestion);
$("#prev").click(prevQuestion);
$("#mark").click(markQuiz);
$("#b1").click(button2016);
$("#b2").click(button2013);
$("#b3").click(button2017);
$("#b4").click(button2015);

function nextQuestion() {
  $("#question" + questionNum).hide();

  questionNum++;
  if (questionNum > 5) {
    questionNum = 1;
  }

  $("#question" + questionNum).show();
}

function prevQuestion() {
  $("#question" + questionNum).hide();

  questionNum--;
  if (questionNum < 1) {
    questionNum = 5;
  }

  $("#question" + questionNum).show();
}

function markQuiz() {
  let answer1 = $("input[name='option']:checked").val();
  let answer2 = $("#answer2").val();
  let answer3 = $("#answer3").val();
  let answer4 = $("#answer4").val();

  if (answer1 == "C") {
    $("#question1").css("background-color", "limegreen");
    score++;
  } else {
    $("#question1").css("background-color", "red");
  }

  if (answer2 == "kkOma") {
    $("#question2").css("background-color", "limegreen");
    score++;
  } else {
    $("#question2").css("background-color", "red");
  }

  if (answer3 == "3") {
    $("#question3").css("background-color", "limegreen");
    score++;
  } else {
    $("#question3").css("background-color", "red");
  }

  if (answer4 == "samsung galaxy" || answer4 == "Samsung Galaxy" || answer4 == "SSG" || answer4 == "ssg") {
    $("#question4").css("background-color", "limegreen");
    score++;
  } else {
    $("#question4").css("background-color", "red");
  }

  if ($("#b1").is(':visible')) {
    $("#question5").css("background-color", "limegreen");
    score++;
  } else {
    $("#question5").css("background-color", "red");
  }
  
  alert("Your score is " + score + " out of 5 or " + score / 5 * 100 + "%");
  score = 0;

}

function button2016() {
  $("#b2").hide('fast');
  $("#b3").hide('fast');
  $("#b4").hide('fast');
}

function button2013() {
  $("#b1").hide('fast');
  $("#b3").hide('fast');
  $("#b4").hide('fast');
}

function button2017() {
  $("#b1").hide('fast');
  $("#b2").hide('fast');
  $("#b4").hide('fast');
}

function button2015() {
  $("#b1").hide('fast');
  $("#b2").hide('fast');
  $("#b3").hide('fast');
}
